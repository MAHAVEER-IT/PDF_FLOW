"use client";

import { PDFDocument } from "pdf-lib";
import { useEffect, useMemo, useState } from "react";

const downloadBlob = (blob, fileName) => {
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const generateOutputFileName = (originalName, output) => {
  const base = originalName.replace(/\.[^/.]+$/, "");
  const suffix = output === "PDF" ? "pdf" : output.toLowerCase();
  return `${base}.${suffix}`;
};

const convertImageToPdf = async (file) => {
  const bytes = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.create();

  const extension = file.name.split(".").pop()?.toLowerCase() || "";
  let image;

  if (["jpg", "jpeg"].includes(extension)) {
    image = await pdfDoc.embedJpg(bytes);
  } else if (extension === "png") {
    image = await pdfDoc.embedPng(bytes);
  } else {
    throw new Error("This image format is not supported yet.");
  }

  const { width, height } = image.scale(1);
  const page = pdfDoc.addPage([width, height]);
  page.drawImage(image, { x: 0, y: 0, width, height });

  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: "application/pdf" });
};

const mergePdfFiles = async (files) => {
  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const sourcePdf = await PDFDocument.load(bytes);
    const pages = await mergedPdf.copyPages(sourcePdf, sourcePdf.getPageIndices());
    pages.forEach((page) => mergedPdf.addPage(page));
  }

  const pdfBytes = await mergedPdf.save();
  return new Blob([pdfBytes], { type: "application/pdf" });
};

