import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(path.join(root, "index.html"), path.join(dist, "index.html"));

const publicDir = path.join(root, "public");
if (existsSync(publicDir)) {
  await cp(publicDir, dist, { recursive: true });
}

await cp(path.join(root, ".nojekyll"), path.join(dist, ".nojekyll"));

console.log("Static site built to dist/");
