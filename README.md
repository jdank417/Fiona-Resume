# Fiona's Teaching Portfolio

Static multi-page e-portfolio (plain HTML/CSS/JS, no build step), deployed to GitHub Pages from the root of `main`.

Pages follow the SJNY student teaching portfolio outline and are linked from the hamburger menu on every page, plus Previous / Next buttons:

| Page | Section |
|---|---|
| `index.html` | Home: intro, portfolio map, contact |
| `resume.html`, `philosophy.html`, `classroom-management.html`, `about.html` | I. Background Information |
| `lessons.html`, `classroom.html`, `student-work.html`, `reflections.html` | II. Teaching Artifacts & Reflections |
| `professional.html` | III. Professional Information |

The header/menu is repeated in each page; if you add or rename a page, update the menu in every file. Photos are in `assets/img/`; PDFs (résumé, philosophies, lesson plans, letter) in `assets/docs/`. Student names in photos are blurred.

## Local preview

```
python3 -m http.server 8000
```
then open http://localhost:8000.
