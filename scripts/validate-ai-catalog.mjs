// Validate a built AI Catalog (AgentReady AR-FIND-04) against the vendored ARD JSON Schema.
// Usage: node scripts/validate-ai-catalog.mjs <path/to/ai-catalog.json>
import { readFileSync } from "node:fs";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const file = process.argv[2];
if (!file) {
	console.error("usage: validate-ai-catalog.mjs <ai-catalog.json>");
	process.exit(2);
}

const schema = JSON.parse(
	readFileSync(new URL("./schemas/ai-catalog.schema.json", import.meta.url), "utf8"),
);
const catalog = JSON.parse(readFileSync(file, "utf8"));

const ajv = new Ajv2020({ allErrors: true, allowUnionTypes: true });
addFormats(ajv);
const validate = ajv.compile(schema);

if (validate(catalog)) {
	console.log(`${file}: valid AI Catalog (${catalog.entries.length} entries)`);
} else {
	console.error(`${file}: invalid AI Catalog`);
	for (const error of validate.errors ?? []) {
		console.error(`  ${error.instancePath || "/"} ${error.message}`);
	}
	process.exit(1);
}
