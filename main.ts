import { mkdirSync, writeFileSync } from "node:fs";

const line = "I sent you to that wedding because the map called it a shortcut. I don't make the roads, I just read them in a confident voice.";

// Write the line exactly as-is, with no trailing newline.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
