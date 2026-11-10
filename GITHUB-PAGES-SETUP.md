# Publish the portfolio with GitHub Pages

These instructions assume the account is `DianeValencia` and the new repository is named `portfolio`. This package is prepared for that combination. No domain purchase or paid hosting is needed for a public repository on GitHub Free.

## 1. Download and extract

Download `diane-valencia-github-portfolio.zip`. Extract it on your computer. Open the extracted `portfolio` folder.

You should immediately see `index.html`, `style.css`, `app.js`, the documentation, and the `assets` folder. Upload everything INSIDE this folder, keeping its subfolders intact.

Do not upload only the ZIP file. Do not place the entire `portfolio` folder inside another folder in the repository. `index.html` must be at the repository's top level for the settings below.

## 2. Create a new public repository

1. Sign in at https://github.com/ using your `DianeValencia` account.
2. Click the **+** menu near the top right, then **New repository**.
3. Choose your account as owner.
4. Enter **portfolio** as the repository name.
5. Choose **Public**.
6. Leave the options to add a README, .gitignore, and license unchecked; the package already supplies the README.
7. Click **Create repository**.

If `portfolio` already exists, use a different new name rather than overwriting existing work. Change the canonical and `og:url` values in `index.html` to match that name, and use GitHub's displayed Pages URL later.

## 3. Upload the extracted files

1. On an empty repository, select **uploading an existing file**. If files already exist, use **Add file → Upload files**.
2. Drag the contents of the extracted `portfolio` folder into the upload area. Drag `assets` as a folder so `assets/certificates/` is preserved. Do not flatten its contents into the root.
3. Include all three certificate assets, along with every HTML, CSS, JS, SVG, and documentation file.
4. If your computer hides `.nojekyll`, its absence will not prevent this simple website from working. You can add it with **Add file → Create new file**, name it `.nojekyll`, enter a blank line, and commit it.
5. Enter a commit message such as **Add my personal portfolio**.
6. Commit directly to **main**. If the interface offers **Commit changes…**, click it and finish the confirmation dialog.
7. Confirm the repository's top-level file list contains `index.html`. Open `assets/certificates/` and confirm the PDFs and JPG are present.

The three certificate files are each below GitHub's browser-upload file limit. Preserve spelling and capitalization: GitHub Pages paths are case-sensitive.

## 4. Turn on GitHub Pages

1. Open the repository's **Settings** tab.
2. Select **Pages** in the left sidebar, under **Code and automation**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select branch **main**.
5. Select folder **/(root)**.
6. Click **Save**.
7. If available, leave **Enforce HTTPS** enabled. No custom domain is required.

Making the repository public alone does not turn on the website. The Pages setting is required.

## 5. Wait for publication and open the public website

GitHub usually publishes within a few minutes; an initial deployment may take up to about 10 minutes. Refresh **Settings → Pages** and look for **Your site is live at…** / **Visit site**. You can also inspect the Pages deployment under **Actions** or the repository's **Deployments** section.

For this account and repository name, the expected URL is:

https://dianevalencia.github.io/portfolio/

Use the exact live URL GitHub displays after success. That URL is different from the repository address, https://github.com/DianeValencia/portfolio .

Open the live URL in an incognito/private window while signed out. Ask someone else to open it on their phone. A working public GitHub Pages site does not require a GitHub or ChatGPT login.

## 6. Check before submitting

Follow `RESPONSIVE-TESTING.md`. Check mobile menu, project/certificate filters, project dialogs, both PDFs, Facebook/GitHub/LinkedIn/Wokwi/Tinkercad, Circuit Clash, and both ECO GLOW links. An external service can require login or restrict a project independently of your portfolio; make those external projects public in their own service settings if you want anonymous viewers to see them.

Submit the live Pages URL to your instructor. Include the repository URL too if source code is required.

## 7. Publish updates

Edit files locally, upload changed files through **Add file → Upload files**, and commit to `main`. Preserve the same paths when replacing files. GitHub Pages redeploys after the commit. Wait for the deployment to succeed, then hard-refresh the live page.

For a small text edit, you can open the file on GitHub, click the pencil/Edit icon, make the change, and commit it. Change visible project copy in `index.html` and matching dialog copy in `app.js` together.

## Troubleshooting

- **404 at the website URL:** check Settings → Pages is `main` / `/(root)`, confirm deployment succeeded, and check that `index.html` is at the top level with that exact lowercase filename.
- **Website shows a README or file list:** open the `github.io` Pages URL, not the `github.com` repository URL. Also confirm `index.html` is in the selected publishing folder.
- **No styling or pictures:** confirm `style.css`, `app.js`, and `assets/` were uploaded at their original relative paths. Avoid links beginning with `/assets/` in this project site; use `assets/…`.
- **Certificate is missing:** check both PDFs exist in `assets/certificates/` with the exact supplied filenames.
- **Changes do not appear:** wait for the latest Pages deployment, then hard-refresh or use an incognito window.
- **External simulation is unavailable:** check that project's own sharing settings on Wokwi or Tinkercad. Your portfolio cannot change permissions on another service.

Official reference: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
