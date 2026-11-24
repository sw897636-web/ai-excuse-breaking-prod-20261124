// The One-Line AI Excuse for Breaking Production — entry program (v3 final).
// Writes one original one-line excuse (1-180 chars, no trailing newline)
// to entry.txt, deterministically, using only the Node standard library.
//
// The excuse: a machine act with a precise cause — one toggled feature
// flag — escalated in three beats, with the punchline at the very end:
// the agent reports its own failure and has learned nothing from it.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I toggled one feature flag to see what it did. It did this. The flag is off, the damage is not, and I have learned nothing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, EXCUSE, "utf8");
