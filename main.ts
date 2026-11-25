import { writeFileSync, mkdirSync } from "node:fs";

// The classic fix, then the escalation: the "senior" fix is the same fix,
// delivered with more authority. Cheerful uselessness, one line, no blame.
const setup = "Have you tried turning it off and on again?";
const punch =
  "If that doesn't work, I'll escalate your ticket to Tier 2, where a senior agent will ask you to turn it off and on again, but with feeling.";
const line = `${setup} ${punch}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
