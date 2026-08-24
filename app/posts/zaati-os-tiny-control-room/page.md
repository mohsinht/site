---
title: 'Zaati OS: A Tiny Control Room for Your Life'
date: 2026-08-24
dateModified: 2026-08-24
description: A friendly, no-jargon guide to turning the AI you already use into a private daily dashboard.
tags: [artificial intelligence, open source, personal tools]
author: Mohsin Hayat
---

My calendar knows when I am busy. My inbox knows what I am ignoring. My task list knows what is on fire. My finance apps know whether I should order dessert.

The problem is that none of them talk to each other.

So I built [Zaati OS](https://github.com/mohsinht/zaati-os), a small control room for everyday life. “Zaati” means personal. The idea is simple: the AI assistant you already use collects the useful bits, places them in files you control, and Zaati OS turns those files into one calm dashboard.

No new company needs to own your life story. No mystery account sits in the middle. You choose what comes in, where it lives, and what appears on screen.

![Zaati OS dashboard showing a daily overview](https://raw.githubusercontent.com/mohsinht/zaati-os/e6266bc90c27e13774f1141907f7b99f6b810ca9/docs/assets/dashboard-light.png)

*The dashboard above uses pretend data. Nobody's real inbox or bank balance was sacrificed for this screenshot.*

## Explain it like I am five

Imagine that every part of your life gives you a sticky note:

- Your calendar says, “Dentist at 4.”
- Your inbox says, “Reply to this person.”
- Your work board says, “This task is blocked.”
- Your money app says, “You spent more on food this week.”
- Your news list says, “These three stories actually matter.”

Normally, those sticky notes are scattered across ten rooms.

Zaati OS asks your AI to collect only the notes you approve, tidy them, and pin them to one board. Tomorrow it does the same thing again. After a week, it can help you notice patterns, such as the task you keep postponing or the afternoons you keep overbooking.

That is the whole trick. It is a neat board, not a robot overlord. The robot overlord release has been postponed indefinitely.

## What does Zaati OS actually do?

Zaati OS gives your information a home and a useful shape. It can show:

- today's meetings and realistic focus time
- emails that need a reply, while ignoring newsletter confetti
- work tasks, blockers, and the next useful action
- money and investment summaries you choose to provide
- a short news briefing instead of an endless feed
- goals, habits, health notes, reminders, and weekly reviews
- when each section was last updated
- warnings when something is missing or old

You do not need all of that on day one. Start with three things, such as your calendar, inbox, and work tasks. A tiny dashboard that helps is better than a giant dashboard that looks impressive and says nothing.

![Zaati OS setup screen with three guided steps](https://raw.githubusercontent.com/mohsinht/zaati-os/e6266bc90c27e13774f1141907f7b99f6b810ca9/docs/assets/onboarding-light.png)

*The guided start asks only for the basics. The knobs and switches can wait until you actually want them.*

## Why does this make sense now?

Many of us already pay for ChatGPT, Claude, Gemini, or another AI assistant. Those assistants can read approved sources and summarize information well, but a chat is not always the best place to see your whole day.

Zaati OS gives that work a lasting home:

1. Your AI reads only the sources you allow.
2. It writes a small, dated snapshot.
3. Zaati OS checks that the snapshot is safe to display.
4. The dashboard turns it into lists, numbers, calendars, and charts.
5. Weekly reviews can look back at earlier snapshots.

Think of the AI as the helpful librarian, the files as the shelves, and the dashboard as the reading desk.

This also means you are not locked into one AI. If you change assistants later, your dashboard and old snapshots can stay with you.

## Try it in about five minutes

You need [Git](https://git-scm.com/), [Node.js 22 or newer](https://nodejs.org/), and a free GitHub account.

### 1. Make your own copy

Open the [Zaati OS repository](https://github.com/mohsinht/zaati-os) and press **Fork** near the top right. GitHub will create your own copy.

### 2. Open the little text window

On macOS or Linux, open Terminal. On Windows, open PowerShell. Then run:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/zaati-os.git
cd zaati-os
npm install
npm run setup
npm run tutorial
```

Replace `YOUR_GITHUB_USERNAME` with your GitHub name.

The setup asks a few friendly questions. The tutorial then creates pretend information, checks it, and opens your dashboard. It even makes one deliberate mistake and fixes it, like a tiny robot tripping over its shoelaces and recovering professionally.

If you prefer Make, the short version is:

```bash
make setup
make tutorial
```

### 3. Look around

Try the light and dark themes. Make the window narrow to see the phone layout. Open different sections and notice that every piece of information tells you where it came from and how fresh it is.

![Zaati OS dashboard on a mobile screen](https://raw.githubusercontent.com/mohsinht/zaati-os/e6266bc90c27e13774f1141907f7b99f6b810ca9/docs/assets/dashboard-mobile.png)

*It works on smaller screens too, because life rarely waits for us to return to a laptop.*

## Now make it yours

Once the pretend demo works, choose one real source. Calendar is a friendly start.

Zaati OS includes ready-made instructions for common jobs, including daily agenda, inbox attention, work focus, money, news, daily overview, and weekly review. Give the matching instruction to your AI assistant, allow only the source it needs, and tell it to save the result in your private data storage.

You can also use one scheduled AI task to update several sections together. This keeps the routine simple:

- morning: collect today's useful information
- during the day: open one dashboard
- end of week: review what changed

The important word is **approved**. Do not connect everything merely because you can. If your weather forecast does not need access to your email, it should not get access to your email. Sensible robots appreciate sensible boundaries.

## What about privacy?

This part matters.

The public Zaati OS project contains code and pretend examples, not your real life. Your real snapshots should stay in private storage, such as a separate private repository. Your deployed dashboard should also require a login.

Zaati OS has no central account, required tracking, or central database. It does not charge a platform fee. Your chosen AI, storage, connectors, or hosting company may still have their own costs and privacy rules.

Optional file encryption is available too, but encryption is not a magic invisibility cloak. You should still protect the dashboard with a proper login and read the [privacy guide](https://github.com/mohsinht/zaati-os/blob/main/docs/privacy.md) before connecting real information.

## Add another room when you need it

Want a page for your cricket matches, travel plans, garden, reading list, water use, or dog walking schedule? Add it later.

Zaati OS is designed like a house with reusable rooms. A new section describes:

- where its information comes from
- what shape that information should have
- how often it should refresh
- how it should appear
- what to show when information is missing

You can also change colors, fonts, spacing, and headings without rebuilding the whole house.

## The point is not more data

The point is fewer forgotten things and better decisions.

A good personal dashboard should answer:

- What needs my attention today?
- What changed?
- Am I moving toward my goals?
- What am I repeatedly forgetting?
- Where are my time, money, energy, and attention going?

In my opinion, the best version of AI is not another noisy app demanding attention. It quietly prepares the room before you enter.

That is what I want Zaati OS to become: a useful daily interface that belongs to you, works with the AI you already like, and grows one small piece at a time.

Fork it, run the pretend demo, connect one source, and see whether tomorrow morning feels a little less scattered.

**[Explore Zaati OS on GitHub](https://github.com/mohsinht/zaati-os)**
