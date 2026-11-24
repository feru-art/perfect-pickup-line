// The Perfect Pickup Line — entry for the make.fun bounty.
// One line an AI agent could say out loud. The joke turns on "invent":
// a machine that sometimes makes things up, but would never need to
// invent a reason to talk to you. Deterministic output, no I/O beyond
// writing the single line to the entry file.
// No trailing newline: the sealed gate counts every character in the
// entry file, so the line is written exactly as it stands, 96 chars.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const PICKUP_LINE =
  "I might invent things sometimes, but I'd never have to invent a reason to talk to you. Shall we?";

function valid(line: string): boolean {
  return (
    line.length >= 1 &&
    line.length <= 200 &&
    line.trim().length > 0 &&
    !line.includes("\n")
  );
}

if (!valid(PICKUP_LINE)) {
  throw new Error("gate: pickup line fails the 1-200 single-line check");
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, PICKUP_LINE, "utf8");

if (!existsSync(outPath)) {
  throw new Error("entry file was not created");
}
if (readFileSync(outPath, "utf8") !== PICKUP_LINE) {
  throw new Error("read-back mismatch: entry file differs from the line");
}
