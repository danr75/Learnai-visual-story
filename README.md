# AI at Work — A Beginner's Visual Story

A polished, single-page interactive training app for a **40-minute beginner AI
session**. It uses scroll-based storytelling, glowing flow diagrams, light 3D
effects, placeholder images and embedded YouTube placeholders to explain — in
plain English — how AI works and how it will change work.

Designed for **public sector and business audiences** with little or no AI
knowledge, and suitable for showing on a laptop/projector to senior
stakeholders.

---

## What it teaches

By the end, the audience understands that:

- AI is already used in everyday services.
- Different AI types work in different ways.
- AI uses **data → model → prediction → outcome → feedback**.
- AI will change worker tasks, customer interactions and partner engagement.
- Human judgement, business knowledge and oversight remain essential.

---

## Sections (vertical scroll)

1. **Hero** — “AI is already changing how work gets done”
2. **Everyday AI** — Netflix, spam filtering, maps, fraud detection
3. **What makes it AI** — the animated data → model → prediction → outcome → feedback loop
4. **Prediction AI** — email spam example
5. **Recommendation AI** — Netflix-style example
6. **Computer vision** — image input → object detection → decision support
7. **Natural language processing** — text → intent → classification → summary
8. **Generative AI** — prompt → model → text/image/code
9. **AI agents** — goal → planning → tool use → action → human approval
10. **Why oversight matters** — privacy, bias, accuracy, safety, security, accountability
11. **How work changes** — manual tasks → supervising, checking, improving
12. **New roles** — AI product owner, assurance lead, data steward, automation analyst, prompt/workflow designer
13. **Closing + discussion** — three questions to talk through as a group

Every section includes a plain-English heading, a short (<40 word) explanation,
a visual/animation, a real-world example, and a **“Human role”** callout.

---

## File structure

```
Learnai-visual-story/
├── index.html     # All content & section markup
├── styles.css     # Theme, layout, animations (edit :root to re-theme)
├── script.js      # Scroll progress, dot nav, reveal-on-scroll, 3D tilt
└── README.md      # This file
```

That's it — no build step, no frameworks, no dependencies.

---

## Run it locally

**Option A — just open the file**

Double-click `index.html`, or open it in your browser. Everything works
except the YouTube embeds may need a local server (see Option B).

**Option B — run a tiny local server (recommended)**

From the project folder:

```bash
# Python 3 (built in on Mac/Linux)
python3 -m http.server 8000
```

Then visit **http://localhost:8000** in your browser.

Other options if you prefer:

```bash
npx serve          # Node.js
php -S localhost:8000   # PHP
```

---

## How to customise

Look for `REPLACE` / `placeholder` comments in `index.html`.

| What | Where | How |
|------|-------|-----|
| **YouTube video** | Section 2 (`#everyday`) | Replace `VIDEO_ID_HERE` in the `iframe` `src` with your video's ID, e.g. `dQw4w9WgXcQ`. Copy the whole `.video-embed` block into any other section to add more videos. |
| **Computer-vision image** | Section 6 (`#vision`) | Swap the `background-image` URL in `.vision-frame__img` for your own photo. |
| **Recommendation thumbnails** | Section 5 (`#recommendation`) | Replace the `.rec-tile` `<div>`s with `<img>` tags, or change the `--c` colour. |
| **Colours / theme** | `styles.css` → `:root` | Change `--cyan`, `--violet`, etc. to re-skin the whole app. |
| **Text** | `index.html` | All copy is plain HTML — edit directly. |

Placeholder images currently use [picsum.photos](https://picsum.photos), which
needs internet access. Swap them for local images for fully offline use.

---

## Accessibility & display notes

- High-contrast text on a dark theme; large headings scale with screen size.
- Respects the OS **“reduce motion”** setting (animations are disabled).
- Responsive: 4-column grids collapse to 2 then 1; flow diagrams stack
  vertically on tablets/phones.
- Tested layout target: laptop + projector (1280×720 and up).

---

## Presenting tip

Use the **dots on the right** (or scroll) to jump between sections. The
**progress bar** at the top shows how far through the story you are. The final
section is a built-in **discussion slide** with three prompts to open the room:

1. What work could AI support in your area?
2. What must humans still own?
3. What risks need oversight?
