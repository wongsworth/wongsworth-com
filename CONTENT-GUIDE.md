# Content Management Guide

You have **two approaches** for managing your timeline content. Choose the one that fits your workflow best.

## Approach 1: YAML Frontmatter (Current Default - Recommended)

**File:** `content/milestones.mdx`

**How it works:**
- All milestones in one structured YAML file
- Homepage renders via `app/page.tsx` (YAML approach)
- Easiest for quick edits and additions

**Pros:**
- Simple, structured format
- All content in one place
- Easy to add/remove/reorder entries
- No need to know React or MDX

**Example:**
```yaml
---
milestones:
  - id: "milestone-1"
    date: "January 2024"
    sortDate: "2024-01-15"
    title: "My Milestone"
    description: "<p>HTML content here</p>"
    tags: ["Tag1", "Tag2"]
---
```

**To use:** Already active at `/` (homepage)

---

## Approach 2: MDX with React Components

**File:** `content/timeline.mdx`

**How it works:**
- Write markdown with embedded React components
- More flexible and expressive
- Can mix markdown, HTML, and React components

**Pros:**
- Natural content writing
- Mix markdown and components freely
- More powerful for complex content
- Direct control over layout

**Example:**
```mdx
import TimelineItem from '@/components/TimelineItem'

<TimelineItem date="Jan 2024" title="My Milestone" tags={["Career"]}>
  Write **markdown** here with *formatting*!
  
  - Lists work
  - [Links](https://example.com) work
  - Everything markdown can do
</TimelineItem>
```

**To use:** Rename `app/page-mdx.tsx` to `app/page.tsx` (replacing the current file)

---

## Switching Between Approaches

### Currently Active: YAML Approach
- Homepage: `app/page.tsx` (renders `content/milestones.mdx`)

### To Switch to MDX Approach:

1. **Backup current homepage:**
   ```bash
   mv app/page.tsx app/page-yaml.tsx
   ```

2. **Activate MDX homepage:**
   ```bash
   mv app/page-mdx.tsx app/page.tsx
   ```

3. **Edit content:**
   - Edit `content/timeline.mdx` instead of `content/milestones.mdx`

### To Switch Back:
```bash
mv app/page.tsx app/page-mdx.tsx
mv app/page-yaml.tsx app/page.tsx
```

---

## Quick Comparison

| Feature | YAML Approach | MDX Approach |
|---------|---------------|--------------|
| **Ease of use** | ✅ Very easy | Moderate |
| **Learning curve** | ✅ Minimal | Some MDX knowledge needed |
| **Flexibility** | Good | ✅ Excellent |
| **Markdown support** | Via HTML | ✅ Native |
| **React components** | Via media blocks | ✅ Direct import |
| **All in one file** | ✅ Yes | Yes |
| **Best for** | Quick edits, structured data | Rich content, complex layouts |

---

## Files Overview

### YAML Approach Files:
- `content/milestones.mdx` - Your content
- `app/page.tsx` - Homepage (current default)
- `lib/mdx.ts` - Parser for YAML frontmatter

### MDX Approach Files:
- `content/timeline.mdx` - Your content
- `app/page-mdx.tsx` - Alternative homepage
- `mdx-components.tsx` - Available components

### Shared Files:
- `components/Timeline.tsx` - Timeline container
- `components/TimelineItem.tsx` - Individual items (for MDX)
- `components/TimelineEntry.tsx` - Individual items (for YAML)
- `components/embeds/*` - Media embeds (both approaches)

---

## Recommendation

**Start with YAML approach** (current default) if:
- You want simple, structured editing
- You're not familiar with MDX
- You need to quickly add/edit milestones

**Switch to MDX approach** if:
- You want more control over content formatting
- You're comfortable with markdown and React
- You need complex layouts or custom components

**Both are fully implemented and ready to use!**
