# DSSSB JSA (Lie-Detection) Mock Test Web App — Auto Random v4

Static GitHub Pages app for **Junior Scientific Assistant (Lie-Detection), FSL, Post Code 24/26** subject practice.

## Auto-random behavior
Every full website load or refresh automatically creates a **new balanced 100-question random mock**:
- 10 random questions from each of the 10 syllabus sections
- 100 questions total
- shuffled order
- 60-minute timer
- +1 correct, -0.25 wrong

The DSSSB logo opens the dashboard without reloading, where fixed mocks, custom tests, section practice and the full revision bank remain available.

## Included
- 3,000 bilingual MCQs — 300 per syllabus section
- 30 fixed 100-question mocks
- Automatic fresh random mock on website open/refresh
- Random balanced mock generator
- Section / difficulty custom practice
- Question palette and mark-for-review
- Result analytics by syllabus section
- Answer review with explanations
- Full question-bank search and filters
- Browser print / Save-as-PDF result
- No framework, backend, API key or database server

## GitHub Pages publishing
See `GITHUB_SETUP_COMPLETE.md` for the complete step-by-step guide.

Quick version:
1. Extract the ZIP.
2. Upload all files to the repository root so `index.html` is at the top level.
3. Commit to `main`.
4. Open Settings → Pages.
5. Source: Deploy from a branch.
6. Branch: `main`; folder: `/(root)`.
7. Save and wait for deployment.

## Main runtime files
- `index.html` — shell
- `style.css` — responsive design
- `sample-bank.js` — complete in-browser 3,000-question data
- `pool.js` — filtering and random/balanced mock generation
- `engine.js` — timer, answers, scoring and local state
- `app.js` — test/results/review/dashboard UI and auto-random startup
- `sw.js` — offline cache; cache version bumped for v4

## Scope
This is the **Section-B / Subject Concerned** Lie-Detection practice bank based on the uploaded 10-heading syllabus. It does not include the common DSSSB Section-A subjects.


## English / Hindi bilingual mode (v5)

Every one of the 3,000 questions now contains:
- `question` and `question_hi`
- `options` and `options_hi`
- `explanation` and `explanation_hi`
- English/Hindi section and topic labels

Use the **EN / हिं** toggle while taking a test, reviewing answers, or browsing the question bank.
Changing language does **not** reset the test, timer, selected answer, marked-for-review state, or question number.

Standard technical abbreviations, eponyms and widely used psychology/forensic terms may be retained in English where this improves exam recognition.
