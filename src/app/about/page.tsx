import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { PhotoFrame } from "@/components/PhotoFrame";
import { QuoteBand } from "@/components/QuoteBand";
import { breadcrumbLd } from "@/lib/schema";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "About the exporter",
  description:
    "Asian Mines and Minerals, established in 2018, exports chrome ore from Muslim Bagh. Yards in Muslim Bagh and Karachi. China, Oman, and Europe.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("About", "/about")} />
      <PageIntro
        index="01"
        eyebrow="The company"
        current="About"
        title="Chrome ore from Muslim Bagh, since 2018."
        lede="Asian Mines and Minerals exports Pakistani chrome ore. China takes most of it. The same ore also goes to Oman and to Europe. The head office is in Karachi, with a presence in Muslim Bagh."
      />
      <section className="section">
        <div className="shell split">
          <div className="prose">
            <p>
              The company was established in 2018, by the grace of Allah, to
              move chrome ore from Muslim Bagh into the export trade. Monthly
              capacity is about 10,000 to 12,000 metric tons, across lumpy ore,
              concentrate, fines, natural grade, and refractory and
              semi-refractory grades. The ore is held in yards at Muslim Bagh
              and in Karachi. Together those yards cover more than 44,000
              square yards.
            </p>
            <p>
              We do not print a standing assay. Chromite varies with the face
              and with the preparation, so a single Cr₂O₃ number would be a
              costume. The number that matters is the one on the shipment
              sheet, agreed before the cargo moves.
            </p>
            <p>
              If you are buying for a furnace in China, or for a works in Oman
              or Europe, start with the <Link href="/chrome-ore">ore</Link>,
              the <Link href="/plant">films</Link>, and a{" "}
              <Link href="/contact">quantity</Link>.
            </p>
          </div>
          <dl className="define">
            <div>
              <dt>Established</dt>
              <dd>2018.</dd>
            </div>
            <div>
              <dt>Origin</dt>
              <dd>Muslim Bagh, Pakistan.</dd>
            </div>
            <div>
              <dt>Capacity</dt>
              <dd>About 10,000–12,000 MT a month.</dd>
            </div>
            <div>
              <dt>Offices</dt>
              <dd>Karachi, and Muslim Bagh.</dd>
            </div>
            <div>
              <dt>Yards</dt>
              <dd>Muslim Bagh and Karachi. More than 44,000 square yards.</dd>
            </div>
            <div>
              <dt>Buyers</dt>
              <dd>Mainly China. Also Oman and Europe.</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="section">
        <div className="shell split">
          <PhotoFrame
            imageBase="/media/company/azizullah"
            alt="Azizullah Kakar of Asian Mines and Minerals"
            title="Azizullah Kakar"
            kicker="Leadership"
            caption="Chrome and mining specialist from Muslim Bagh, with more than fifteen years in the trade."
            ratio="portrait"
            sizes="(max-width: 800px) 100vw, 480px"
          />
          <div className="prose">
            <h2>Azizullah Kakar</h2>
            <p>
              Mr. Azizullah Kakar is the proprietor. He is a chrome and mining
              specialist from Muslim Bagh, and he has spent more than fifteen
              years in this trade.
            </p>
            <p>
              In 2023 the Federation of Pakistan Chambers of Commerce and Industry
              presented Asian Mines and Minerals with its Best Export
              Performance Award for chrome ore.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell split">
          <div className="prose">
            <h2>The trophy</h2>
            <p>
              The 2023 award is for chrome ore export performance. It is engraved
              for Asian Mines and Minerals, Karachi. It is not a substitute
              for the assay on a given cargo.
            </p>
          </div>
          <PhotoFrame
            imageBase="/media/company/trophy-2023"
            alt="2023 FPCCI Best Export Performance Award trophy, engraved for Asian Mines and Minerals, Karachi, chrome ore"
            title="Best Export Performance"
            kicker="2023"
            caption="Engraved for Asian Mines and Minerals, Karachi, chrome ore."
            ratio="portrait"
            sizes="(max-width: 800px) 100vw, 480px"
          />
        </div>
      </section>
      <QuoteBand
        title="If the ore fits, write."
        text="Tell us where it needs to go and what the furnace will accept."
      />
    </>
  );
}
