import StepperFlow from "../components/StepperFlow";

export const metadata = {
  title: "Convert Files | PDF Flow",
  description: "Upload a file and choose the output format in three steps.",
};

export default function ConvertPage() {
  return (
    <main className="convert">
      <section className="convert__header">
        <p className="convert__eyebrow">Convert in three steps</p>
        <h1 className="convert__title">Upload, choose output, download.</h1>
        <p className="convert__subtitle">
          We detect your file type and show only the outputs that make sense.
        </p>
      </section>

      <section className="convert__panel">
        <StepperFlow />
      </section>
    </main>
  );
}
