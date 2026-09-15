const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://maher-ben-aicha.vercel.app";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maher Ben Aicha",
    url: BASE_URL,
    image: `${BASE_URL}/og-image.png`,
    jobTitle: "Software Engineering Student",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Ecole Nationale d'Ingenieurs de Tunis (ENIT)",
      url: "https://www.enit.utm.tn",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tunis",
      addressCountry: "TN",
    },
    email: "maher.benaicha@etudiant-enit.utm.tn",
    sameAs: [
      "https://github.com/maherbenaicha",
      "https://www.linkedin.com/in/maher-ben-aicha",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Deep Learning",
      "Full-Stack Development",
      "React",
      "Node.js",
      "Python",
      "LLM Fine-Tuning",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Maher Ben Aicha — Portfolio",
    url: BASE_URL,
    description:
      "Portfolio of Maher Ben Aicha, final-year software engineering student at ENIT, focused on artificial intelligence, computer vision, and full-stack development.",
    author: {
      "@type": "Person",
      name: "Maher Ben Aicha",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
