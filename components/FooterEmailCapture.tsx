"use client";

import { useState } from "react";

const WAITLIST_ENDPOINT = "https://reffo.ai/api/waitlist";

export default function FooterEmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setErrorMsg("Please enter a valid email.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "pelagora_footer" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Sign up failed.");
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Sign up failed.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p style={{ fontSize: 13, color: "#ffffffbd", marginTop: 16 }}>
        You&apos;re on the list. Talk soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: 8,
        justifyContent: "center",
        flexWrap: "wrap",
        maxWidth: 440,
        margin: "16px auto 0",
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === "loading"}
        style={{
          flex: "1 1 220px",
          padding: "10px 14px",
          fontSize: 14,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 6,
          color: "#fff",
          outline: "none",
        }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          padding: "10px 18px",
          fontSize: 14,
          fontWeight: 600,
          background: "var(--orange, #d65f24)",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: status === "loading" ? "wait" : "pointer",
          opacity: status === "loading" ? 0.7 : 1,
        }}
      >
        {status === "loading" ? "..." : "Notify me"}
      </button>
      {status === "error" && (
        <p style={{ flexBasis: "100%", fontSize: 12, color: "#ff8a8a", margin: 0 }}>
          {errorMsg}
        </p>
      )}
    </form>
  );
}
