---
title: Next Bracket
description: Score your Air Force fitness test and see what it takes to reach the next bracket. Live for Airmen at my wing.
date: 2026-10-04
period: Oct 2026 to now
heroImage: ../../assets/projects/next-bracket.png
heroAlt: Next Bracket on a phone, with a score of 84.5 and plans to reach 90
links:
  repo: https://github.com/tomtranjr/nextBracket
  demo: https://nextbracket-five.vercel.app
---

Every Airman takes the Physical Fitness Assessment (PFA). The scoring charts are 11 pages of tables. Most calculators read those tables and return one number. They do not answer the question Airmen ask most: what do I need to do to pass, or to hit 90?

I'm a Peer Fitness Leader at the 129th Rescue Wing, and PFA questions come up every week. To answer them, we worked the charts backward by hand. I built Next Bracket so that every answer comes from the official charts and shows its source. I'm now sharing it with Airmen at my wing for feedback.

## What it does

- Scores all 8 events as you type, for every age band, both sexes, and the AFSPECWAR/EOD chart. Each component shows its points and whether you met its minimum.
- Plans the next bracket. Set a target such as 75 or 90, and you get three ways to reach it: raise one event, take the quick wins, or spread the work across events.
- Follows the regulation exactly. The waist-to-height ratio truncates to two decimals, as DAFMAN 36-2905 requires. It never rounds up in your favor.
- Works on a phone at the track. Times go in two boxes, minutes and seconds, so the number keypad is all you need. Nothing you type is stored.

## How it's built

- A pure Python core scores and plans with no disk, clock, or network access. Tests re-score every plan to prove it hits the target and meets every minimum.
- A script turns the official charts PDF into 144 versioned tables. I checked the values against the PDF by hand, and every score shows the chart version it used.
- A thin FastAPI layer runs on Google Cloud Run. The Next.js site runs on Vercel.
- CI runs lint, type checks, and tests on every push. Each deploy checks `/health` and a known score before it takes traffic.

## Next

A chat assistant for policy questions, such as "Can I retest early?" It will search DAFMAN 36-2905 and cite the paragraph. It will call the same tested calculator for every number, so the AI never computes a score. Evals decide what gets added.
