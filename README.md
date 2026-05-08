# National Ambulance Service Website

Professional 24/7 ambulance service website for Kareem (കരീം).

## Features
- **Modern Design**: Professional and mobile-friendly interface.
- **SEO Optimized**: Meta tags for better search ranking.
- **Advanced Facilities**: Highlights freezer and oxygen support.
- **One-Click Call**: Direct call buttons for mobile users.
- **WhatsApp Integration**: Floating message button.

## How to Deploy to GitHub Pages

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

1.  **Push to GitHub**: Upload this code to a new repository on GitHub.
2.  **Enable Actions**: Go to **Settings > Actions > General** and ensure "Read and write permissions" are enabled for the `GITHUB_TOKEN`.
3.  **Configure Pages**: Go to **Settings > Pages**. Under "Build and deployment", set the source to **GitHub Actions**.
4.  **Wait for Build**: Check the **Actions** tab to see the deployment progress.

### Troubleshooting GitHub Actions Failure
If the Action fails with a "Permission Denied" or "Write access" error:
1. Go to your repository **Settings > Actions > General**.
2. Scroll down to **Workflow permissions**.
3. Select **Read and write permissions**.
4. Check **Allow GitHub Actions to create and approve pull requests**.
5. Click **Save**.
6. Go to the **Actions** tab, find the failed run, and click **Re-run all jobs**.

**Note on Lockfiles**: If you see a warning about a missing `package-lock.json`, you can ignore it, or run `npm install` locally and commit the generated `package-lock.json` file to your repository.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
