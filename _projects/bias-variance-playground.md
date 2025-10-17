---
title: "Bias-Variance Playground"
excerpt: "Interactive Dash web app demonstrating bias-variance tradeoffs and the impact of regularization when p rivals n.<br/><img src='/images/bias-variance-playground.png'>"
collection: projects
date: 2025-10-09
---

Built an interactive Plotly Dash playground that lets learners dial up sample size, feature count, correlation, and noise to watch bias-variance tradeoffs unfold. I built it as a learning aid so the user could see why regularization matters when high-dimensional regression teeters on the edge of instability.

### Highlights
- Scenario presets that recreate common scenarios: comfortable OLS, edge-case OLS vs Ridge, underdetermined LASSO, and high-correlation comparisons.
- Live controls for `n`, `p`, regularization strength, model choice, feature correlation, noise, and random seeds.
- Real-time charts for error curves, coefficient shrinkage, and predicted vs actual fits, plus warnings when OLS breaks (p ≥ n).
- Snapshot panel and CSV export so users can capture configurations and bring them into follow-up analysis.

### Explore
- [Launch the live playground](https://tomtranjr-bias-variance-playground.share.connect.posit.cloud/){:target="_blank" rel="noopener"}
- [Browse the GitHub repo](https://github.com/tomtranjr/bias-variance-playground){:target="_blank" rel="noopener"}
