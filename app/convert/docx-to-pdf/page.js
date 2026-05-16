import StepperFlow from "../../components/StepperFlow";

export const metadata = {
  title: "DOCX to PDF | PDF Flow",
  description: "Convert DOCX documents into polished PDFs.",
};

export default function DocxToPdfPage() {
  return (
    <main className="convert">
      <section className="convert__header">
        <p className="convert__eyebrow">DOCX to PDF</p>
        <h1 className="convert__title">Convert DOCX to PDF.</h1>
        <p className="convert__subtitle">
          Upload your DOCX and download a PDF instantly.
        </p>
      </section>

      <section className="convert__panel">
        <StepperFlow
          presetOutput="PDF"
          lockOutput
          hideOutputStep
          accept=".doc,.docx"
        />
      </section>
    </main>
  );
}
