import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container-custom py-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {siteConfig.name}
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              {siteConfig.company}
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
              Email
            </Link>
            <span className="text-gray-600">
              {siteConfig.location}
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
}
