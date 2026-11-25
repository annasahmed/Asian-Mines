"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <header className="page-intro">
      <div className="shell">
        <p className="eyebrow">
          <span>00</span> Something failed
        </p>
        <h1>This page did not open.</h1>
        <p className="lede">
          The rest of the site is still there. Try the page again, or go back
          to the home page.
        </p>
        <div className="hero-actions">
          <button type="button" className="btn btn-fill" onClick={() => reset()}>
            Try again
          </button>
          <Link href="/" className="btn btn-line">
            Home
          </Link>
        </div>
      </div>
    </header>
  );
}
