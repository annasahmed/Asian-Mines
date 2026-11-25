import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { QuoteBand } from "@/components/QuoteBand";
import { RouteMap } from "@/components/RouteMap";
import { markets } from "@/lib/content";
import { breadcrumbLd } from "@/lib/schema";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Chrome ore markets in China, Oman, and Europe",
  description:
    "Asian Mines and Minerals ships chrome ore from Muslim Bagh, Pakistan, mainly to China, and also to Oman and Europe.",
  path: "/markets",
});

export default function MarketsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Markets", "/markets")} />
      <PageIntro
        index="04"
        eyebrow="Discharge"
        current="Markets"
        title="China, Oman, and Europe."
        lede="The ore is from Muslim Bagh. China is the larger conversation, because that is where the stainless and ferrochrome demand sits. Oman is the shorter crossing. Europe takes the same specification."
      />

      <section className="band-pine">
        <div className="shell">
          <RouteMap />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <article className="market-block">
            <div>
              <p className="eyebrow">
                <span>04.1</span> {markets.china.role}
              </p>
              <h2>{markets.china.name}</h2>
            </div>
            <div className="market-copy">
              <p>{markets.china.summary}</p>
              <ul>
                {markets.china.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="market-block">
            <div>
              <p className="eyebrow">
                <span>04.2</span> {markets.oman.role}
              </p>
              <h2>{markets.oman.name}</h2>
            </div>
            <div className="market-copy">
              <p>{markets.oman.summary}</p>
              <ul>
                {markets.oman.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="market-block">
            <div>
              <p className="eyebrow">
                <span>04.3</span> {markets.europe.role}
              </p>
              <h2>{markets.europe.name}</h2>
            </div>
            <div className="market-copy">
              <p>{markets.europe.summary}</p>
              <ul>
                {markets.europe.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>

          <div className="market-block">
            <div>
              <p className="eyebrow">
                <span>04.4</span> Side by side
              </p>
              <h2>What changes, and what does not.</h2>
            </div>
            <table className="compare">
              <caption>China and Oman, from this desk</caption>
              <thead>
                <tr>
                  <th scope="col"> </th>
                  <th scope="col">China</th>
                  <th scope="col">Oman</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Place in the trade</th>
                  <td>Primary market</td>
                  <td>Second market</td>
                </tr>
                <tr>
                  <th scope="row">Why buyers call</th>
                  <td>Ferrochrome and stainless steel demand</td>
                  <td>Gulf industry, and a shorter voyage from Pakistan</td>
                </tr>
                <tr>
                  <th scope="row">The ore</th>
                  <td>Pakistani chrome ore, prepared at the plant</td>
                  <td>The same ore and the same plant</td>
                </tr>
                <tr>
                  <th scope="row">What to send first</th>
                  <td>Quantity, chemistry, size, discharge</td>
                  <td>Quantity, chemistry, size, discharge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell prose">
          <h2>The sea leg</h2>
          <p>
            Cargo leaves through Pakistan’s seaports. We do not publish a
            standing transit time, because the berth, the season, and the
            discharge all move it. What does not move is the paperwork: the
            lot on the sheet should be the lot on the vessel.
          </p>
          <p>
            If you already know the discharge port, put it in the{" "}
            <Link href="/contact">inquiry</Link>. If you only know the country,
            that is enough to begin. The{" "}
            <Link href="/chrome-ore">chrome ore page</Link> lists the
            parameters worth deciding before anyone talks about a ship.
          </p>
        </div>
      </section>
      <QuoteBand
        title="Name the discharge."
        text="China, Oman, Europe, or tell us if the cargo is meant for somewhere else."
      />
    </>
  );
}
