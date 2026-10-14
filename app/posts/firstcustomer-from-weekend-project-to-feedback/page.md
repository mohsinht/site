---
title: 'FirstCustomer: From a Weekend Project to Real Feedback'
date: 2026-10-14
dateModified: 2026-10-14
description: How an experiment in roasting landing pages became a structured website review tool after its first users sent feedback.
tags: [artificial intelligence, independent projects, product development]
author: Mohsin Hayat
---

I built [FirstCustomer.ai](https://firstcustomer.ai) over a weekend to give landing pages an honest first impression and useful fixes. The idea was simple: before a founder asks real customers to try a product, let a few critical perspectives look at the page and point out what is unclear.

I shared that first version and did not expect many people to use it. People did try it, though, and they sent feedback. Their responses gave me a reason to spend another weekend improving it.

![The FirstCustomer landing page, showing the website review form and five customer personas](/images/firstcustomer-demo.webp)

## The next iteration

Around the same time, I got early access to TypeSafe AI and began experimenting with it. That fit naturally into the way I wanted FirstCustomer to work: start with explicit, repeatable observations about a website, then use a language model to communicate what those observations mean.

The current version checks a website against **more than 20 signals in milliseconds**, at essentially no cost for that initial analysis. Those checks produce structured findings. An LLM then turns them into a report a person can read and act on.

That division matters to me. A single broad LLM prompt can give an impressionistic assessment, but it is harder to know which page signals drove its conclusions. With structured checks doing most of the initial work, the final synthesis has concrete observations to explain. The aim is feedback that is both fast and useful, rather than a generic verdict.

FirstCustomer presents the page through five customer perspectives: **the Impatient One, the Skeptic, the Buyer, the Comparison Shopper, and the Mobile Skimmer**. Each looks for a different kind of friction, from a value proposition that takes too long to understand to a missing reason to trust the offer.

## See it in action

[Watch the FirstCustomer demo on YouTube](https://www.youtube.com/watch?v=_9TQfAzmIPE), or play it here:

<div className="video-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/_9TQfAzmIPE"
    title="FirstCustomer AI demo video"
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

[Read the LinkedIn update](https://lnkd.in/p/dYWG4gRu).

## Where it might go

The same idea of a candid first impression could apply beyond landing pages: resumes, presentations, and product interfaces all have moments where an outsider spots something the creator has stopped seeing. Those are ideas I am considering, not features I am claiming are available today.

[Try FirstCustomer.ai](https://firstcustomer.ai). If you use it, break it, disagree with a report, or have an idea for it, I would love to hear from you. Thanks to everyone who tried the first version and sent feedback. You gave me another weekend project.
