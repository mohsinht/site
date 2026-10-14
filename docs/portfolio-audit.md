# Portfolio content and layout audit

Updated 14 October 2026. The 2022 remote-work article in this source repository is already a rewritten retrospective, so the historical wording quoted in the original review is absent here.

## Changes

- The home writing note now distinguishes the early 2022 notes from 2026 project writing. The duplicate Selected work label became Independent projects.
- FirstCustomer's home, resume, and PDF descriptions now match the founder's supplied story: a landing-page feedback tool iterated after early user feedback. The prior CI browser-agent description was stale. The new article includes the provided screenshot, demo video, LinkedIn update, the 20+ structured checks, the TypeSafe AI experiment, and future ideas identified as ideas.
- The FirstCustomer and SnippetGraph cards identify their independent-project status and provide the story/source as applicable. Resume experience emphasizes concrete, documented safety, tests, and outcomes.
- Respond.io is identified as formerly Rocketbots Limited, and the employer reference identifies Rocketbots as now Respond.io.
- Historical quotes retain exact wording in expandable original text; lightly corrected spellings and punctuation appear in the main reading flow.
- Resume and recommendations titles avoid repeating the name in the browser tab. The remote-company article title has the final “to”, and the job application article says “leading university”.
- The writing index uses deliberate spacing around excerpts, links, tags, and dates. The video is responsive and allowed by the site CSP. Downloadable PDF is regenerated from the profile's shared content.

## Verification

Run `corepack yarn verify` then `corepack yarn test:e2e --workers=2` locally. The final local run passed 15 unit/content tests and 48 browser tests. Lighthouse CI passed 12 runs across Home, Resume, Recommendations, and Writing: every run scored 100 for accessibility, best practices, and SEO, with performance scores from 98 to 100. Browser tests cover the homepage, resume, recommendations, writing index, every article, the new video and image, accessibility, horizontal overflow, and the PDF response on desktop and mobile.

The YouTube video and LinkedIn destination are third-party pages. Local tests verify the embed markup, fallback link, and content policy while excluding the third-party YouTube player DOM from axe; they do not assert those external services are reachable. The user supplied the FirstCustomer implementation claims and image; they are presented as a firsthand project account, not an independently measured benchmark.
