---
title: "SQL Instagram DB Clone"
excerpt: "Building an Instagram-style database to practice SQL CRUD operations and analytics.<br/><img src='/images/sql-instagram.png'>"
collection: projects
date: 2023-07-01
---

**Timeline:** July 2023  
**Focus:** Practicing SQL fundamentals with a simulated Instagram dataset  
**Source:** Inspired by "The Ultimate MySQL Bootcamp" by Colt Steele

To learn the basics of SQL, I followed the full CRUD path from creating tables, loading sample data, and exploring insights. The project produces an Instagram clone schema (`ig_clone_schema.sql`) and a dataset (`instagram_clone_data.sql`) populated with users, posts, hashtags, and likes.

### Questions Answered
- Oldest users: find the five earliest account registrations.
- Ad timing: identify which day of the week attracts the most signups.
- Inactive users: highlight accounts that never posted a photo.
- Top photo: surface the single most-liked image and its owner.
- Posting cadence: calculate how often the average user posts.
- Popular topics: rank the five most-used hashtags.
- Potential bots: detect users who liked every post.

### Deliverables
- `schema and data/ig_clone_schema.sql`: table definitions for users, photos, comments, likes, and tags.
- `schema and data/instagram_clone_data.sql`: synthetic Instagram activity data.
- `solutions.sql`: questions and answers exploring user behavior and content patterns.

### Explore the Repo
[Check out the full project on GitHub](https://github.com/tomtranjr/instagram_db_clone_sql){:target="_blank" rel="noopener"}
