## About

This repository is bootstraped using the blog theme of [shuding/nextra](https://github.com/shuding/nextra). You can learn more about the Nextra template here: https://nextra.site/docs/blog-theme.

## How to run

This project requires Node.js 24.

```bash
nvm use
corepack enable
yarn install --frozen-lockfile
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
yarn test
yarn test:coverage
yarn verify
```

`yarn verify` runs the unit/content checks and creates a production build. GitHub Actions runs the same checks for pull requests and pushes to `main`. In GitHub repository settings, require the **Verify / Test and build** status check before merging to `main`; Vercel's production deployment will then only occur after the verified pull request is merged.

## How to deploy

This site is deployed like a standard Next.js app on Vercel, but you can deploy anywhere that supports Node.js 24.

[visit mohsinht.com](https://mohsinht.com/)
