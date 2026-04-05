# Wayfarers Alumni Website

A static website for the Wayfarers Hiking Society Alumni, built with Astro and deployed to GitHub Pages.

**Live Site:** https://wayfarersalumni.org.uk

## 🚀 Project Structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── CNAME                   # Custom domain config
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── BaseLayout.astro
│   │   └── sections/
│   │       ├── Header.astro
│   │       └── Footer.astro
│   ├── content/
│   │   ├── config.ts           # Content collection schemas
│   │   ├── alumni/             # Alumni profiles (markdown)
│   │   ├── events/             # Event announcements
│   │   ├── news/               # News articles
│   │   └── trips/              # Trip reports
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── donate.astro
│   │   ├── alumni/
│   │   ├── events/
│   │   ├── news/
│   │   └── trips/
│   └── styles/
├── astro.config.mjs
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npm run astro check
```

## 📝 Adding Content

### Alumni Profiles

Create a new file in `src/content/alumni/` with the extension `.md`:

```markdown
---
name: Jane Doe
graduationYear: 2019
bio: Your bio here
currentRole: Mountain Leader
company: Company Name
location: City, Country
email: email@example.com
linkedin: https://linkedin.com/in/example
featured: true
---

Additional markdown content here.
```

### News Articles

Create a new file in `src/content/news/` with frontmatter:

```markdown
---
title: "Article Title"
description: "Brief description"
pubDate: 2026-04-01
author: Author Name
image: https://example.com/image.jpg
tags: ["tag1", "tag2"]
draft: false
---

Article content in markdown...
```

### Events

Create in `src/content/events/`:

```markdown
---
title: "Event Title"
description: "Event description"
eventDate: 2026-06-14
location: "Venue Name"
registrationUrl: https://forms.gle/example
---

Event details...
```

### Trip Reports

Create in `src/content/trips/`:

```markdown
---
title: "Trip Title"
description: "Brief description"
tripDate: 2026-04-01
location: "Location"
route: "Route name"
distance: "10 miles"
elevation: "500m"
difficulty: "Moderate"
conditions: "Weather conditions"
photos:
  - https://example.com/photo1.jpg
---

Trip report content...
```

## 🌐 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

## 🔧 Custom Domain

The custom domain `wayfarersalumni.org.uk` is configured in:
- `public/CNAME` file
- GitHub repository Settings → Pages

## 📧 Contact

For questions or to add your alumni profile, contact: wayfarersalumni@gmail.com
