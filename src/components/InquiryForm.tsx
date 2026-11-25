"use client";

import { FormEvent, useState } from "react";
import { isEmail, site, whatsappNumber } from "@/lib/site";

type Errors = Partial<Record<"name" | "company" | "email" | "country" | "detail", string>>;

const products = [
  "Lumpy chrome ore",
  "Concentrates",
  "Fines",
  "Natural grade",
  "Refractory",
  "Semi-refractory",
  "Not decided yet",
];

const destinations = ["China", "Oman", "Europe", "More than one", "Somewhere else"];

export function InquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [inquiry, setInquiry] = useState("");
  const [mailHref, setMailHref] = useState("");
  const [copied, setCopied] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("companyWebsite") || "").trim()) {
      setInquiry("Received.");
      setMailHref("");
      setErrors({});
      return;
    }

    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const country = String(data.get("country") || "").trim();
    const product = String(data.get("product") || "").trim();
    const destination = String(data.get("destination") || "").trim();
    const quantity = String(data.get("quantity") || "").trim();
    const message = String(data.get("message") || "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Add your name.";
    if (!company) nextErrors.company = "Add the company name.";
    if (!isEmail(email)) nextErrors.email = "Add a work email we can reply to.";
    if (!country) nextErrors.country = "Add the country you are buying from.";
    if (!quantity && !message) {
      nextErrors.detail = "Add a quantity or a short note about the cargo.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      const field = first === "detail" ? "quantity" : first;
      form.querySelector<HTMLElement>(`#${field}`)?.focus();
      return;
    }

    const text = [
      "Chrome ore inquiry",
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Country: ${country}`,
      `Product: ${product}`,
      `Destination: ${destination}`,
      quantity ? `Quantity: ${quantity}` : null,
      message ? `Note: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const href = isEmail(site.email) ? buildMailto(company, text) : "";
    setInquiry(text);
    setMailHref(href);
    setCopied(false);

    if (href && href.length < 1900) window.location.href = href;
  }

  async function copyInquiry() {
    try {
      await navigator.clipboard.writeText(inquiry);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (inquiry === "Received.") {
    return (
      <div className="inquiry-success" role="status">
        <h2>The inquiry is ready.</h2>
      </div>
    );
  }

  if (inquiry) {
    const whatsapp = whatsappNumber(site.whatsapp);

    return (
      <div className="inquiry-success" role="status">
        <h2>The inquiry is ready.</h2>
        <p>
          {isEmail(site.email)
            ? `Your email app should open with this note, addressed to ${site.email}. If it does not, copy the text and send it.`
            : "Copy this note and send it to Asian Mines and Minerals through your usual trading contact."}
        </p>
        <pre>{inquiry}</pre>
        <div className="hero-actions">
          <button type="button" className="btn btn-fill" onClick={copyInquiry}>
            {copied ? "Copied" : "Copy inquiry"}
          </button>
          {mailHref && mailHref.length < 1900 ? (
            <a className="btn btn-line" href={mailHref}>
              Open in email
            </a>
          ) : null}
          {whatsapp ? (
            <a
              className="btn btn-line"
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(inquiry)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue on WhatsApp
            </a>
          ) : null}
          <button
            type="button"
            className="btn btn-line"
            onClick={() => setInquiry("")}
          >
            Write another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={onSubmit} noValidate>
      <p className="form-note">Required fields are marked *.</p>
      {Object.keys(errors).length > 0 ? (
        <p className="form-alert" role="alert">
          A few fields still need a proper answer.
        </p>
      ) : null}

      <div className="hp" aria-hidden="true">
        <label htmlFor="companyWebsite">Website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="field">
        <label htmlFor="name">
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <p id="name-error" className="field-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="company">
          Company <span aria-hidden="true">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          aria-invalid={errors.company ? true : undefined}
          aria-describedby={errors.company ? "company-error" : undefined}
        />
        {errors.company ? (
          <p id="company-error" className="field-error">
            {errors.company}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="email">
          Work email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? (
          <p id="email-error" className="field-error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="phone">Phone or WhatsApp</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="field">
        <label htmlFor="country">
          Country <span aria-hidden="true">*</span>
        </label>
        <input
          id="country"
          name="country"
          type="text"
          autoComplete="country-name"
          aria-invalid={errors.country ? true : undefined}
          aria-describedby={errors.country ? "country-error" : undefined}
        />
        {errors.country ? (
          <p id="country-error" className="field-error">
            {errors.country}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="quantity">Quantity in metric tons</label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          inputMode="decimal"
          aria-invalid={errors.detail ? true : undefined}
          aria-describedby={errors.detail ? "detail-error" : undefined}
        />
      </div>

      <div className="field">
        <label htmlFor="product">Form</label>
        <select id="product" name="product" defaultValue={products[0]}>
          {products.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="destination">Destination</label>
        <select id="destination" name="destination" defaultValue={destinations[0]}>
          {destinations.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="field field-wide">
        <label htmlFor="message">Note</label>
        <textarea id="message" name="message" rows={5} />
        {errors.detail ? (
          <p id="detail-error" className="field-error">
            {errors.detail}
          </p>
        ) : null}
      </div>

      <div className="field field-wide">
        <button type="submit" className="btn btn-fill">
          Prepare inquiry
        </button>
      </div>
    </form>
  );
}

function buildMailto(company: string, text: string) {
  const subject = `Chrome ore inquiry from ${company}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}
