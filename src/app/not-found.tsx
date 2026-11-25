import Link from "next/link";

export default function NotFound() {
  return (
    <header className="page-intro">
      <div className="shell">
        <p className="eyebrow">
          <span>404</span> Missing page
        </p>
        <h1>That page is not on this site.</h1>
        <p className="lede">
          The ore, the plant, and the inquiry form are still here.
        </p>
        <div className="hero-actions">
          <Link href="/" className="btn btn-fill">
            Home
          </Link>
          <Link href="/contact" className="btn btn-line">
            Request a quote
          </Link>
        </div>
      </div>
    </header>
  );
}
