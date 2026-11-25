import { Specimen } from "@/components/Specimen";
import { resolveCaptions, resolveImage, resolveVideo } from "@/lib/files";

type Film = {
  base: string;
  title: string;
  kind: string;
  caption: string;
  variant: number;
};

export function FilmFrame({ film }: { film: Film }) {
  const video = resolveVideo(film.base);
  const poster = resolveImage(film.base);
  const captions = resolveCaptions(film.base);

  return (
    <figure className="film plate">
      <div className={video ? "plate-media wide film-stage" : "plate-media wide"}>
        {video ? (
          <video
            controls
            playsInline
            preload={poster ? "none" : "metadata"}
            poster={poster ?? undefined}
            aria-label={film.title}
          >
            <source src={video.src} type={video.type} />
            {captions ? (
              <track
                src={captions}
                kind="captions"
                srcLang="en"
                label="English"
                default
              />
            ) : null}
            <p>This film needs a browser that can play video.</p>
          </video>
        ) : (
          <Specimen variant={film.variant} />
        )}
        <span className="plate-index">{film.kind}</span>
      </div>
      <figcaption>
        <span className="plate-kicker">{video ? "Film" : film.kind}</span>
        <span className="plate-title">{film.title}</span>
        <span className="plate-caption">{film.caption}</span>
      </figcaption>
    </figure>
  );
}
