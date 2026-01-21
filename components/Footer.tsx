import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-20">
      <div className="container-custom py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-semibold">{siteConfig.name}</p>
            <p className="text-sm text-gray-600 mt-1">
              {siteConfig.company}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {siteConfig.location}
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
            <Link 
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </Link>
            <Link 
              href={siteConfig.social.x}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              X
            </Link>
            <Link 
              href={`mailto:${siteConfig.social.email}`}
              className="hover:opacity-70 transition-opacity"
            >
              {siteConfig.social.email}
            </Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} {siteConfig.company} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