export default function StepperFlow({
  presetOutput = "",
  lockOutput = false,
  hideOutputStep = false,
  accept = ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg,.webp",
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedOutput, setSelectedOutput] = useState("");
  const [mergeFiles, setMergeFiles] = useState([]);
  const [mergeOrder, setMergeOrder] = useState([]);
  const [mergeNotice, setMergeNotice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const maxMergeCount = 5;

  const fileType = useMemo(() => {
    if (!selectedFile) return "";
    const extension = selectedFile.name.split(".").pop()?.toLowerCase() || "";

    if (extension === "pdf") return "pdf";
    if (["doc", "docx"].includes(extension)) return "docx";
    if (["ppt", "pptx"].includes(extension)) return "ppt";
    if (["xls", "xlsx"].includes(extension)) return "excel";
    if (["png", "jpg", "jpeg", "webp"].includes(extension)) return "image";
    return "unknown";
  }, [selectedFile]);

  const outputOptions = useMemo(() => {
    if (!fileType || fileType === "unknown") return [];
    if (fileType === "pdf") return [{ value: "MERGE PDF", disabled: false }];
    if (fileType === "image") return [{ value: "PDF", disabled: false }];
    if (["docx", "ppt", "excel"].includes(fileType)) {
      return [{ value: "PDF", disabled: false }];
    }
    return [];
  }, [fileType]);

  const downloadStepNumber = hideOutputStep ? 2 : 3;
  const isComingSoon = ["docx", "ppt", "excel"].includes(fileType);
  const isMergeReady = selectedOutput === "MERGE PDF" ? mergeOrder.length > 1 : true;
  const downloadReady = Boolean(
    selectedOutput && selectedFile && fileType !== "unknown" && !isComingSoon && isMergeReady
  );

  const handleFileChange = (event) => {
    const [file] = event.target.files || [];
    setSelectedFile(file || null);
    setSelectedOutput(lockOutput ? presetOutput : "");
    setMergeFiles([]);
    setMergeOrder([]);
    setMergeNotice("");
  };

  const handleMergeFilesChange = (event) => {
    const files = Array.from(event.target.files || []);
    const remainingSlots = Math.max(0, maxMergeCount - (selectedFile ? 1 : 0));
    const combined = [...mergeFiles, ...files];
    const nextFiles = combined.slice(0, remainingSlots);
    setMergeFiles(nextFiles);

    if (combined.length > remainingSlots) {
      setMergeNotice(`Limit ${maxMergeCount} PDFs. Extra files were ignored.`);
    } else {
      setMergeNotice("");
    }
  };

  useEffect(() => {
    if (lockOutput && presetOutput) {
      setSelectedOutput(presetOutput);
    }
  }, [lockOutput, presetOutput]);

  useEffect(() => {
    if (selectedOutput !== "MERGE PDF" || fileType !== "pdf" || !selectedFile) {
      setMergeOrder([]);
      return;
    }

    const merged = [selectedFile, ...mergeFiles];
    setMergeOrder(merged);
  }, [selectedOutput, selectedFile, mergeFiles, fileType]);

  const moveMergeItem = (fromIndex, toIndex) => {
    if (toIndex < 0 || toIndex >= mergeOrder.length) return;
    const nextOrder = [...mergeOrder];
    const [moved] = nextOrder.splice(fromIndex, 1);
    nextOrder.splice(toIndex, 0, moved);

    setMergeOrder(nextOrder);
    setSelectedFile(nextOrder[0] || null);
    setMergeFiles(nextOrder.slice(1));
  };

  const handleDownload = async () => {
    if (!selectedFile || !selectedOutput) {
      setError("Please select a file and output format");
      return;
    }

    if (["docx", "ppt", "excel"].includes(fileType)) {
      setError("Thanks for your patience — this conversion is coming soon. We’re polishing it now.");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      let blob;
      let fileName;

      if (selectedOutput === "MERGE PDF") {
        if (mergeOrder.length < 2) {
          throw new Error("Add at least two PDFs to merge.");
        }
        blob = await mergePdfFiles(mergeOrder);
        fileName = "merged.pdf";
      } else if (fileType === "image") {
        blob = await convertImageToPdf(selectedFile);
        fileName = generateOutputFileName(selectedFile.name, selectedOutput);
      } else {
        throw new Error("This conversion is not available yet.");
      }

      downloadBlob(blob, fileName);
    } catch (err) {
      setError(err.message);
      console.error("Download error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="stepper">
      <div className="stepper__rail" aria-hidden="true" />

      <div className="stepper__step stepper__step--active">
        <div className="stepper__badge">1</div>
        <div className="stepper__content">
          <h3>Upload</h3>
          <p>Drop a file to detect the best outputs.</p>
          <label className="upload">
            <input
              className="upload__input"
              type="file"
              onChange={handleFileChange}
              accept={accept}
            />
            <span>
              {selectedFile
                ? `Selected: ${selectedFile.name}`
                : "Choose a file"}
            </span>
          </label>
          {fileType === "unknown" && selectedFile ? (
            <p className="stepper__warning">
              File type not supported. Try PDF, DOCX, PPT, XLSX, or PNG.
            </p>
          ) : null}
        </div>
      </div>

      {!hideOutputStep ? (
        <div
          className={`stepper__step ${
            selectedFile && fileType !== "unknown" ? "stepper__step--active" : ""
          }`}
        >
          <div className="stepper__badge">2</div>
          <div className="stepper__content">
            <h3>Choose output</h3>
            <p>
              {selectedFile
                ? `We detected ${fileType.toUpperCase()} input.`
                : "Upload a file to unlock output options."}
            </p>
            <div className="output">
              {outputOptions.length ? (
                outputOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`output__chip ${
                      selectedOutput === option.value ? "output__chip--active" : ""
                    }`}
                    disabled={option.disabled}
                    onClick={() => {
                      if (lockOutput) return;
                      if (option.disabled) return;
                      setSelectedOutput(option.value);
                      if (option.value !== "MERGE PDF") {
                        setMergeFiles([]);
                        setMergeNotice("");
                      }
                    }}
                  >
                    {option.value}
                  </button>
                ))
              ) : (
                <span className="output__placeholder">No outputs yet</span>
              )}
            </div>
            {selectedOutput === "MERGE PDF" ? (
              <div className="merge">
                <label className="upload">
                  <input
                    className="upload__input"
                    type="file"
                    multiple
                    accept=".pdf"
                    onChange={handleMergeFilesChange}
                  />
                  <span>Add more PDFs</span>
                </label>
                <div className="merge__meta">
                  <span className="merge__count">
                    {mergeOrder.length
                      ? `${mergeOrder.length} PDFs in order`
                      : "No extra PDFs yet"}
                  </span>
                </div>
                {mergeNotice ? (
                  <p className="stepper__warning">{mergeNotice}</p>
                ) : null}
                {mergeOrder.length ? (
                  <ul className="merge__list">
                    {mergeOrder.map((file, index) => (
                      <li key={`${file.name}-${index}`} className="merge__item">
                        <span className="merge__name">{file.name}</span>
                        <div className="merge__controls">
                          <button
                            type="button"
                            className="merge__move"
                            onClick={() => moveMergeItem(index, index - 1)}
                            aria-label={`Move ${file.name} up`}
                          >
                            ↑
                          </button>
                          <button
                            type="button"
                            className="merge__move"
                            onClick={() => moveMergeItem(index, index + 1)}
                            aria-label={`Move ${file.name} down`}
                          >
                            ↓
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <div
        className={`stepper__step ${selectedOutput ? "stepper__step--active" : ""}`}
      >
        <div className="stepper__badge">{downloadStepNumber}</div>
        <div className="stepper__content">
          <h3>Download</h3>
          <p>
            {downloadReady
              ? `Your ${selectedOutput} file is ready.`
              : "Upload a file to prepare the download."}
          </p>
          {isComingSoon ? (
            <p className="stepper__warning">
              This conversion is coming soon. We’re crafting a premium experience for it.
            </p>
          ) : null}
          <button
            type="button"
            className="download"
            disabled={!downloadReady || isLoading}
            onClick={handleDownload}
          >
            {isLoading ? "Converting..." : "Download file"}
          </button>
          {error && (
            <p className="stepper__warning" style={{ color: "#d32f2f", marginTop: "10px" }}>
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
