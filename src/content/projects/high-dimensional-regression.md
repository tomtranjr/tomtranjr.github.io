---
title: When Predictors Outnumber Data
description: An interactive guide to high-dimensional regression, from rank checks to LASSO paths. Built with Plotly Dash for MSDS 601.
date: 2025-10-10
period: Fall 2025
heroImage: ../../assets/projects/high-dimensional-regression.png
heroAlt: LASSO coefficient paths shrinking to zero
links:
  repo: https://github.com/tomtranjr/msds601-highdim-group9
  demo: https://0199cae0-c197-2e7e-9a4a-8d58e6c66fe2.share.connect.posit.cloud/
---

My group built this site to help classmates see why classical regression breaks when features outnumber observations. It also shows how regularization fixes the problem. The site pairs short Markdown notes with live demos, from rank diagnostics to LASSO paths.

This was a class project for MSDS 601, Linear Regression, at the University of San Francisco.

## How it works

- Markdown sections in `notes/` load into the Dash app through `main.py`.
- Reusable components in `components/` show LASSO selection, full-rank checks, and regression workflows.
- One stylesheet and a shared `theme.py` keep the styling consistent.
