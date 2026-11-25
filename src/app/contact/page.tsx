import { InquiryForm } from "@/components/InquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { breadcrumbLd } from "@/lib/schema";
import { isEmail, pageMeta, site, whatsappNumber } from "@/lib/site";

export const metadata = pageMeta({
  title: "Request a chrome ore quotation",
  description:
    "Send a chrome ore inquiry to Asian Mines and Minerals. Include quantity, destination, and the specification you need.",
  path: "/contact",
});

export default function ContactPage() {
  const email = isEmail(site.email) ? site.email : "";
  const whatsapp = whatsappNumber(site.whatsapp);

  return (
    <>
      <JsonLd data={breadcrumbLd("Contact", "/contact")} />
      <PageIntro
        index="05"
        eyebrow="Inquiry"
        current="Contact"
        title="Write with a cargo in mind."
        lede="Quantity in metric tons, China, Oman, or Europe, and the form of ore you want. If you already know the Cr₂O₃ and the size, add them. A long introduction can wait."
      />
      <section className="section">
        <div className="shell contact-layout">
          <aside className="contact-aside">
            <h2>What a useful note contains</h2>
            <ul>
              <li>Company and country.</li>
              <li>Approximate quantity in metric tons.</li>
              <li>Destination: China, Oman, Europe, or another discharge.</li>
              <li>Lumpy, concentrate, fines, natural, or a refractory grade.</li>
              <li>Target chemistry and size, if you have them.</li>
            </ul>
            {email || site.phoneDisplay || site.address || whatsapp ? (
              <>
              <address>
                {email ? (
                  <div>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                ) : null}
                {site.phoneDisplay && site.phoneTel ? (
                  <div>
                    <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
                  </div>
                ) : null}
                {whatsapp ? (
                  <div>
                    <a
                      href={`https://wa.me/${whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                ) : null}
                {site.address ? <div>{site.address}</div> : <div>Pakistan</div>}
              </address>
              <div className="office-map">
                <iframe
                  title="Asian Mines and Minerals office on I.I. Chundrigar Road, Karachi"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7240.76156296308!2d67.01597640000001!3d24.850841199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1693802790865!5m2!1sen!2s"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              </>
            ) : (
              <p>The company is in Pakistan. The note you prepare here is what you send.</p>
            )}
          </aside>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
