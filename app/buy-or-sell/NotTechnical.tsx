"use client";
import { useState } from "react";

export default function NotTechnical() {
  const [open, setOpen] = useState(false);

  return (
    <section className="detail sand">
      <div className="container">
        <button
          className="nontechnical-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          style={{ justifyContent: "center", gap: 12 }}
        >
          <span>Not a developer? No problem!</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {open && (
          <div className="nontechnical-layout" style={{ marginTop: 40 }}>
            <div className="nontechnical-text" style={{ textAlign: "left" }}>
              <div className="section-label">Prefer no-code?</div>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--slate)", marginBottom: 24 }}>
                Setting up a Beacon takes a few minutes with an AI agent — but if that still feels like too much,{" "}
                <strong style={{ color: "var(--ink)" }}>Reffo</strong> is a hosted app built on Pelagora. No setup, no terminal, no code.
                Just sign up and start buying or selling.
              </p>
              <a href="https://reffo.ai" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ color: "var(--marble)" }}>
                Try Reffo instead
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
            <div className="nontechnical-media">
              <div className="img-placeholder" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
