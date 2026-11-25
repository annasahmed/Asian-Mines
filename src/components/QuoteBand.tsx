import Link from "next/link";

export function QuoteBand({
  title = "Tell us the cargo.",
  text = "A quantity, a destination, and the chemistry you need are enough to start.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="quote-band" aria-label="Request a quote">
      <div className="shell quote-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link href="/contact" className="btn btn-fill">
          Request a quote
        </Link>
      </div>
    </section>
  );
}
