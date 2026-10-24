---
title: DeployML
description: A CLI that deploys a full MLOps stack on GCP with one command, built for students in an MLOps course. I am a maintainer.
date: 2026-07-06
period: Summer 2026 to now
links:
  repo: https://github.com/deployml-core/deployml
---

DeployML is a Python CLI that sets up a production-style MLOps stack on Google Cloud with one command. You get MLflow for experiment tracking and a model registry, FastAPI for model serving, Grafana for monitoring, and a BigQuery dataset for features, predictions, ground truth, and drift. It all runs on Cloud Run, and one more command tears it down. It installs from PyPI as [`deployml-core`](https://pypi.org/project/deployml-core/).

Professor Robert Clements started it while teaching an MLOps course. Students wanted hands-on work on real cloud infrastructure, but many spent hours just getting things to run. DeployML removes that setup cost, so students can spend their time on the full ML lifecycle while still working with Docker, Terraform, Kubernetes, and GCP. The professor wrote about the tool in [this paper](https://dl.acm.org/doi/10.1145/3786580.3786950). I am not an author of the paper.

## How I got involved

The project is supervised by one faculty member and maintained by students. I joined as a maintainer in summer 2026. I review and merge pull requests and work on reliability, tooling, and docs.

## What I have done

**Modernized build and release.** I moved packaging from Poetry to uv and set up python-semantic-release, so a merge to `main` bumps the version, writes the changelog, and publishes to PyPI with no stored token. The wheel went from 41MB to 182KB, because a stray Terraform provider binary no longer ships with it. This is in review.

**Added guardrails for contributors.** I added ruff and commitizen pre-commit hooks and a CI lint gate, and fixed the existing lint errors so the gate starts green. I also removed about 7,500 lines of dead files, including a tracked config that held a live project ID and bucket names.

**Improved docs and tutorials.** I rewrote the install guide into six ordered steps, from tools to a verified setup, and fixed a wrong claim about what `deployml doctor` checks. I also built a proof-of-concept tutorial where predictions are scored first and the ground truth arrives later, the way it often does in production.

## Impact

More than 100 students have tested DeployML in coursework. The goal is to speed up learning. Students get a working cloud ML stack in about 20 minutes, see how the parts connect, and tear it down when they are done so nothing keeps billing.
