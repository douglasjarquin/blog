// Build a throwaway copy of the site with Unicode and "_" slugs, then check the AI Catalog.
// Proves `pnpm build` (including the strict ARD schema check) passes for slugs Astro allows,
// without ever adding a test post to the real content tree.
import { spawnSync } from "node:child_process";
import { cpSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const skip = new Set(["node_modules", "dist", ".git", ".astro"]);
const work = mkdtempSync(join(tmpdir(), "blog-catalog-fixture-"));

const post = (title) =>
	`---\ntitle: "${title}"\ndescription: "Catalog fixture."\npublishDate: "2026-01-01"\n---\n\nFixture.\n`;
const fixtures = {
	"src/content/post/café.md": post("Unicode fixture"),
	"src/content/post/under_score.md": post("Underscore fixture"),
	"src/content/note/ñandú.md": `---\ntitle: "Unicode note fixture"\npublishDate: "2026-01-01T00:00:00Z"\n---\n\nFixture.\n`,
};
const expected = {
	"urn:air:www.douglasjarquin.com:post:caf_C3_A9":
		"https://www.douglasjarquin.com/posts/caf%C3%A9.md",
	"urn:air:www.douglasjarquin.com:post:under_5Fscore":
		"https://www.douglasjarquin.com/posts/under_score.md",
	"urn:air:www.douglasjarquin.com:note:_C3_B1and_C3_BA":
		"https://www.douglasjarquin.com/notes/%C3%B1and%C3%BA.md",
};

let failed = false;
const fail = (message) => {
	console.error(`FAIL ${message}`);
	failed = true;
};

try {
	cpSync(root, work, {
		recursive: true,
		filter: (src) => !skip.has(relative(root, src).split(/[\\/]/)[0]),
	});
	symlinkSync(join(root, "node_modules"), join(work, "node_modules"), "dir");
	for (const [file, body] of Object.entries(fixtures)) writeFileSync(join(work, file), body);

	// Reuse the pnpm that invoked this script (CI pins pnpm 10); fall back to PATH.
	const pnpm = process.env.npm_execpath;
	const build = pnpm
		? spawnSync(process.execPath, [pnpm, "build"], { cwd: work, encoding: "utf8" })
		: spawnSync("pnpm", ["build"], { cwd: work, encoding: "utf8" });
	if (build.status !== 0) {
		process.stderr.write(build.stdout + build.stderr);
		fail(`pnpm build exited ${build.status} with fixture slugs`);
	} else {
		const { entries } = JSON.parse(
			readFileSync(join(work, "dist/.well-known/ai-catalog.json"), "utf8"),
		);
		const byId = new Map(entries.map((entry) => [entry.identifier, entry.url]));
		if (byId.size !== entries.length) fail("catalog identifiers are not unique");
		for (const [identifier, url] of Object.entries(expected)) {
			if (byId.get(identifier) !== url) {
				fail(`expected ${identifier} -> ${url}, got ${byId.get(identifier) ?? "missing"}`);
			}
		}
	}
} finally {
	rmSync(work, { recursive: true, force: true });
}

if (failed) process.exit(1);
console.log(
	`catalog fixture: pnpm build passed; ${Object.keys(expected).length} fixture identifiers OK`,
);
