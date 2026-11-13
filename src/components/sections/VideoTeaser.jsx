import Link from "next/link";
import Data from "@data/video-work.json";

/* Homepage entry point to the Video & Media page: four project tiles,
 * each opening that project on /video. */

const PICKS = ["duro-design-group", "cjc-sophie-elijah", "mekina-studio", "nexura-labs"];

const VideoTeaserSection = () => {
  const picks = PICKS.map((id) => Data.projects.find((p) => p.id === id)).filter(Boolean);

  return (
    <section id="video-teaser" className="mil-soft-bg">
      <div className="container mil-p-120-90">
        <div className="row justify-content-between align-items-end mil-mb-60">
          <div className="col-lg-7">
            <span className="mil-suptitle mil-suptitle-dark mil-upper mil-mb-30 vt-block">Video &amp; Media</span>
            <h2>AI video <span className="mil-thin">we've produced</span></h2>
          </div>
          <div className="col-lg-5">
            <div className="mil-adaptive-right vt-link">
              <Link href="/video" className="mil-button mil-arrow-place">
                <span>See all video projects</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="vt-grid">
          {picks.map((p) => (
            <Link key={p.id} href={`/video#project-${p.id}`} className="vt-tile">
              <span className="vt-thumb">
                <img src={p.poster} alt="" loading="lazy" />
                <span className="vt-play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
                </span>
              </span>
              <span className="vt-client">{p.client}</span>
              <span className="vt-title">{p.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .vt-block { display: block; }
        .vt-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; }
        .vt-tile { display: flex; flex-direction: column; gap: 6px; color: #000; }
        .vt-thumb { position: relative; display: block; aspect-ratio: 16 / 10; border-radius: 10px; overflow: hidden; background: #111; margin-bottom: 8px; }
        .vt-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s; }
        .vt-tile:hover .vt-thumb img { transform: scale(1.05); }
        .vt-play { position: absolute; right: 12px; bottom: 12px; width: 40px; height: 40px; border-radius: 50%; background: #E92518; color: #fff; display: flex; align-items: center; justify-content: center; }
        .vt-play svg { margin-left: 2px; }
        .vt-client { font-size: 12px; letter-spacing: .5px; text-transform: uppercase; color: rgba(0,0,0,.5); }
        .vt-title { font-size: 17px; font-weight: 500; line-height: 1.3; }
        @media (max-width: 991px) { .vt-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .vt-link { margin-top: 30px; } }
        @media (max-width: 575px) { .vt-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
};

export default VideoTeaserSection;
