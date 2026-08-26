# Résumé file

Place the résumé PDF at:

```
public/resume/Parva_Barot_Software_Resume.pdf
```

The filename must match `resumePath` / `resumeFileName` in
`src/data/portfolio.ts`. Once the file exists at this path, the `/resume`
page and the hero's download action enable themselves automatically — no
code changes are required.

Until the file is added, the site intentionally shows an honest
"Résumé file not configured" state instead of a broken download link.
