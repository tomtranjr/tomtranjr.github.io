---
title: DocQFlow
description: A small ML service that sorts incoming permit PDFs by type. Train on labeled folders, score uploads through FastAPI, and track runs in MLflow.
date: 2026-04-01
period: Apr 2026 to now
links:
  repo: https://github.com/tomtranjr/docqflow
---

Permit and intake teams often get a mix of PDFs in one shared inbox. Sorting them by hand is slow, and mistakes go up with volume. DocQFlow is a first pass. It labels each uploaded PDF so the team knows which queue or template comes next.

The model trains on folders of PDFs, where each folder name is the class label. The pipeline extracts text from each file. Then a scikit-learn pipeline runs TF-IDF with bigrams and a logistic regression with balanced class weights. When a tracking URI is set, training logs parameters, metrics, and the model artifact to MLflow. A FastAPI app serves `POST /predict` and returns the label plus the probability for each class.

## What it does

- Trains and evaluates from the CLI, prints a classification report, and saves `model.joblib`.
- Serves `/health` and `/predict` for PDF uploads.
- Tracks experiments in MLflow on a remote server.
- Ships as a Docker image, with notes for Google Artifact Registry.

## Next

OCR for PDFs that have no usable embedded text. After that, LLM-based extraction and validation to fill and check structured fields after classification. This work is not in the public repo yet.
