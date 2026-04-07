"use client";

import { useState, useCallback, useEffect } from "react";

export function VideoThumb({ videoId }: { videoId: string }) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        className="hero-video-thumb"
        onClick={() => setOpen(true)}
        aria-label="Watch the Pelagora demo video"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt="Pelagora demo"
        />
        <span className="hero-video-play">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="8 5 19 12 8 19 8 5" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="video-modal-overlay" onClick={close}>
          <div
            className="video-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="video-modal-close"
              onClick={close}
              aria-label="Close video"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" /><path d="M6 6l12 12" />
              </svg>
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Pelagora Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
