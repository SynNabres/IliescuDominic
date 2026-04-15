# Dominic Iliescu Website — Codex Build Package

This package is designed to help Codex build the strongest possible first version of a premium personal medical website for **Prof. Univ. Dr. Dominic Iliescu**.

## Files included
- `agent.md` — authoritative build brief for Codex
- `build_prompt.txt` — one-shot Codex prompt
- `project_context.md` — factual context, goals, positioning, constraints
- `content_blueprint.md` — page-by-page copy and structure guidance
- `copy_deck_ro.md` — Romanian patient-facing copy starter for the key pages
- `publications_blueprint.md` — structure and starter content rules for the Publications page
- `site_data.json` — structured data for services, prices, contact, locations, academic facts
- `implementation_notes.md` — design, UX, SEO, schema, and engineering requirements
- `launch_checklist.md` — pre-launch QA and validation
- `sources_used.md` — source log used to ground the package

## Important note
This package is grounded in:
1. the current live GinEcho pricing/services page for Dr. Dominic Iliescu
2. the official UMF Craiova profile
3. the uploaded CV provided in this conversation
4. the visual/interaction reference of the publications page on rodicanagy.ro

## Important discrepancy tracked
The current live GinEcho prices differ from some earlier manually listed values.
The structured data in `site_data.json` uses the **live site values** as the default source of truth, while keeping the content easy to update later.

## Recommended Codex workflow
1. Read `agent.md`
2. Read `project_context.md`
3. Read `site_data.json`
4. Read `content_blueprint.md`
5. Read `copy_deck_ro.md`
6. Build the site
7. Use `implementation_notes.md` and `launch_checklist.md` to finish polish and QA
