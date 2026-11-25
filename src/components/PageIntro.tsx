import Link from "next/link";

export function PageIntro({
  index,
  eyebrow,
  title,
  lede,
  current,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lede: string;
  current: string;
}) {
  return (
    <header className="page-intro">
      <div className="shell">
        <nav aria-label="Breadcrumb" className="crumbs">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">{current}</li>
          </ol>
        </nav>
        <p className="eyebrow">
          <span>{index}</span> {eyebrow}
        </p>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </header>
  );
}
