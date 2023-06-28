import siteData from "../data/siteData.json";

// note import.meta.env.SITE is how you import data from astro.config.mjs in this case we are getting the site url

export default function jsonLDGenerator() {
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
      "url": "${import.meta.env.SITE}"
      }
    </script>`;
}
