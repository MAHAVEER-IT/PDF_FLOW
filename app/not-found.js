import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__content">
        <p className="not-found__eyebrow">Page not found</p>
        <h1 className="not-found__title">We could not find that page.</h1>
        <p className="not-found__subtitle">
          The link may be broken or the page may have moved.
        </p>
        <div className="not-found__actions">
          <Link className="landing__cta" href="/">
            Back to home
          </Link>
        </div>
      </div>

      <div className="not-found__art">
        <Image
          src="/images/custom-404.png"
          alt="404"
          width={560}
          height={420}
          priority
        />
      </div>
    </main>
  );
}
