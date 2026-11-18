# Vendored schemas

`ai-catalog.schema.json` is the Agentic Resource Discovery (ARD) AI Catalog schema, copied unmodified from
[ards-project/ard-spec@4a8a6b8](https://github.com/ards-project/ard-spec/blob/4a8a6b8fdd3ac4a50dcb63213573159c1eed7856/spec/schemas/ai-catalog.schema.json)
under the Apache License 2.0.
`scripts/validate-ai-catalog.mjs` validates the built `/.well-known/ai-catalog.json` against it after every build.
To update, replace the file with a newer pinned commit and update the link above.
