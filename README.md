# Fiona's Teaching Portfolio

Static e-portfolio site (plain HTML/CSS/JS, no build step), deployed to GitHub Pages on every push to `main`.

## Swapping in real content

Everything marked as a placeholder is fake. To replace it:

| What | Where |
|---|---|
| Name, bio, philosophy, résumé, quotes, awards | `index.html` (search for "Rivers", "Placeholder", "Example", "Sample") |
| Professional photo | replace `assets/img/portrait.svg` (or drop in `portrait.jpg` and update the `src`) |
| Lesson / anchor chart / bulletin board / student work photos | `assets/img/*.svg` → swap files and update `src` in the gallery |
| Résumé PDF, lesson plans, recommendation letters | `assets/docs/*.pdf` (keep the same filenames) |
| Email / LinkedIn | contact section at the bottom of `index.html` |

## Local preview

```
python3 -m http.server 8000
```
then open http://localhost:8000.
