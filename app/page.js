import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "PDF Flow | Premium File Conversion",
  description:
    "Convert DOCX, PPT, XLSX, and images into PDF in seconds. Premium output, zero clutter.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PDF Flow | Premium File Conversion",
    description:
      "Convert DOCX, PPT, XLSX, and images into PDF in seconds. Premium output, zero clutter.",
    type: "website",
    siteName: "PDF Flow",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Flow | Premium File Conversion",
    description:
      "Convert DOCX, PPT, XLSX, and images into PDF in seconds. Premium output, zero clutter.",
  },
};

export default function Home() {
  return (
    <main className="landing">
      <div className="landing__glow" aria-hidden="true" />

      <section className="landing__left">
        <p className="landing__eyebrow">Hello, welcome to PDF Flow</p>
        <h1 className="landing__title">
          Turn everyday files into a premium PDF experience.
        </h1>
        <p className="landing__subtitle">
          Clean conversions. Zero clutter. A fast, elegant path from DOCX, PPT,
          PNG, and XLSX to perfect PDF exports.
        </p>

        <div className="landing__actions">
              <Link className="landing__cta" href="/convert">
                Start a conversion
              </Link>
          <span className="landing__note">No sign-in required</span>
        </div>
      </section>

      <section className="landing__right" aria-label="File conversion preview">
        <div className="orbit">
          <div className="orbit__center">
            <Image
              src="/images/pdf.png"
              alt="PDF"
              width={320}
              height={320}
              priority
            />
          </div>

          <div className="orbit__item orbit__item--docx">
            <Image src="/images/docx.png" alt="DOCX" width={140} height={140} />
          </div>
          <div className="orbit__item orbit__item--ppt">
            <Image src="/images/ppt.png" alt="PPT" width={140} height={140} />
          </div>
          <div className="orbit__item orbit__item--png">
            <Image src="/images/png.png" alt="PNG" width={140} height={140} />
          </div>
          <div className="orbit__item orbit__item--xls">
            <Image src="/images/excel.png" alt="XLS" width={140} height={140} />
          </div>
        </div>
      </section>
    </main>
  );
}

