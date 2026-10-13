# Jun Zheng’s homepage

A static, responsive academic homepage served by GitHub Pages. Visitors do not need JavaScript. No npm dependencies or hosted services are required.

## Update content

- `data/profile.json`: biography fields, links, work and education history, and the actual content-update date.
- `data/publications.json`: full author lists, publication status, resource links, summaries, and featured order. `selected` controls the section; `order` controls the curated order within Selected Research. Other Publications uses descending year order. Keep first-author virtual try-on work first. `equal` means a verified equal-contribution mark, not inferred authorship.
- `data/news.json`: newest announcements first. The first five are visible; earlier items use a native disclosure.
- `scripts/build.py`: HTML template, introductory prose, and rendering logic.
- `assets/style.css`: desktop and mobile styles.

After editing:

```sh
python3 scripts/build.py
python3 -m http.server 8765 --bind 127.0.0.1
```

Preview at http://127.0.0.1:8765. Commit the generated `index.html` along with the source data. GitHub Pages serves the generated file directly, so deployment needs no custom build workflow. Publishing is a separate step from local preview.

Check desktop and mobile widths, all local assets and anchor links, the earlier-news disclosure, and video playback. Confirm that all papers remain readable with JavaScript disabled.

## Media

Optimized WebP covers and MP4 demonstrations live in `assets/previews/`. Videos use `preload="none"`, native controls, and no autoplay. Original project media remain in `assets/projects/` for reuse. The page does not request the original GIFs.

## Content verification — 14 October 2026

Employment, department, research focus, June 2026 graduation, and removal of ZMO.AI were supplied by the owner. “AI Native Applications” is an English rendering of AI 原生应用. The master’s start date and Alibaba internship end date were not supplied; the page deliberately states only the confirmed graduation date and internship start date.

New publication titles and author order were checked against the latest arXiv abstracts:

- https://arxiv.org/abs/2608.20334 (v2 drops “Swift-Image” from the formal title; it remains in the summary)
- https://arxiv.org/abs/2608.18076
- https://arxiv.org/abs/2608.14546
- https://arxiv.org/abs/2510.22319
- https://arxiv.org/abs/2501.11325

Equal-contribution marks for Capability-Centric Data Design are confirmed in https://arxiv.org/html/2608.18076v2. Swift-Image equal-contribution marks follow the coauthor’s publication list at https://hutaihang.github.io/; the primary PDF was unavailable during this update and should be checked when accessible. Tstars-Tryon follows the original paper’s explicit alphabetical-author note (https://arxiv.org/html/2604.19748v1), not the different contribution marks on the coauthor page. WISA’s author list and paper link follow the final NeurIPS proceedings: https://proceedings.neurips.cc/paper_files/paper/2025/hash/0856bc553d3e3b9827e5140d0ad3bf8d-Abstract-Conference.html (different from the early arXiv author list). CatV2TON’s CVPR 2025 Workshop label is confirmed by its official repository: https://github.com/Zheng-Chong/CatV2TON. Other existing venue and contribution metadata were retained from the previous homepage.

Google Scholar was rate limited during inspection, so these 11 publications are the verified update set, not a claim that the Scholar list has been exhaustively reconciled. No live citation counts are embedded. Unknown acceptance statuses remain Preprint / Technical report.
