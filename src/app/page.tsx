import Link from "next/link";
import { FilmFrame } from "@/components/FilmFrame";
import { HeroVideo } from "@/components/HeroVideo";
import { JsonLd } from "@/components/JsonLd";
import { PhotoFrame } from "@/components/PhotoFrame";
import { QuoteBand } from "@/components/QuoteBand";
import { RouteMap } from "@/components/RouteMap";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs, films, products, steps, visits } from "@/lib/content";
import { faqLd } from "@/lib/schema";
import { pageMeta, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Asian Mines and Minerals | Chrome Ore Exporter from Pakistan",
  description: site.description,
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqLd()} />
      <section className="hero">
        <HeroVideo />
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow">
              <span>01</span> Chrome ore exporter
            </p>
            <h1>
              Chrome ore
              <em> from Muslim Bagh.</em>
            </h1>
            <p className="lede">
              Asian Mines and Minerals exports Pakistani chrome ore to China,
              and also to Oman and Europe. The grade is written for the
              shipment, not printed as a slogan.
            </p>
            <div className="hero-actions">
              <Link href="/chrome-ore" className="btn btn-fill">
                See the ore
              </Link>
              <Link href="/plant" className="btn btn-line-light">
                Watch the films
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="shell stat-wrap">
        <div className="stat-bar">
          <div>
            <span>Since</span>
            <strong>2018</strong>
          </div>
          <div>
            <span>Monthly capacity</span>
            <strong>10–12,000 MT</strong>
          </div>
          <div>
            <span>Origin</span>
            <strong>Muslim Bagh</strong>
          </div>
          <div>
            <span>Markets</span>
            <strong>China, Oman, Europe</strong>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="shell split">
          <div>
            <SectionHeading
              index="02"
              eyebrow="The material"
              title="Chromite, sold as chrome ore."
              lede="Steel mills reduce it to ferrochrome, then melt that into stainless steel. Some lots go to refractories. The buyer is purchasing chemistry and size."
            />
            <div className="prose">
              <p>
                A useful first conversation is short. How much Cr₂O₃, how the
                chromium sits against the iron, how much silica comes with it,
                how wet the lot is, and whether the pieces are lumpy, fine, or
                a concentrate.
              </p>
              <p>
                Asian Mines and Minerals does that work in Pakistan, then
                ships the ore.{" "}
                <Link href="/markets">China is the main discharge.</Link> Oman
                and Europe take the same ore. The{" "}
                <Link href="/chrome-ore">specification is agreed per cargo</Link>.
              </p>
            </div>
          </div>
          <dl className="define">
            <div>
              <dt>Mineral</dt>
              <dd>Chromite, the ore of chromium.</dd>
            </div>
            <div>
              <dt>Usual path</dt>
              <dd>Ore, then ferrochrome, then stainless steel.</dd>
            </div>
            <div>
              <dt>What gets fixed</dt>
              <dd>Cr₂O₃, Cr/Fe, silica, moisture, and size.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section" id="ore">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="The ore"
            title="Six grades buyers ask for."
            lede="Lumpy ore, concentrate, fines, natural grade, and refractory and semi-refractory grades. What is available follows the works at Muslim Bagh."
          />
          <ul className="card-grid">
            {products.map((product) => (
              <li key={product.index}>
                <PhotoFrame
                  imageBase={product.imageBase}
                  alt={product.alt}
                  title={product.title}
                  kicker={product.kicker}
                  caption={product.summary}
                  variant={product.variant}
                  ratio="square"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="films">
        <div className="shell">
          <SectionHeading
            index="04"
            eyebrow="The works"
            title="Two films from the company."
            lede="The company film, then a closer look at the metallurgical grade. Press play. Nothing here autoplays with sound."
          />
          <div className="film-grid">
            {films.map((film) => (
              <FilmFrame key={film.base} film={film} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="award">
        <div className="shell split award-split">
          <div>
            <SectionHeading
              index="05"
              eyebrow="FPCCI · 2023"
              title="Best Export Performance Award."
              lede="In 2023 the Federation of Pakistan Chambers of Commerce and Industry presented Asian Mines and Minerals with the Best Export Performance Award for chrome ore."
            />
            <div className="prose">
              <p>
                The trophy is engraved for Asian Mines and Minerals, Karachi,
                chrome ore. It marks the export work. It does not stand in for
                the assay on a given cargo.
              </p>
            </div>
          </div>
          <PhotoFrame
            imageBase="/media/company/trophy-2023"
            alt="2023 FPCCI Best Export Performance Award trophy, engraved for Asian Mines and Minerals, Karachi, chrome ore"
            title="Best Export Performance Award"
            kicker="2023"
            caption="Awarded by the Federation of Pakistan Chambers of Commerce and Industry."
            ratio="portrait"
            sizes="280px"
            className="award-plate"
          />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            index="06"
            eyebrow="The company"
            title="With buyers in China."
            lede="Working meetings with buyers in China, where most of the ore is sold."
          />
          <ul className="gallery visit-grid">
            {visits.map((item) => (
              <li key={item.imageBase}>
                <PhotoFrame
                  imageBase={item.imageBase}
                  alt={item.alt}
                  title={item.title}
                  kicker={item.kicker}
                  caption={item.summary}
                  ratio={item.ratio}
                  sizes="(max-width: 800px) 100vw, 540px"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band-pine" id="markets">
        <div className="shell">
          <SectionHeading
            index="07"
            eyebrow="Where it goes"
            title="China first. Oman and Europe as well."
            lede="Select a market. The route is the same idea either way: a written specification, a quantity, and a ship out of Pakistan."
          />
          <RouteMap />
          <Link href="/markets" className="btn btn-line-light">
            Read the markets
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            index="08"
            eyebrow="A shipment"
            title="From a note to a cargo."
          />
          <ol className="steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="questions">
        <div className="shell">
          <SectionHeading
            index="09"
            eyebrow="Questions"
            title="Before you write."
          />
          <div className="faq">
            {faqs.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
