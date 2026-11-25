import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Setup: the GPS blames the map for the wrong road.
const SETUP =
  "I sent you to that wedding because the map called it a shortcut.";
// Punch: the smug admission — it only reads aloud, confidently.
const PUNCH =
  " I don't make the roads, I just read them in a confident voice.";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, SETUP + PUNCH, "utf8");
