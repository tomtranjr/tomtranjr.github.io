---
title: "How I keep class repo forks sane"
date: 2025-11-15
permalink: /posts/2025/10/forking-class-repo/
tags:
  - git
  - workflows
  - tips
---

If you have ever forked a professor’s repo, pushed your own work, then pulled their new commits and hit a wall of merge conflicts, you are not alone. The fix is simple: wire your remotes correctly and rebase instead of merging.

Here is the clean setup I use:

1. Fork the class repo on GitHub.
2. Clone your fork locally. Git names it `origin` by default.
3. Add the professor’s repo as `upstream`:  
   `git remote add upstream https://github.com/professor/class-repo.git`
4. Keep `origin` pointing to your fork:  
   `git remote -v` should show `origin` (your fork) and `upstream` (professor).
5. When the professor ships new commits, pull them with rebase:  
   ```
   git fetch upstream
   git rebase upstream/main
   ```
6. Resolve any small conflicts if they appear, then push your updated history to your fork:  
   `git push --force-with-lease origin main`

Why rebase instead of merge?

- Merge stacks a new merge commit that mixes your work and the professor’s work. That can tangle history and create conflicts in files you never touched.
- Rebase lifts your commits and places them on top of the professor’s latest commits. Your changes apply as if you started from their newest state, so you see conflicts only where both sides actually touched the same lines.

Mental model

```
Before rebase:
professor: A --- B
you:       A --- B --- c --- d

After `git fetch upstream` + `git rebase upstream/main`:
professor: A --- B --- C --- D
you:                   c' --- d'
```

`c'` and `d'` are your commits replayed on top of the fresh base. That is why conflicts drop.

What I check before coding

- Remotes: `git remote -v` shows origin (mine) and upstream (professor).
- Branch: I am on `main` or a feature branch from `main`.
- Clean state: `git status` is clean before I pull.

Weekly habit

- Fetch and rebase from upstream before starting new work.
- Push with `--force-with-lease` only after a rebase, to update your fork safely.

Do this, and the next time the professor pushes a surprise update, your fork stays calm instead of exploding with conflicts.
