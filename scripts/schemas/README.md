# Vendored schemas

Files copied byte-for-byte from [ards-project/ard-spec@4a8a6b8](https://github.com/ards-project/ard-spec/tree/4a8a6b8fdd3ac4a50dcb63213573159c1eed7856), which is licensed under the Apache License 2.0 (copy in [`LICENSE`](LICENSE)).
The upstream tree has no `NOTICE` file.

| File | Upstream path | SHA-256 |
| --- | --- | --- |
| `ai-catalog.schema.json` | `spec/schemas/ai-catalog.schema.json` | `c55238483a4738e08b250bdd6af1f4dc05a91afe882c649d224d09c19cd8fe09` |
| `LICENSE` | `LICENSE` | `dfe0e2a538e0e9004d43d1f57598177793109f5662706ccd1b1cb93c7fa34ce5` |

This folder is excluded from Biome and Prettier so the bytes stay identical to upstream.
`scripts/validate-ai-catalog.mjs` validates the built `/.well-known/ai-catalog.json` against the schema after every build.
To update, download both files from a newer pinned commit and update the commit link and hashes above.
