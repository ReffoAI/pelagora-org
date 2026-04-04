"use client";

import { useState } from "react";

type OS = "mac" | "windows";
type Agent = "claude" | "cursor" | "windsurf" | "copilot" | "openclaw";

const agents: { id: Agent; label: string }[] = [
  { id: "claude", label: "Claude Code" },
  { id: "cursor", label: "Cursor" },
  { id: "windsurf", label: "Windsurf" },
  { id: "copilot", label: "Copilot" },
  { id: "openclaw", label: "OpenClaw" },
];

function getCommands(agent: Agent, os: OS) {
  const paths: Record<Agent, { mac: string[]; windows: string[] }> = {
    claude: {
      mac: [
        "mkdir -p ~/.claude/skills/pelagora && cp ~/Downloads/SKILL.md ~/.claude/skills/pelagora/SKILL.md",
      ],
      windows: [
        'New-Item -ItemType Directory -Path "$env:USERPROFILE\\.claude\\skills\\pelagora" -Force | Out-Null',
        'Copy-Item "$env:USERPROFILE\\Downloads\\SKILL.md" "$env:USERPROFILE\\.claude\\skills\\pelagora\\SKILL.md" -Force',
        'Write-Host "Skill installed successfully." -ForegroundColor Green',
      ],
    },
    cursor: {
      mac: [
        "mkdir -p .cursor/rules/pelagora && cp ~/Downloads/SKILL.md .cursor/rules/pelagora/SKILL.md",
      ],
      windows: [
        'New-Item -ItemType Directory -Path ".cursor\\rules\\pelagora" -Force | Out-Null',
        'Copy-Item "$env:USERPROFILE\\Downloads\\SKILL.md" ".cursor\\rules\\pelagora\\SKILL.md" -Force',
        'Write-Host "Skill installed successfully." -ForegroundColor Green',
      ],
    },
    windsurf: {
      mac: [
        "mkdir -p .windsurf/rules/pelagora && cp ~/Downloads/SKILL.md .windsurf/rules/pelagora/SKILL.md",
      ],
      windows: [
        'New-Item -ItemType Directory -Path ".windsurf\\rules\\pelagora" -Force | Out-Null',
        'Copy-Item "$env:USERPROFILE\\Downloads\\SKILL.md" ".windsurf\\rules\\pelagora\\SKILL.md" -Force',
        'Write-Host "Skill installed successfully." -ForegroundColor Green',
      ],
    },
    copilot: {
      mac: [
        "mkdir -p .github/instructions && cp ~/Downloads/SKILL.md .github/instructions/pelagora.instructions.md",
      ],
      windows: [
        'New-Item -ItemType Directory -Path ".github\\instructions" -Force | Out-Null',
        'Copy-Item "$env:USERPROFILE\\Downloads\\SKILL.md" ".github\\instructions\\pelagora.instructions.md" -Force',
        'Write-Host "Skill installed successfully." -ForegroundColor Green',
      ],
    },
    openclaw: {
      mac: [
        "mkdir -p ~/.openclaw/skills/pelagora && cp ~/Downloads/SKILL.md ~/.openclaw/skills/pelagora/SKILL.md",
      ],
      windows: [
        'New-Item -ItemType Directory -Path "$env:USERPROFILE\\.openclaw\\skills\\pelagora" -Force | Out-Null',
        'Copy-Item "$env:USERPROFILE\\Downloads\\SKILL.md" "$env:USERPROFILE\\.openclaw\\skills\\pelagora\\SKILL.md" -Force',
        'Write-Host "Skill installed successfully." -ForegroundColor Green',
      ],
    },
  };

  const cmds = paths[agent][os];
  const prompt =
    '"Use the Pelagora skill to help me create a beacon on the Pelagora network"';

  return [
    { type: "comment" as const, text: "# Move the skill into place" },
    ...cmds.map((text) => ({ type: "cmd" as const, text })),
    { type: "blank" as const, text: "" },
    { type: "comment" as const, text: "# Ask your AI agent" },
    { type: "ai-prompt" as const, text: prompt },
  ];
}

function agentNote(agent: Agent): string | null {
  if (agent === "cursor" || agent === "windsurf")
    return "Run this from your project root. Cursor and Windsurf use project-level rules.";
  if (agent === "copilot")
    return "Run this from your project root. Copilot uses project-level instruction files.";
  return null;
}

export function SkillTerminal() {
  const [os, setOs] = useState<OS>("mac");
  const [agent, setAgent] = useState<Agent>("claude");
  const commands = getCommands(agent, os);
  const note = agentNote(agent);

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
        After you have downloaded the file, run these commands in{" "}
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
            return (
              <div key={i} className="terminal-line visible">
                <span className="prompt-symbol">$ </span>
                <span className="cmd">{line.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="agent-selector">
        {agents.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`agent-btn${agent === id ? " agent-btn-active" : ""}`}
            onClick={() => setAgent(id)}
          >
            {label}
          </button>
        ))}
      </div>
      {note && <p className="agent-note">{note}</p>}
    </div>
  );
}
