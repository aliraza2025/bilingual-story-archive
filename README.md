# Riwayat

**A searchable archive for spoken stories · Raza Labs by Ali Raza**

![Concept artwork for Riwayat](public/project-cover.webp)

A timestamped story explorer preserving multilingual source text, with local faster-whisper transcription and source-linked search.

**[Working browser demo](https://aliraza2025.github.io/bilingual-story-archive/)** · [Case study](CASE_STUDY.md) · [Portfolio copy](PORTFOLIO.md)

Stage: independent working prototype by Ali Raza, with AI-assisted implementation.

## What is verified

Local ASR on original synthetic recording. Tests and original synthetic fixtures are included. Public browser examples are labeled separately from local framework/model execution.

## Run the workbench

Requires Node.js 22 or newer. Python integrations were verified with Python 3.13 on Apple Silicon.

```bash
# No npm dependencies are required for the browser baseline.
npm test
npm run build
npm start
```

Search the supplied timestamped transcript. Upload a recording for local transcription, or run `.venv/bin/python scripts/transcribe.py public/speech.wav` on the original synthetic fixture. The actual ASR output is retained in `examples/local-transcription.json`.

## Optional local Python integration

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
PYTHON_BIN="$PWD/.venv/bin/python" npm start
```

The first model run downloads public weights to `.model-cache/`. No paid provider is configured. Model licenses are separate from this repository's MIT source-code license. Only use recordings and documents you have permission to process.

## Boundaries

The English recording and supplied bilingual text are fictional fixtures. One local English ASR run does not establish language or dialect accuracy. Automatic translation and real oral-history collection are not claimed.

The records, prices, and stories supplied with this project are synthetic. No customers, adoption, revenue, business savings, regulatory certification, or production reliability are claimed.

## Foundation and original contribution

Foundation: https://github.com/SYSTRAN/faster-whisper. The original contribution is the domain workflow, interface, validation, synthetic fixtures, tests, and product reasoning in this repository. Dependencies retain their licenses and are not represented as authored here.

The original browser source is in `public/`. `docs/` is generated for GitHub Pages; run `npm run build` after changing the browser source. Local services bind to loopback. Model endpoints are not exposed through GitHub Pages.

## Next validation

Use permission-cleared recordings across chosen languages and compare word error rate and timestamp alignment with corrected references.

License: [MIT](LICENSE) for this repository's original source. See each dependency and model card for their respective terms.

## Visual identity

Original AI-generated concept artwork for the Raza Labs collection, matched to Ali Raza’s midnight-purple and pink portfolio studio. The cover is illustrative artwork; the interactive demo shows the actual prototype. Generation prompt: [ARTWORK.md](ARTWORK.md).
