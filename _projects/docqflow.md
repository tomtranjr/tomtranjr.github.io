---
title: "DocQFlow: PDF document classifier"
excerpt: "Route incoming permit-style PDFs with a small ML service. Train on labeled folders, score uploads through FastAPI, and track runs in MLflow."
collection: projects
date: 2026-04-01
---

**Timeline:** April 2026 – present  
**Focus:** Faster triage when many PDFs arrive and someone has to decide what each document is

Permit and intake workflows often dump a mix of PDFs into shared inboxes. Sorting them by hand is slow and easy to get wrong under volume. DocQFlow is a first pass that labels an uploaded PDF so teams know which queue or template comes next.

Today the repo trains on folders of PDFs where each folder name is the class label. Text is extracted from each file, then a scikit-learn pipeline runs TF-IDF vectorization with bigrams and logistic regression with balanced class weights. Training logs parameters, metrics, and the model artifact to MLflow when a tracking URI is set. A FastAPI app serves `POST /predict` for uploads and returns the predicted label plus per-class probabilities. Docker packaging and docs for pushing images to Google Artifact Registry support deployment workflows.

### Highlights
- Train and evaluate from the CLI with a clear classification report and a saved `model.joblib`.
- FastAPI service with `/health` and `/predict` for PDF uploads.
- MLflow integration for experiment tracking on remote servers.
- Container build and registry notes for shipping the API.

### Roadmap
**Planned next work:** add OCR for PDFs where embedded text is missing or unreliable, then layer LLM-based extraction and validation so structured fields can be filled and checked after classification. This part is not in the public repo yet.

### Explore
- [Browse the GitHub repo](https://github.com/tomtranjr/docqflow){:target="_blank" rel="noopener"}
