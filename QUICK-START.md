# Quick Start Guide - Adding Your First Milestone

This guide will walk you through adding your first timeline milestone in 5 minutes.

## Step 1: Open the Content File

Open `content/milestones.mdx` in any text editor (VS Code, Sublime, or even Notepad).

You'll see something like this:

```yaml
---
milestones:
  - id: "example-1"
    date: "January 2024"
    sortDate: "2024-01-15"
    title: "Example Milestone"
    description: "<p>This is a placeholder...</p>"
    tags:
      - "Example"
---
```

## Step 2: Copy the Template

Copy this template and paste it at the **TOP** of the `milestones:` array (right after the line that says `milestones:`):

```yaml
  - id: ""
    date: ""
    sortDate: ""
    title: ""
    description: "<p></p>"
    tags:
      - ""
```

**Important:** Make sure the indentation matches (2 spaces before the `-`)

## Step 3: Fill In Your Details

Let's say you want to add "Started working at Google in January 2024":

```yaml
  - id: "google-2024"
    date: "January 2024"
    sortDate: "2024-01-15"
    title: "Started at Google"
    description: "<p>Joined the Google Cloud team as a Senior Software Engineer working on infrastructure.</p>"
    tags:
      - "Career"
      - "Engineering"
```

### Field Explanations:

- **id**: Unique identifier (lowercase, use dashes)
- **date**: How it appears on the timeline ("January 2024")
- **sortDate**: For sorting (YYYY-MM-DD format)
- **title**: The headline
- **description**: HTML content (use `<p>` for paragraphs)
- **tags**: Categories (optional)

## Step 4: Save and View

1. Save the file
2. If dev server is running (`npm run dev`), refresh http://localhost:3000
3. Your milestone should appear at the top of the timeline!

## Adding an Image

Put your image in `public/images/` folder, then add to your milestone:

```yaml
  - id: "google-2024"
    date: "January 2024"
    sortDate: "2024-01-15"
    title: "Started at Google"
    description: "<p>Joined the Google Cloud team...</p>"
    tags:
      - "Career"
    media:
      - type: "image"
        src: "/images/google-office.jpg"
        alt: "Google office"
        caption: "First day at the office!"
```

## Adding an X Post

Just add the X URL:

```yaml
  - id: "google-2024"
    date: "January 2024"
    sortDate: "2024-01-15"
    title: "Started at Google"
    description: "<p>Joined the Google Cloud team...</p>"
    tags:
      - "Career"
    media:
      - type: "embed"
        platform: "x"
        url: "https://x.com/yourhandle/status/1234567890"
```

## Adding Multiple Items

Just add more to the `media` array:

```yaml
    media:
      - type: "image"
        src: "/images/google-office.jpg"
        alt: "Google office"
      - type: "embed"
        platform: "x"
        url: "https://x.com/yourhandle/status/123"
```

## Full Example

Here's a complete milestone with everything:

```yaml
  - id: "google-2024"
    date: "January 2024"
    sortDate: "2024-01-15"
    title: "Started at Google"
    description: "<p>Joined Google Cloud as a Senior Software Engineer.</p><p>Working on Kubernetes infrastructure and scaling systems to handle millions of requests.</p>"
    tags:
      - "Career"
      - "Engineering"
      - "Cloud"
    media:
      - type: "image"
        src: "/images/google-badge.jpg"
        alt: "Google employee badge"
        caption: "Official Google employee!"
      - type: "embed"
        platform: "x"
        url: "https://x.com/yourhandle/status/1234567890"
```

## Troubleshooting

### Milestone doesn't appear?

1. Check indentation (use exactly 2 spaces)
2. Make sure all quotes match (`"` at start and end)
3. Check terminal for error messages
4. Verify file saved properly

### Image doesn't load?

1. Make sure image is in `public/images/` folder
2. Check file name matches exactly (case-sensitive)
3. Path should start with `/images/`

### Embed doesn't show?

1. Verify URL is correct
2. Check post is public
3. Wait a few seconds for embed to load

## Next Steps

- Read `README.md` section "How to Add a New Milestone" for more options
- Check `EMBED-COMPONENTS.md` for YouTube, Instagram embeds
- See `IMAGE-COMPONENTS.md` for advanced image options
- Review `VIDEO-COMPONENTS.md` for video uploads

**You're all set!** Add as many milestones as you want following this pattern.
