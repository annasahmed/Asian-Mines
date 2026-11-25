import Link from "next/link";
import { FilmFrame } from "@/components/FilmFrame";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { PhotoFrame } from "@/components/PhotoFrame";
import { QuoteBand } from "@/components/QuoteBand";
import { films, gallery, steps } from "@/lib/content";
import { breadcrumbLd } from "@/lib/schema";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Chrome ore plant and refining",
  description:
    "The company film and the metallurgical grade film from Asian Mines and Minerals, plus how a chrome ore cargo is prepared in Pakistan.",
  path: "/plant",
});

export default function PlantPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Plant", "/plant")} />
      <PageIntro
        index="03"
        eyebrow="The works"
        current="Plant"
        title="Where the ore becomes a shipment."
        lede="Two films: the company, and the metallurgical grade. The ore is mined at Muslim Bagh and prepared before it is described to a buyer in China, Oman, or Europe."
      />

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">
              <span>03.1</span> Films
            </p>
            <h2>The company, and the metallurgical grade.</h2>
            <p className="lede">
              The first film is the company. The second is the metallurgical
              chrome ore.
            </p>
          </div>
          <div className="film-grid">
            {films.map((film) => (
              <FilmFrame key={film.base} film={film} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <div>
            <div className="section-heading">
              <p className="eyebrow">
                <span>03.2</span> Sequence
              </p>
              <h2>What the line is doing.</h2>
            </div>
            <ol className="steps">
              {steps.slice(2, 5).map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="prose">
            <p>
              Crushing sets the size. Screening holds that size. Beneficiation
              is the separation: chromite one way, barren rock the other.
              None of those steps is a guarantee of a grade you saw somewhere
              else. They are how a target specification gets within reach.
            </p>
            <p>
              Finished lots sit in yards at Muslim Bagh and in Karachi. Together
              those yards cover more than 44,000 square yards.
            </p>
            <p>
              After that, the lot is checked against the sheet. Moisture and
              size are as commercial as the chromium. A wet fine and a dry
              lump are not interchangeable, even before the assay is read.
            </p>
            <p>
              The chemistry itself is discussed on the{" "}
              <Link href="/chrome-ore">chrome ore</Link> page. The voyage is
              discussed with the <Link href="/markets">markets</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">
              <span>03.3</span> Grounds
            </p>
            <h2>Yard, sample, stockpile, loading.</h2>
          </div>
          <ul className="gallery">
            {gallery.map((item) => (
              <li key={item.index}>
                <PhotoFrame
                  imageBase={item.imageBase}
                  alt={item.alt}
                  title={item.title}
                  kicker={item.kicker}
                  caption={item.summary}
                  variant={item.variant}
                  index={item.index}
                  ratio="square"
                  sizes="(max-width: 720px) 100vw, 260px"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
