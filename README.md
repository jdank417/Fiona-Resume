# Fiona's Teaching Portfolio

Static e-portfolio site (plain HTML/CSS/JS, no build step), deployed to GitHub Pages from the root of `main` (Settings → Pages → Deploy from branch).

Organized to match the SJNY student teaching portfolio outline:

- **I. Background Information**: résumé, educational philosophy, classroom management philosophy, about me
- **II. Teaching Artifacts & Reflections**: lesson plans, resources, lesson photos & anchor charts, student work samples, cooperating teacher commentary, observation highlights
- **III. Professional Information**: activities, awards, letter of recommendation

Content lives in `index.html`; photos in `assets/img/`; PDFs (résumé, philosophies, lesson plans, letter) in `assets/docs/`. Student name tags in classroom photos are blurred.

## Local preview

```
python3 -m http.server 8000
```
then open http://localhost:8000.
