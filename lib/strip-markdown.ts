/** Strips common Markdown syntax and returns plain text. */
export function stripMarkdown(md: string): string {
  return md
    .replace(/^#{1,6}\s+/gm, "")           // headings
    .replace(/```[\s\S]*?```/gm, "")        // fenced code blocks
    .replace(/\*\*(.+?)\*\*/g, "$1")        // bold
    .replace(/\*(.+?)\*/g, "$1")            // italic
    .replace(/`{1,3}[^`]*`{1,3}/g, "")     // inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links → text
    .replace(/^[>\-*+]\s+/gm, "")          // blockquotes, list markers
    .replace(/^\d+\.\s+/gm, "")            // numbered lists
    .replace(/\|[^\n]+\|/g, "")            // table rows
    .replace(/[-|]{3,}/g, "")              // table separators
    .replace(/\s+/g, " ")
    .trim();
}
