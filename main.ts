// The Perfect Pickup Line — V4 (pemenang adu lokal 4-0).
// Twist: "invent" bermakna ganda — mesin yang bisa mengarang,
// tapi tak perlu mengarang alasan untuk bicara denganmu.
// Gate: output 96 karakter, dalam 1-200 karakter, satu baris, tanpa newline.
// Writes one pickup line to /output/entry.txt (deterministic, no newline).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I might invent things sometimes, but I'd never have to invent a reason to talk to you. Shall we?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
