import StepperFlow from "../../components/StepperFlow";

export const metadata = {
  title: "Excel to PDF | PDF Flow",
  description: "Turn spreadsheets into clean PDF exports.",
};

export default function ExcelToPdfPage() {
  return (
    <main className="convert">
      <section className="convert__header">
        <p className="convert__eyebrow">EXCEL to PDF</p>
        <h1 className="convert__title">Convert Excel to PDF.</h1>
        <p className="convert__subtitle">
          Upload your spreadsheet and download a PDF instantly.
        </p>
      </section>

      <section className="convert__panel">
        <StepperFlow
          presetOutput="PDF"
          lockOutput
          hideOutputStep
          accept=".xls,.xlsx"
        />
      </section>
    </main>
  );
}
