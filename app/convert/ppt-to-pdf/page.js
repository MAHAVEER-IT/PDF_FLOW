import StepperFlow from "../../components/StepperFlow";

export const metadata = {
  title: "PPT to PDF | PDF Flow",
  description: "Convert PowerPoint presentations into PDF files.",
};

export default function PptToPdfPage() {
  return (
    <main className="convert">
      <section className="convert__header">
        <p className="convert__eyebrow">PPT to PDF</p>
        <h1 className="convert__title">Convert PPT to PDF.</h1>
        <p className="convert__subtitle">
          Upload your presentation and download a PDF instantly.
        </p>
      </section>

      <section className="convert__panel">
        <StepperFlow
          presetOutput="PDF"
          lockOutput
          hideOutputStep
          accept=".ppt,.pptx"
        />
      </section>
    </main>
  );
}
