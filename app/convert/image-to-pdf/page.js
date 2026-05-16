import StepperFlow from "../../components/StepperFlow";

export const metadata = {
  title: "Image to PDF | PDF Flow",
  description: "Convert images into a single PDF in seconds.",
};

export default function ImageToPdfPage() {
  return (
    <main className="convert">
      <section className="convert__header">
        <p className="convert__eyebrow">Image to PDF</p>
        <h1 className="convert__title">Convert images to PDF.</h1>
        <p className="convert__subtitle">
          Upload an image and download a PDF instantly.
        </p>
      </section>

      <section className="convert__panel">
        <StepperFlow
          presetOutput="PDF"
          lockOutput
          hideOutputStep
          accept=".png,.jpg,.jpeg,.webp"
        />
      </section>
    </main>
  );
}
