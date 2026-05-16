"use client";

import Image from "next/image";
import Link from "next/link";

export default function ErrorPage({ reset }) {
  return (
    <main className="error-page">
      <div className="error-page__content">
        <p className="error-page__eyebrow">Something went wrong</p>
        <h1 className="error-page__title">We hit an unexpected error.</h1>
        <p className="error-page__subtitle">
          Try again or head back to the homepage.
        </p>
        <div className="error-page__actions">
          <button className="landing__cta" type="button" onClick={reset}>
            Try again
          </button>
          <Link className="error-page__link" href="/">
            Back to home
          </Link>
        </div>
      </div>

      <div className="error-page__art">
        <Image
          src="/images/error.png"
          alt="Error"
          width={520}
          height={420}
          priority
        />
      </div>
    </main>
  );
}
