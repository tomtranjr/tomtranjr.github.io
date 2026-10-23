---
title: Bias-Variance Playground
description: A Dash app that shows the bias-variance tradeoff, and why regularization matters when the number of features nears the number of samples.
date: 2025-10-09
period: Fall 2025
heroImage: ../../assets/projects/bias-variance-playground.png
heroAlt: Train and test RMSE across regularization strength, with the optimal lambda marked
links:
  repo: https://github.com/tomtranjr/bias-variance-playground
  demo: https://tomtranjr-bias-variance-playground.share.connect.posit.cloud/
---

I built this as a learning aid. You change the sample size, feature count, correlation, and noise, and you watch the bias-variance tradeoff change in real time. The goal is to make it clear why regularization matters when high-dimensional regression becomes unstable.

## What it does

- Presets for common cases: comfortable OLS, OLS against Ridge at the edge, underdetermined LASSO, and high correlation.
- Controls for `n`, `p`, regularization strength, model, feature correlation, noise, and random seed.
- Live charts for error curves, coefficient shrinkage, and predicted against actual values. A warning shows when OLS breaks (p ≥ n).
- A snapshot panel and CSV export, so you can keep a setup for later analysis.
