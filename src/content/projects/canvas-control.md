---
title: canvas-control
description: A CLI and MCP server for Canvas LMS. Pull course files, check grades, and ask about classes from one place.
date: 2026-02-06
period: Feb 2026 to now
links:
  repo: https://github.com/tomtranjr/canvas-control
---

I kept downloading slides and PDFs by hand before every class. The Canvas web UI works, but it is slow when you repeat the same steps for each course. I wanted one command that pulls files from every part of a course, with predictable paths on every re-run.

That became `cvsctl`, a Python CLI on top of the Canvas API. It syncs course files and skips anything that has not changed. It exports grades to CSV or JSON, and it submits assignments from the terminal. A guided mode helps the first time, and a scripted mode fits automation.

The next problem was context switching. I still opened tabs to see what was due or to find a file by name. So I added an MCP server that gives AI assistants such as Claude Desktop and Cursor access to Canvas. You can ask what is due soon, search files before you download them, and sync a course to a folder you choose.

## What it does

- Downloads from files, assignments, discussions, pages, and modules in one command.
- Shows grade summaries and per-assignment views, with CSV or JSON export.
- Exposes MCP tools for courses, assignments, announcements, calendar, syllabus, grades, file search, and sync.
- Uses `pytest` to test CLI and MCP behavior.
