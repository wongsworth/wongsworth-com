export const siteConfig = {
  name: "Benjamin Wong",
  company: "Wongsworth Media Group Inc.",
  title: "Wongsworth | Professional Timeline",
  description: "Professional timeline showcasing career milestones and achievements. A reverse-chronological journey through my professional experience.",
  location: "Toronto, Canada",
  social: {
    linkedin: "https://linkedin.com/in/wongbm", // Update with your LinkedIn
    x: "https://x.com/Wongsworth", // Update with your X handle
    xHandle: "@Wongsworth", // Update with your X handle (with @)
    email: "ben@wongsworth.com", // Update with your email
  },
  url: "https://wongsworth.com",
  ogImage: "/og-image.png",
  keywords: [
    "professional timeline",
    "career milestones",
    "portfolio",
    "achievements",
    "Toronto",
    "professional experience",
  ],
  author: {
    name: "Benjamin Wong",
    url: "https://wongsworth.com",
  },
  creator: "Wongsworth",
  publisher: "Wongsworth",
  language: "en-US",
  locale: "en_US",
} as const;

export type SiteConfig = typeof siteConfig;
