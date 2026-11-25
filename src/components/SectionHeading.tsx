export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  id,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  id?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{index}</span> {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
      {lede ? <p className="lede">{lede}</p> : null}
    </div>
  );
}
