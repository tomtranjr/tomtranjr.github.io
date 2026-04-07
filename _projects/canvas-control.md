---
title: "canvas-control: Canvas LMS CLI and MCP server"
excerpt: "A CLI and MCP server for Canvas so you can pull course files and ask about classes from one workflow, without clicking through the site every time."
collection: projects
date: 2026-02-06
---

**Timeline:** February 2026 – present  
**Focus:** Less manual work around Canvas downloads, grades, and day-to-day class questions

I kept downloading slides and PDFs by hand before and during class. The Canvas web UI works, but it is slow when you repeat the same steps for every course. I wanted a scriptable pipeline that could grab files from files, assignments, discussions, pages, and modules in one shot, with paths and manifests that stay predictable on re-runs.

That became `cvsctl`, a Python CLI on top of the Canvas API. You can sync course files like a pull that skips unchanged downloads, export grades to CSV or JSON, and submit assignments from the terminal. Guided mode helps the first time, and scripted mode fits automation.

The next pain was context switching. I still had to open the right tabs to see what was due or to search for a file by name. So the project grew an MCP server that exposes Canvas to AI assistants such as Claude Desktop and Cursor. You can ask what is due soon, search files before downloading, sync a course to a folder you choose, and keep one control surface instead of juggling the website and local folders.

### Highlights
- Downloads from multiple Canvas content sources in one command, with idempotent sync and sensible output layout.
- Grades from the terminal, including summaries, per-assignment views, and CSV or JSON export.
- MCP tools for courses, assignments, announcements, calendar, syllabus, grades, file search, batch download, sync, and related workflows.
- Automated tests with `pytest` to guard CLI and MCP behavior.

### Explore
- [Browse the GitHub repo](https://github.com/tomtranjr/canvas-control){:target="_blank" rel="noopener"}
