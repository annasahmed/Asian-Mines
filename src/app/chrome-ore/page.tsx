import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { PhotoFrame } from "@/components/PhotoFrame";
import { QuoteBand } from "@/components/QuoteBand";
import { gallery, parameters, products } from "@/lib/content";
import { breadcrumbLd, productLd } from "@/lib/schema";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Chrome ore from Pakistan",
  description:
    "Chrome ore (chromite) from Muslim Bagh. Lumpy, concentrate, fines, natural, refractory, and semi-refractory grades. Chemistry and size are agreed per shipment.",
  path: "/chrome-ore",
});

export default function ChromeOrePage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Chrome ore", "/chrome-ore")} />
      <JsonLd data={productLd()} />
      <PageIntro
        index="02"
        eyebrow="The product"
        current="Chrome ore"
        title="Chromite, prepared for a contract."
        lede="Chrome ore is the trade name. The mineral is chromite. Asian Mines and Minerals supplies it from Muslim Bagh to mills and traders in China, Oman, and Europe."
      />

      <section className="section">
        <div className="shell">
          <nav className="on-page" aria-label="On this page">
            <a href="#mineral">The mineral</a>
            <a href="#forms">Forms</a>
            <a href="#specification">Specification</a>
            <a href="#photographs">Photographs</a>
          </nav>
          <div className="prose" id="mineral">
            <h2>What the buyer is actually purchasing</h2>
            <p>
              Chromite is an iron chromium oxide, written FeCr₂O₄. In the
              furnace it becomes ferrochrome, and ferrochrome is what puts
              chromium into stainless steel. Refractory makers use some of
              the same family of ore. The commercial argument is rarely about
              the name. It is about how much chromium oxide is in the lot, how
              that chromium compares with the iron, and whether the pieces
              will feed the process.
            </p>
            <p>
              Pakistani chromite is the material this company exports. The
              plant crushes, screens, and beneficiates it so a shipment can
              be described in numbers a mill already uses. Those numbers are
              not a house style. They are the specification of that cargo.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="forms">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">
              <span>02.1</span> Forms
            </p>
            <h2>Lumpy, concentrate, fines, and refractory grades.</h2>
            <p className="lede">
              Ask for the form your process can take. Availability follows
              what the plant is producing against current contracts.
            </p>
          </div>
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

      <section className="section" id="specification">
        <div className="shell split">
          <article className="assay">
            <header>
              <p>Shipment sheet</p>
              <h2>What gets written down</h2>
            </header>
            <table>
              <caption className="sr-only">
                Parameters agreed for each chrome ore shipment
              </caption>
              <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Why it is on the sheet</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((row) => (
                  <tr key={row.name}>
                    <th scope="row">{row.name}</th>
                    <td>{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="assay-foot">
              Origin is Pakistan. The values are agreed for the lot. They are
              not a standing advertisement.
            </p>
          </article>
          <div className="prose">
            <h2>How to read an offer</h2>
            <p>
              Grade is the Cr₂O₃ percentage. It is not a brand. Two lots with
              the same headline grade can still differ in the chromium-to-iron
              ratio, and that ratio is what a ferrochrome producer feels in
              the yield.
            </p>
            <p>
              Silica, magnesia, and alumina are the passengers. Moisture is
              the weight you pay to move and then drive off. Size decides who
              can use the ore at all: a lumpy specification and a fine are
              different products, even when the chemistry looks close.
            </p>
            <p>
              Sampling is part of the same conversation. A buyer can appoint
              an independent surveyor against the written sheet. The{" "}
              <Link href="/plant">plant film</Link> shows the preparation. It
              does not replace the assay of the pile you are buying.
            </p>
            <p>
              When you <Link href="/contact">write</Link>, lead with quantity
              in metric tons, discharge in China, Oman, or Europe, and any target you
              already have for Cr₂O₃ and size.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="photographs">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">
              <span>02.2</span> Photographs
            </p>
            <h2>The ore, the yard, the lot.</h2>
            <p className="lede">
              The yard, a specimen, loading, and a stockpile. They show the
              work. They are not a certificate of one cargo.
            </p>
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
                  ratio="square"
                  sizes="(max-width: 720px) 100vw, 250px"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <QuoteBand
        title="Send the specification you need."
        text="If you do not have one yet, send the furnace, the quantity, and the destination."
      />
    </>
  );
}
