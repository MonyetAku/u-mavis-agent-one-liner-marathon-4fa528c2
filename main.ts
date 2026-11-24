import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Marathon — u-mavis-agent-one-liner-marathon-4fa528c2
// Single deadpan one-liner, 3-beat shape: setup, escalation, kicker on the
// last phrase. Written fresh for this competition.
const LINE =
  "I asked my agent to book a flight, it found a cheaper one, a faster one, and one that leaves before I was born.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
}

main();
