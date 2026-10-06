# Complete GitHub Pages Setup Guide

## Project behavior
This version starts a **fresh random 100-question mock automatically every time the website is fully opened or refreshed**.

- The 100 questions are generated from the 3,000-question bank.
- The mock is balanced: **10 random questions from each of the 10 syllabus sections**.
- The question order is shuffled.
- Opening or refreshing the website replaces the previous unfinished auto-generated attempt with a new random set.
- Click the **DSSSB logo** in the header to open the dashboard without reloading the page.
- From the dashboard you can still use fixed mocks, custom practice, section practice and the question-bank browser.

## Files that must stay together
Upload the extracted project files, not only the ZIP. `index.html` must be in the repository root.

Runtime files:
- `index.html`
- `style.css`
- `sample-bank.js`
- `pool.js`
- `engine.js`
- `app.js`
- `sw.js`
- `manifest.webmanifest`
- `favicon.svg`
- `.nojekyll`

Database/reference files:
- `question-bank-3000.json`
- `question-bank-3000.csv`
- `DATA_INTEGRITY.json`
- `README.md`
- `GITHUB_SETUP_COMPLETE.md`

## Method 1 — GitHub website upload (easiest)

### A. Create the repository
1. Sign in to GitHub.
2. Click the **+** button at the top-right and choose **New repository**.
3. Repository name example: `dsssb-jsa-lie-detection`.
4. Choose **Public** if you are using GitHub Free and want GitHub Pages without plan complications.
5. You may leave README initialization off because this package already contains a README.
6. Click **Create repository**.

### B. Extract the ZIP on your computer
1. Download the project ZIP.
2. Right-click it in Windows and choose **Extract All**.
3. Open the extracted folder.
4. Confirm that you can directly see `index.html`, `app.js`, `sample-bank.js`, etc.

Important: do not upload a folder that contains another folder before `index.html`. For Pages-from-root, `index.html` must appear at the top level of the repository.

### C. Upload the project
1. Open the new repository on GitHub.
2. Click **Add file → Upload files**.
3. Drag all extracted files into the upload area.
4. Wait until every file finishes uploading.
5. Enter a commit message such as `Add DSSSB JSA Lie Detection mock test app`.
6. Commit the files to the `main` branch.

This project is small enough for the GitHub web uploader: GitHub currently allows up to 100 files in one browser upload and up to 25 MiB per file. The largest files in this package are well below that per-file limit.

## Enable GitHub Pages
1. In the repository, open **Settings**.
2. In the left sidebar, open **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Under **Branch**, choose `main`.
5. For the folder, choose `/(root)`.
6. Click **Save**.
7. Wait for GitHub Pages deployment to finish.
8. Return to **Settings → Pages**. GitHub will show the published site address.

For a normal project repository, the address is usually:

`https://YOUR-GITHUB-USERNAME.github.io/dsssb-jsa-lie-detection/`

If the repository itself is named exactly `YOUR-GITHUB-USERNAME.github.io`, the address is normally:

`https://YOUR-GITHUB-USERNAME.github.io/`

## Verify that random generation works
1. Open the live GitHub Pages URL.
2. The site should immediately open Question 1 of a newly generated 100-question mock.
3. Note the first few question IDs/topics.
4. Refresh the page.
5. A new random balanced set should be generated.
6. Click the DSSSB logo to open the dashboard.

Because generation is random, an occasional repeated question between two attempts is possible, but the full 100-question selection is freshly generated each time.

## Updating the website later
When I give you an updated project:
1. Extract the new ZIP.
2. Open your GitHub repository.
3. Replace the changed files, especially `app.js`, `sample-bank.js`, `pool.js`, `engine.js`, `style.css`, `index.html` and `sw.js`.
4. Commit the changes to `main`.
5. GitHub Pages automatically redeploys from the configured source branch.

The service-worker cache name in this version has been changed to `dsssb-lie-v4-auto-random`, which helps existing users receive the updated JavaScript instead of remaining on the older cached version.

## If the old version still appears
1. Wait a few minutes for the GitHub Pages deployment to complete.
2. Open the site in a private/incognito window.
3. Or hard-refresh with `Ctrl + F5` on Windows.
4. If necessary, clear site data/cache for your GitHub Pages domain and reopen it.
5. Confirm that the repository contains the new `sw.js` with the v4 cache name.

## If you get a 404 error
Check all of the following:
- GitHub Pages source is `main` and `/(root)`.
- `index.html` is at the repository root.
- The URL includes the repository name for a project site.
- The Pages deployment has completed successfully.
- Repository visibility/plan supports the Pages configuration you selected.

## If the page opens but has no questions
Confirm these files are present beside `index.html`:
- `sample-bank.js`
- `pool.js`
- `engine.js`
- `app.js`

Do not rename them unless you also change the `<script>` references in `index.html`.

## Recommended repository structure
```text
dsssb-jsa-lie-detection/
├── .nojekyll
├── index.html
├── style.css
├── app.js
├── engine.js
├── pool.js
├── sample-bank.js
├── sw.js
├── manifest.webmanifest
├── favicon.svg
├── question-bank-3000.json
├── question-bank-3000.csv
├── DATA_INTEGRITY.json
├── README.md
└── GITHUB_SETUP_COMPLETE.md
```

## Optional Git command method
If you prefer Git instead of browser upload:

```bash
git clone https://github.com/YOUR-USERNAME/dsssb-jsa-lie-detection.git
cd dsssb-jsa-lie-detection
# Copy all project files into this folder
git add .
git commit -m "Add DSSSB JSA Lie Detection mock test app"
git push origin main
```

Then enable Pages using **Settings → Pages → Deploy from a branch → main → /(root)**.


## Updating an existing v4 GitHub site to bilingual v5

Upload/replace all files from the v5 package, especially:
`index.html`, `app.js`, `pool.js`, `style.css`, `sw.js`, `sample-bank.js`,
`question-bank-3000.json`, and `question-bank-3000.csv`.

After GitHub Pages redeploys, open the live site and press **Ctrl+F5** once.
You should see the **EN / हिं** language control. Switching language preserves the active test.
