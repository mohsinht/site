# Public profile gateway

## Source of truth

`data/profile.js` owns the professional facts, public timezone, learning statement, source relationships, and curated FAQs. The React resume, JSON Resume, public JSON, Markdown, JSON-LD, and build-generated PDF derive from this data. The PDF is rebuilt by the standard `yarn build` lifecycle using Node.js and the bundled licensed fonts; no Python installation is required.

Each article owns its text, dates, title, and tags in `page.md` frontmatter. Page metadata, article JSON-LD, RSS, tag listings, and the gateway's writing catalog derive from those fields. Historical article prose is a dated account, not a second editable copy of the current profile.

Generated formats are projections, not additional authoring sources. `/profile.json` is the canonical machine-readable profile. `/resume.json` follows the JSON Resume v1 shape. `/profile.md` and `/llms-full.txt` return the same full Markdown document. `/llms.txt`, HTML alternate/describedby links, the HTTP Link header, and the visible footer lead clients to these interfaces. Their publication cannot guarantee that every AI service discovers or follows them automatically.

## MCP

Use the Streamable HTTP endpoint `https://mohsinht.com/api/mcp` in a compatible client. The official MCP TypeScript server SDK handles current and legacy protocol traffic. No session database, generative model, outbound tool actions, or conversation store is used.

Tools:

- `get_profile`: the complete public projection and writing catalog.
- `verify_claim`: a bounded keyword lookup for published statements and source context, not independent verification.
- `ask_followup`: curated FAQ retrieval plus relevant public records. Unknown answers are explicitly not established.

Resources: `https://mohsinht.com/profile.json` and `https://mohsinht.com/resume.json`.

Requests are limited to 16 KiB; query lengths are validated. Third-party browser origins are rejected. Server-to-server clients and same-origin browser requests work; public JSON/Markdown GET endpoints permit cross-origin reads. No auth or private account data is consulted.

## Privacy and evidence

The gateway deliberately projects selected public fields rather than returning the raw source object. It publishes professional information already on the site, public contact links, a coarse location and timezone, and the owner-approved learning statement. It does not add compensation, household details, exact schedules, or hiring commitments. Contact Mohsin to confirm availability or terms.

Career and project records are self-reported. Recommendations, employer letters, repository context, first-person articles, and demos carry explicit source types and scope. A repository link does not establish every contribution, employment date, or operational metric. Stable record IDs and the publication update date support citation and follow-up retrieval without suggesting independent certification.

## Verification

`yarn verify` checks lint, formatting, types, unit tests, and the production build including PDF generation. `yarn test:e2e --workers=2` exercises real MCP SDK clients in legacy and modern modes, tools, resources, unknown questions, invalid requests, privacy boundaries, discovery links, and agreement among rendered and structured output. Browser tests cover the AI guide on desktop and mobile. The deploy trace explicitly includes article Markdown files for negotiated article responses.
