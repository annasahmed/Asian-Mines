import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { footerNav, isEmail, site, whatsappNumber } from "@/lib/site";

export function SiteFooter({ logoSrc }: { logoSrc: string | null }) {
	const year = site.updated.slice(0, 4);
	const whatsapp = whatsappNumber(site.whatsapp);
	const email = isEmail(site.email) ? site.email : "";

	return (
		<footer className="site-footer">
			<div className="shell footer-grid">
				<div>
					<Link href="/" className="brand">
						<span className="brand-lockup">
							{logoSrc ? (
								// eslint-disable-next-line @next/next/no-img-element
								<img src={logoSrc} alt="" className="brand-logo" />
							) : (
								<LogoMark />
							)}
							<span>
								<span className="brand-name">Asian Mines</span>
								<span className="brand-sub">& Minerals</span>
							</span>
						</span>
					</Link>
					<p className="footer-blurb">
						Chrome ore from Muslim Bagh, prepared for export to China, Oman, and
						Europe. Head office in Karachi.
					</p>
				</div>

				<nav aria-label="Footer">
					<p className="footer-label">Pages</p>
					<ul>
						{footerNav.map((item) => (
							<li key={item.href}>
								<Link href={item.href}>{item.label}</Link>
							</li>
						))}
					</ul>
				</nav>

				<div>
					<p className="footer-label">Trade</p>
					<ul>
						<li>Origin: Pakistan</li>
						<li>Product: Chrome ore</li>
						<li>Primary market: China</li>
						<li>Also shipped: Oman, Europe</li>
						{email ? (
							<li>
								<a href={`mailto:${email}`}>{email}</a>
							</li>
						) : null}
						{site.phoneDisplay && site.phoneTel ? (
							<li>
								<a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
							</li>
						) : null}
						{whatsapp ? (
							<li>
								<a
									href={`https://wa.me/${whatsapp}`}
									target="_blank"
									rel="noopener noreferrer">
									WhatsApp
								</a>
							</li>
						) : null}
					</ul>
				</div>
			</div>
			<div className="shell footer-base">
				<p>
					© {year} {site.name}. All rights reserved.
				</p>
				<p>Specifications are agreed per shipment.</p>
			</div>
		</footer>
	);
}
