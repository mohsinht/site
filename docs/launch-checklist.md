# Production launch checklist

This branch is ready to deploy only after the following external actions are completed.

## Vercel

1. In **Project → Settings → Domains**, add `mohsinht.com` and set it as the primary domain.
2. Add `www.mohsinht.com` and configure a permanent redirect to `https://mohsinht.com` (including paths). The application cannot redirect a separate `www` host until Vercel receives that host.
3. Confirm automatic HTTPS is active for both domains and that the Node 24 build setting uses `yarn install --frozen-lockfile` and `yarn build`.
4. After deployment, verify `/`, `/resume`, `/recommendations`, `/posts`, `/sitemap.xml`, `/robots.txt`, `/feed.xml`, `/llms.txt`, `/llms-full.txt`, and the `/llm.txt` redirect.
5. Inspect production response headers. Confirm the CSP, HSTS, Referrer-Policy, Permissions-Policy, `X-Content-Type-Options`, and PDF `X-Robots-Tag` headers are present. Check the browser console for CSP errors.

## Google Search Console

1. Verify the domain property, and verify host variants separately if the account setup requires it.
2. Submit `https://mohsinht.com/sitemap.xml`.
3. Inspect and request indexing for the homepage, résumé, recommendations, writing index, and important articles.
4. Check canonical selection, coverage, and structured-data reports after Google has recrawled the site.
5. Address obsolete results only after redirects or removal responses are known to be correct.

## Bing Webmaster Tools

1. Verify `https://mohsinht.com`.
2. Submit `https://mohsinht.com/sitemap.xml`.
3. Inspect the homepage, résumé, recommendations, and writing URLs after crawl.

## External identity alignment (documented; not performed by this branch)

- Update the GitHub profile bio and README to use: “Senior Software Engineer specializing in Applied AI and Backend Systems.”
- Update the current employer to OnService.AI and pin public, high-quality AI or backend work where available.
- Align LinkedIn’s headline, About section, and Featured section; feature the portfolio, résumé, SnippetGraph, and FirstCustomer.
- Redirect, disable, or deindex `mohsinht.github.io` and remove or redirect obsolete `dev.mohsinht.com`.
- Remove stale public phone-number exposure anywhere it is controlled.

## Factual confirmation still needed

- Confirm that `public/downloads/MohsinHayatResume.pdf` remains the approved current résumé before linking it as a downloadable file or renaming it to `Mohsin_Hayat_Resume.pdf`.
- Confirm the production availability and preferred public URLs for SnippetGraph and FirstCustomer before any future campaign or social promotion.
