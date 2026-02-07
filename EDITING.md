# Editing Guide

This project is intentionally content-first: update files in `src/content` to change site content.

## 1) Mission, CTAs, links

Edit `src/content/site.json`:

- Mission-facing hero text:
  - `hero.title`
  - `hero.subtitle`
- Hero buttons:
  - `hero.primary_cta`
  - `hero.secondary_cta`
- Navbar links:
  - `navigation`
- Join CTAs used on `/join`:
  - `join_links.interest_form`
  - `join_links.discord`
  - `join_links.mailing_list`
- Footer and socials:
  - `contact.socials`
  - `footer.copyright`
  - `footer.address`
- Optional sponsors/partners section:
  - `partners` (remove or empty this array to hide section)

## 2) Edit page copy

- Home: `src/content/home.md`
  - Update intro body text
  - Update `what_we_do_cards` in frontmatter
- About: `src/content/about.md`
- Join: `src/content/join.md`
- Contact: `src/content/contact.md`

## 3) Add a project (new markdown file)

Create a new file under `src/content/projects/` like `your-project-slug.md`.

Required frontmatter format:

```md
---
title: "Your Project Name"
status: "current"
featured: true
tags: ["EEG", "BCI", "ML"]
repo_url: "https://github.com/your-org/your-repo"
lead_names: ["Person A", "Person B"]
join_url: "https://forms.gle/your-link"
summary: "Short card summary."
---
## Overview
...
## Goals
...
## What you'll learn
...
## Getting involved
...
## Links
...
```

Notes:

- `status` must be `current` or `past`
- `featured: true` makes it appear on the homepage featured section
- File name becomes route slug: `src/content/projects/my-project.md` -> `/projects/my-project`

## 4) Add or edit team members

Edit `src/content/team.json`.

Each member object supports:

- `name`
- `role`
- `bio`
- `headshot` (optional, path in `public/`)
- `links` (optional array of `{ label, href }`)

## 5) Calendar embed + events list

Edit `src/content/events.json`:

- Live Google Calendar embed:
  - Set `calendar_embed_url` to your Google Calendar embed URL.
  - Optional helper text: `calendar_note`
- Manual event list:
  - Edit `events` array entries (`title`, `date`, `time`, `location`, `description`, optional `url`)

Behavior:

- If `calendar_embed_url` is set, pages show embedded calendar.
- If not set, pages render event cards from `events`.

## 6) Contact form with Formspree

Edit `src/content/site.json`:

- Set `contact.formspree_endpoint` to your Formspree URL (example: `https://formspree.io/f/xxxxabcd`)

Behavior:

- If endpoint is set: `/contact` shows live POST form.
- If empty: `/contact` shows email fallback using `contact.email`.

## 7) Add images/headshots

Use this convention:

- Team headshots: `public/images/team/<first-last>.jpg` (or `.png`/`.webp`)
- Update `headshot` in `src/content/team.json` to match, e.g. `/images/team/jane-doe.jpg`

Current placeholder files live in:

- `public/images/team/`

## 8) Before launch

Use checklist:

- `src/content/TODO.md`
