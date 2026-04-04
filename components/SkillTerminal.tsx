"use client";

import { useState } from "react";

type OS = "mac" | "windows";

const macCommands = [
  { type: "comment", text: "# Move the skill into place" },
  { type: "cmd", text: "mkdir -p ~/.claude/skills && cp ~/Downloads/pelagora.md ~/.claude/skills/" },
  { type: "cmd", text: "source ~/.zshrc" },
  { type: "blank" },
  { type: "comment", text: "# Ask your AI agent" },
  { type: "ai-prompt", text: '"Use the pelagora.md skill to help me create a beacon on the Pelagora network"' },
];

const windowsCommands = [
  { type: "comment", text: "# Move the skill into place" },
  { type: "cmd", text: 'New-Item -ItemType Directory -Path "$env:USERPROFILE\\.claude\\skills" -Force | Out-Null' },
  { type: "cmd", text: 'Copy-Item "$env:USERPROFILE\\Downloads\\pelagora.md" "$env:USERPROFILE\\.claude\\skills"' },
  { type: "blank" },
  { type: "comment", text: "# Ask your AI agent" },
  { type: "ai-prompt", text: '"Use the pelagora.md skill to help me create a beacon on the Pelagora network"' },
];

export function SkillTerminal() {
  const [os, setOs] = useState<OS>("mac");
  const commands = os === "mac" ? macCommands : windowsCommands;

  return (
    <div className="skill-band-header">
      <div className="section-label">Hands-free development</div>
      <div className="section-title">Already using AI?</div>
      <div className="section-desc">
        An AI Skill is simply a markdown file that teaches your AI agent how to
        do something. In this case, it&apos;s how to connect you to the Pelagora
        network, spin up a Beacon, and start buying or selling items.
      </div>
      <p className="section-instruction">
        After you have downloaded the file, run these commands in {" "}
        {os === "mac" ? "Terminal" : "PowerShell"}.
        <br />
        <button
          type="button"
          className="os-toggle-link"
          onClick={() => setOs(os === "mac" ? "windows" : "mac")}
        >
          {os === "mac"
            ? "Click here if you\u2019re a Windows user"
            : "Click here if you\u2019re a Mac/Linux user"}
        </button>
      </p>

      <div className="terminal">
        <div className="terminal-bar">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
          <div className="terminal-title">
            {os === "mac" ? "Terminal" : "PowerShell"}
          </div>
        </div>
        <div className="terminal-body">
          {commands.map((line, i) => {
            if (line.type === "blank") {
              return <div key={i} className="terminal-line visible">&nbsp;</div>;
            }
            if (line.type === "comment") {
              return (
                <div key={i} className="terminal-line visible">
                  <span className="comment">{line.text}</span>
                </div>
              );
            }
            if (line.type === "ai-prompt") {
              return (
                <div key={i} className="terminal-line visible">
                  <span className="prompt-symbol">&gt; </span>
                  <span className="cmd">{line.text}</span>
                </div>
              );
            }
            // cmd
            return (
              <div key={i} className="terminal-line visible">
                <span className="prompt-symbol">$ </span>
                <span className="cmd">{line.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
