# Fiona's Teaching Portfolio

Static e-portfolio site (plain HTML/CSS/JS, no build step), deployed to GitHub Pages from the root of `main` (Settings → Pages → Deploy from branch).

## Swapping in real content

Real content (résumé, philosophies, lesson plans, cooperating-teacher letter) is in place. Still placeholder:

| What | Where |
|---|---|
| Fun facts, second recommendation letter | `index.html` |
| Professional photo | replace `assets/img/portrait.svg` (or drop in `portrait.jpg` and update the `src`) |
| Anchor chart, bulletin board, and student work photos | `assets/img/*.svg` → swap files and update `src` in the gallery (teaching + Halloween photos are real) |

## Local preview

```
python3 -m http.server 8000
```
then open http://localhost:8000.
