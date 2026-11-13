import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Data from "@data/video-work.json";

/* Video & Media projects: each card opens a project view (client, brief,
 * what we did, result, details) with the project's videos.
 * Content lives in src/data/video-work.json. A project can be linked
 * directly with #project-<id> (e.g. /video#project-duro-design-group). */

const HASH = "#project-";

const Card = ({ project, onOpen }) => (
  <button
    type="button"
    className={`vw-card${project.featured ? " vw-featured" : ""}`}
    onClick={() => onOpen(project)}
    aria-label={`Open project: ${project.client}, ${project.title}`}
  >
    <span className="vw-thumb">
      <img src={project.poster} alt="" loading="lazy" />
      <span className="vw-count">{project.videos.length > 1 ? `${project.videos.length} videos` : "Video"}</span>
    </span>
    <span className="vw-meta">
      <span className="vw-client">{project.client} · {project.year}</span>
      <span className="vw-title">{project.title}</span>
      <span className="vw-desc">{project.summary}</span>
      <span className="vw-tags">
        {project.tags.map((t) => <span key={t}>{t}</span>)}
      </span>
      <span className="vw-open">View project <span aria-hidden="true">→</span></span>
    </span>
  </button>
);

const ProjectView = ({ project, onClose }) => {
  const [active, setActive] = useState(0);
  const portraitSet = project.videos.every((v) => v.portrait);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const video = project.videos[active];

  return createPortal(
    <div className="vw-modal" role="dialog" aria-modal="true" aria-label={`${project.client}: ${project.title}`} onClick={onClose}>
      <article className="vw-panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="vw-close" onClick={onClose} aria-label="Close">×</button>

        <header className="vw-head">
          <span className="vw-client">{project.client} · {project.category}</span>
          <h3>{project.title}</h3>
        </header>

        {portraitSet ? (
          <div className="vw-media vw-media-portrait">
            {project.videos.map((v) => (
              <figure key={v.src}>
                <video src={v.src} poster={v.poster} controls playsInline preload="metadata" />
                <figcaption>{v.label}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="vw-media">
            <video key={video.src} src={video.src} poster={video.poster} controls autoPlay playsInline />
            {project.videos.length > 1 && (
              <div className="vw-reel" role="tablist" aria-label="Project videos">
                {project.videos.map((v, i) => (
                  <button
                    key={v.src}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    className={i === active ? "is-active" : ""}
                    onClick={() => setActive(i)}
                  >
                    <img src={v.poster} alt="" />
                    <span>{v.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="vw-body">
          <div className="vw-story">
            <h4>The client</h4>
            <p>{project.about}</p>
            <h4>The brief</h4>
            <p>{project.brief}</p>
            <h4>What we did</h4>
            <ul>
              {project.whatWeDid.map((w) => <li key={w}>{w}</li>)}
            </ul>
            <h4>The result</h4>
            <p>{project.result}</p>
          </div>
          <aside className="vw-facts">
            <dl>
              {project.details.map((d) => (
                <div key={d.label}>
                  <dt>{d.label}</dt>
                  <dd>{d.value}</dd>
                </div>
              ))}
            </dl>
            {project.links.length > 0 && (
              <div className="vw-links">
                {project.links.map((l) =>
                  l.external ? (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
                  ) : (
                    <Link key={l.href} href={l.href}>{l.label} →</Link>
                  )
                )}
              </div>
            )}
            <Link href="/contact" className="vw-cta">Start a video project</Link>
          </aside>
        </div>
      </article>
    </div>,
    document.body
  );
};

const VideoWorkSection = ({ showLink = false, soft = true }) => {
  const [open, setOpen] = useState(null);
  const projects = Data.projects;

  const openProject = useCallback((p) => {
    setOpen(p);
    if (typeof window !== "undefined") window.history.replaceState(null, "", `${HASH}${p.id}`);
  }, []);

  const close = useCallback(() => {
    setOpen(null);
    if (typeof window !== "undefined" && window.location.hash.startsWith(HASH)) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  // Open a project from a shared link such as /video#project-duro-design-group
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash;
      if (!h.startsWith(HASH)) return;
      const p = projects.find((x) => x.id === h.slice(HASH.length));
      if (p) setOpen(p);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [projects]);

  return (
    <section id="video-work" className={soft ? "mil-soft-bg" : ""}>
      <div className="container mil-p-120-90">
        <div className="row justify-content-between align-items-end mil-mb-60">
          <div className="col-lg-7">
            <span className="mil-suptitle mil-suptitle-dark mil-upper mil-mb-30 vw-block">{Data.suptitle}</span>
            <h2 className="mil-mb-30" dangerouslySetInnerHTML={{ __html: Data.title }} />
            <p>{Data.intro}</p>
          </div>
          {showLink && (
            <div className="col-lg-4">
              <div className="mil-adaptive-right vw-link">
                <Link href="/video" className="mil-link mil-dark mil-arrow-place">
                  <span>Open the video page</span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {Data.groups.map((g) => {
          const items = projects.filter((p) => p.group === g.id);
          const rest = items.filter((p) => !p.featured);
          return (
            <div key={g.id} className="vw-groupblock" id={`video-${g.id}`}>
              <h4 className="vw-group">{g.title}</h4>
              {g.intro && <p className="vw-groupintro">{g.intro}</p>}
              {items.filter((p) => p.featured).map((p) => (
                <div key={p.id} className="vw-grid vw-grid-1"><Card project={p} onOpen={openProject} /></div>
              ))}
              <div className={`vw-grid ${rest.length === 3 ? "vw-grid-3" : ""}`}>
                {rest.map((p) => <Card key={p.id} project={p} onOpen={openProject} />)}
              </div>
            </div>
          );
        })}
      </div>

      {open && <ProjectView project={open} onClose={close} />}

      <style jsx global>{`
        .vw-block { display: block; }
        .vw-link { margin-top: 30px; }
        .vw-groupblock { margin-bottom: 60px; }
        .vw-group { margin: 0 0 10px; font-size: 22px; }
        .vw-groupintro { margin: 0 0 24px; color: rgba(0,0,0,.6); }
        .vw-group + .vw-grid { margin-top: 24px; }
        .vw-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 30px; margin-bottom: 30px; }
        .vw-grid-1 { grid-template-columns: 1fr; }
        @media (min-width: 992px) { .vw-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); } .vw-grid-3 .vw-title { font-size: 18px; } }
        .vw-card { all: unset; box-sizing: border-box; display: flex; flex-direction: column; cursor: pointer; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 0 1px rgba(0,0,0,.06); transition: transform .3s, box-shadow .3s; }
        .vw-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,.12); }
        .vw-card:focus-visible { outline: 3px solid #E92518; outline-offset: 3px; }
        .vw-thumb { position: relative; display: block; background: #111; overflow: hidden; aspect-ratio: 16 / 9; }
        .vw-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s; }
        .vw-card:hover .vw-thumb img { transform: scale(1.04); }
        .vw-count { position: absolute; bottom: 12px; left: 12px; font-size: 11px; letter-spacing: .5px; text-transform: uppercase; background: rgba(0,0,0,.65); color: #fff; padding: 4px 9px; border-radius: 4px; }
        .vw-meta { display: flex; flex-direction: column; gap: 8px; padding: 22px 24px 26px; flex: 1; }
        .vw-client { font-size: 12px; letter-spacing: .5px; text-transform: uppercase; color: rgba(0,0,0,.5); }
        .vw-title { font-size: 20px; font-weight: 500; line-height: 1.3; color: #000; }
        .vw-desc { font-size: 15px; line-height: 1.55; color: rgba(0,0,0,.65); }
        .vw-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 2px; }
        .vw-tags span { font-size: 11px; padding: 3px 8px; border-radius: 20px; background: rgba(233,37,24,.08); color: #b31d12; }
        .vw-open { margin-top: auto; padding-top: 8px; font-size: 13px; font-weight: 500; letter-spacing: .5px; text-transform: uppercase; color: #E92518; }
        @media (min-width: 992px) {
          .vw-featured { grid-column: 1 / -1; flex-direction: row; }
          .vw-featured .vw-thumb { flex: 0 0 58%; aspect-ratio: auto; min-height: 380px; }
          .vw-featured .vw-thumb img { position: absolute; inset: 0; }
          .vw-featured .vw-meta { padding: 40px; justify-content: center; }
          .vw-featured .vw-title { font-size: 28px; }
          .vw-featured .vw-open { margin-top: 12px; }
        }

        .vw-modal { position: fixed; inset: 0; z-index: 2147483000; background: rgba(0,0,0,.82); overflow-y: auto; padding: 48px 16px; }
        .vw-panel { position: relative; max-width: 1100px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; }
        .vw-close { all: unset; position: absolute; top: 12px; right: 14px; z-index: 2; width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,.92); color: #000; font-size: 28px; line-height: 40px; text-align: center; cursor: pointer; box-shadow: 0 2px 10px rgba(0,0,0,.15); }
        .vw-head { padding: 34px 40px 22px; padding-right: 70px; }
        .vw-head h3 { margin: 8px 0 0; font-size: 30px; line-height: 1.2; }
        .vw-media { background: #0d0d0d; }
        .vw-media > video { width: 100%; max-height: 70vh; display: block; background: #000; }
        .vw-reel { display: flex; gap: 10px; padding: 12px; overflow-x: auto; }
        .vw-reel button { all: unset; box-sizing: border-box; flex: 0 0 168px; cursor: pointer; border-radius: 6px; overflow: hidden; opacity: .6; border: 2px solid transparent; transition: opacity .2s; }
        .vw-reel button:hover, .vw-reel button.is-active { opacity: 1; }
        .vw-reel button.is-active { border-color: #E92518; }
        .vw-reel button:focus-visible { outline: 2px solid #fff; }
        .vw-reel img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; display: block; }
        .vw-reel span { display: block; padding: 6px 8px; font-size: 12px; line-height: 1.3; color: #fff; background: #1b1b1b; }
        .vw-media-portrait { display: flex; justify-content: center; gap: 24px; padding: 24px; flex-wrap: wrap; }
        .vw-media-portrait figure { margin: 0; width: min(300px, 100%); }
        .vw-media-portrait video { width: 100%; aspect-ratio: 9 / 16; background: #000; border-radius: 8px; display: block; }
        .vw-media-portrait figcaption { color: rgba(255,255,255,.75); font-size: 13px; padding-top: 8px; text-align: center; }
        .vw-body { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 48px; padding: 36px 40px 44px; }
        .vw-story h4 { font-size: 13px; letter-spacing: 1px; text-transform: uppercase; color: rgba(0,0,0,.5); margin: 0 0 10px; font-weight: 500; }
        .vw-story p { margin: 0 0 26px; font-size: 16px; line-height: 1.65; color: rgba(0,0,0,.8); }
        .vw-story ul { margin: 0 0 26px; padding-left: 20px; }
        .vw-story li { font-size: 16px; line-height: 1.6; color: rgba(0,0,0,.8); margin-bottom: 8px; }
        .vw-facts dl { margin: 0; border-top: 1px solid rgba(0,0,0,.1); }
        .vw-facts dl > div { padding: 14px 0; border-bottom: 1px solid rgba(0,0,0,.1); }
        .vw-facts dt { font-size: 12px; letter-spacing: .5px; text-transform: uppercase; color: rgba(0,0,0,.5); font-weight: 400; margin-bottom: 4px; }
        .vw-facts dd { margin: 0; font-size: 15px; line-height: 1.45; color: #000; }
        .vw-links { display: flex; flex-direction: column; gap: 10px; margin-top: 22px; }
        .vw-links a { font-size: 15px; color: #000; text-decoration: underline; text-underline-offset: 3px; }
        .vw-cta { display: inline-block; margin-top: 26px; padding: 13px 22px; border-radius: 40px; background: #E92518; color: #fff !important; font-size: 13px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; }

        @media (max-width: 991px) {
          .vw-body { grid-template-columns: 1fr; gap: 28px; }
        }
        @media (max-width: 767px) {
          .vw-grid, .vw-grid-3 { grid-template-columns: 1fr; gap: 20px; }
          .vw-modal { padding: 12px 8px; }
          .vw-head { padding: 24px 20px 16px; padding-right: 60px; }
          .vw-head h3 { font-size: 22px; }
          .vw-body { padding: 24px 20px 32px; }
          .vw-reel button { flex-basis: 130px; }
        }
      `}</style>
    </section>
  );
};

export default VideoWorkSection;
