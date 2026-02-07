# Launch Checklist (Replace Before Going Live)

## Brand + identity

- [ ] Replace site name/short name in `src/content/site.json`
- [ ] Add real logo files in `public/images/branding/` (optional) and connect them in navbar/footer
- [ ] Verify footer copyright text and legal entity name

## Mission + copy

- [ ] Replace hero title/subtitle in `src/content/site.json`
- [ ] Replace all placeholder text in `src/content/home.md`
- [ ] Replace all placeholder text in `src/content/about.md`
- [ ] Replace all placeholder text in `src/content/join.md`
- [ ] Replace all placeholder text in `src/content/contact.md`

## Join + communications

- [ ] Replace `interest_form`, `discord`, and `mailing_list` links in `src/content/site.json`
- [ ] Set primary contact email in `src/content/site.json`
- [ ] Replace social links in `src/content/site.json`
- [ ] Add `formspree_endpoint` in `src/content/site.json` if enabling the contact form

## Team

- [ ] Replace all placeholder board names/roles in `src/content/team.json`
- [ ] Replace all team bios in `src/content/team.json`
- [ ] Replace placeholder headshots in `public/images/team/`
- [ ] Verify each team link points to a real profile or email

## Projects

- [ ] Replace sample projects in `src/content/projects/*.md` with real projects
- [ ] Verify `status`, `featured`, `tags`, and `join_url` frontmatter fields
- [ ] Confirm each project has a valid `repo_url` (or leave empty if private)

## Events

- [ ] Replace placeholder events in `src/content/events.json`
- [ ] Add your Google Calendar embed URL to `calendar_embed_url` (optional)
- [ ] Confirm event dates and links are current

## Sponsors + partners

- [ ] Replace partner names/URLs in `src/content/site.json`
- [ ] Remove `partners` entries entirely if you do not want this section shown

## Deployment

- [ ] Set GitHub Pages to deploy from GitHub Actions
- [ ] Confirm repository name and `base` path behavior in `README.md`
- [ ] Push to `main` and verify first production deployment
