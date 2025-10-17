---
title: "When Predictors Outnumber Data: Making Sense of High-Dimensional Regression"
excerpt: "Interactive Dash walkthrough of high-dimensional regression concepts, tooling, and intuition.<br/><img src='/images/high-dimensional-regression.png'>"
collection: projects
date: 2025-10-10
---

Built an interactive Plotly Dash blog site that pairs modular Markdown notes with live demos to unpack high-dimensional regression, starting from rank diagnostics to LASSO paths and economic intuition. My groupmates and I created it to help classmates grasp why classical regression breaks when features explode, and how modern regularization tools step in.

### Highlights
- Live Markdown sections sourced from `notes/` and composed via the Dash app entry point (`main.py`).
- Reusable components in `components/` for visualizing LASSO selection, full-rank checks, and regression workflows.
- Cohesive styling through `assets/styles.css` and shared design tokens in `theme.py`.

### Explore
- [Launch the live site](https://0199cae0-c197-2e7e-9a4a-8d58e6c66fe2.share.connect.posit.cloud/){:target="_blank" rel="noopener"}
- [Browse the GitHub repo](https://github.com/tomtranjr/msds601-highdim-group9){:target="_blank" rel="noopener"}

This was a class project for MSDS 601 Linear Regression.
