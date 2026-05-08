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
If the Action fails with a "Permission Denied" error:
1. Go to your repository **Settings > Actions > General**.
2. Scroll to **Workflow permissions**.
3. Select **Read and write permissions**.
4. Click **Save**.
5. Go to the **Actions** tab and re-run the failed job.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
