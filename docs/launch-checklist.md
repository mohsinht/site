# Production launch checklist

This branch is ready to deploy only after the following external actions are completed.

## Vercel

1. In **Project → Settings → Domains**, add `mohsinht.com` and set it as the primary domain.
2. Add `www.mohsinht.com` and configure a permanent redirect to `https://mohsinht.com` (including paths). The application cannot redirect a separate `www` host until Vercel receives that host.
3. Confirm automatic HTTPS is active for both domains and that the Node 24 build setting uses `yarn install --frozen-lockfile` and `yarn build`.
4. After deployment, verify `/`, `/resume`, `/recommendations`, `/posts`, `/sitemap.xml`, `/robots.txt`, `/feed.xml`, `/llms.txt`, `/llms-full.txt`, and the `/llm.txt` redirect.
5. Inspect production response headers. Confirm the CSP, HSTS, Referrer-Policy, Permissions-Policy, `X-Content-Type-Options`, and PDF `X-Robots-Tag` headers are present. Check the browser console for CSP errors.

## Cloudflare agent readiness

1. In **AI Crawl Control**, allow search and user-requested retrieval crawlers, and block model-training crawlers only if that matches the published `Content-Signal` policy. This is an enforcement setting; the `Content-Signal` response header and `robots.txt` are voluntary declarations.
2. If the Cloudflare plan supports it, enable **AI Crawl Control → Markdown for Agents**. The origin already serves Markdown for `Accept: text/markdown`, so do not enable a conflicting rewrite or cache rule.
3. Verify the origin after deployment:
   - `curl -I https://mohsinht.com/` returns `200` and includes `Content-Signal: search=yes, ai-input=yes, ai-train=no, use=reference`.
   - `curl -I https://mohsinht.com/robots.txt` includes the same `Content-Signal` response header; its body contains only valid robots directives and the canonical sitemap.
   - `curl https://mohsinht.com/robots.txt` contains only valid robots directives and `https://mohsinht.com/sitemap.xml` as its sitemap.
   - `curl -sD - -H 'Accept: text/markdown' https://mohsinht.com/` returns `Content-Type: text/markdown; charset=utf-8` and `Vary: Accept`.
   - Repeat the Markdown request for `/resume`, `/recommendations`, `/posts`, and each public article.

## Google Search Console

1. Verify the domain property, and verify host variants separately if the account setup requires it.
2. Submit `https://mohsinht.com/sitemap.xml`.
3. Inspect and request indexing for the homepage, Resume, recommendations, writing index, and important articles.
4. Check canonical selection, coverage, and structured-data reports after Google has recrawled the site.
5. Address obsolete results only after redirects or removal responses are known to be correct.

## Bing Webmaster Tools

1. Verify `https://mohsinht.com`.
2. Submit `https://mohsinht.com/sitemap.xml`.
3. Inspect the homepage, Resume, recommendations, and writing URLs after crawl.

## External identity alignment (documented; not performed by this branch)

- Update the GitHub profile bio and README to use: “Senior Software Engineer specializing in Applied AI and Backend Systems.”
- Update the current employer to OnService.AI and pin public, high-quality AI or backend work where available.
- Align LinkedIn’s headline, About section, and Featured section; feature the portfolio, Resume, SnippetGraph, and FirstCustomer.
- Redirect, disable, or deindex `mohsinht.github.io` and remove or redirect obsolete `dev.mohsinht.com`.
- Remove stale public phone-number exposure anywhere it is controlled.

## Factual confirmation still needed

- Confirm that `public/downloads/MohsinHayatResume.pdf` remains the approved current Resume before linking it as a downloadable file or renaming it to `Mohsin_Hayat_Resume.pdf`.
- Confirm the production availability and preferred public URLs for SnippetGraph and FirstCustomer before any future campaign or social promotion.
