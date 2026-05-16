import StepperFlow from "../../components/StepperFlow";

export const metadata = {
  title: "Merge PDFs | PDF Flow",
  description: "Combine multiple PDFs into one file in minutes.",
};

export default function PdfMergePage() {
  return (
    <main className="convert">
      <section className="convert__header">
        <p className="convert__eyebrow">Merge PDFs</p>
        <h1 className="convert__title">Merge PDF files.</h1>
        <p className="convert__subtitle">
          Upload a PDF, add more, and download a single combined file.
        </p>
      </section>

      <section className="convert__panel">
        <StepperFlow presetOutput="MERGE PDF" lockOutput accept=".pdf" />
      </section>
    </main>
  );
}
