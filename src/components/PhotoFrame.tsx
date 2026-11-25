import Image from "next/image";
import { Specimen } from "@/components/Specimen";
import { resolveImage } from "@/lib/files";

type PhotoFrameProps = {
	imageBase: string;
	alt: string;
	title?: string;
	kicker?: string;
	caption?: string;
	variant?: number;
	index?: string;
	priority?: boolean;
	sizes?: string;
	ratio?: "portrait" | "wide" | "square";
	bare?: boolean;
};

export function PhotoFrame({
	imageBase,
	alt,
	title,
	kicker,
	caption,
	variant = 0,
	index,
	priority = false,
	sizes = "(max-width: 800px) 100vw, 360px",
	ratio = "portrait",
	bare = false,
}: PhotoFrameProps) {
	const src = resolveImage(imageBase);

	console.log(src, "chkking src");

	return (
		<figure className="plate">
			<div className={`plate-media ${ratio}`}>
				{src ? (
					<Image
						src={src}
						alt={alt}
						fill
						sizes={sizes}
						priority={priority}
						className="plate-photo"
					/>
				) : (
					<Specimen variant={variant} />
				)}
				{index ? <span className="plate-index">{index}</span> : null}
			</div>
			{bare ? null : (
				<figcaption>
					{kicker ? <span className="plate-kicker">{kicker}</span> : null}
					{title ? <span className="plate-title">{title}</span> : null}
					{caption ? <span className="plate-caption">{caption}</span> : null}
				</figcaption>
			)}
		</figure>
	);
}
