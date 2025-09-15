export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://noeliamakeup.com/#business",
        "name": "Noelia Makeup",
        "image": "https://noeliamakeup.com/images/hero/girl1.jpg",
        "description": "Professional makeup artist specializing in bridal, special occasion, and editorial makeup services.",
        "url": "https://noeliamakeup.com",
        "telephone": "+1-XXX-XXX-XXXX",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Your City",
          "addressRegion": "State",
          "postalCode": "XXXXX",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 0.0,
          "longitude": 0.0
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "16:00"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/noeliamakeup",
          "https://www.facebook.com/noeliamakeup",
          "https://www.pinterest.com/noeliamakeup"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Makeup Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bridal Makeup",
                "description": "Complete bridal makeup service including trial session"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Special Occasion Makeup",
                "description": "Professional makeup for events, galas, and special occasions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Editorial Makeup",
                "description": "Creative makeup for photoshoots and editorial work"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Makeup Lessons",
                "description": "Personalized makeup lessons and consultations"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://noeliamakeup.com/#website",
        "url": "https://noeliamakeup.com",
        "name": "Noelia Makeup",
        "description": "Professional Makeup Artist & Beauty Services",
        "publisher": {
          "@id": "https://noeliamakeup.com/#business"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://noeliamakeup.com/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://noeliamakeup.com/#webpage",
        "url": "https://noeliamakeup.com",
        "name": "Noelia Makeup | Professional Makeup Artist & Beauty Services",
        "isPartOf": {
          "@id": "https://noeliamakeup.com/#website"
        },
        "about": {
          "@id": "https://noeliamakeup.com/#business"
        },
        "description": "Award-winning makeup artist specializing in bridal, special occasion, and editorial makeup. Transform your look with personalized beauty services."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://noeliamakeup.com"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://noeliamakeup.com/#person",
        "name": "Noelia",
        "jobTitle": "Professional Makeup Artist",
        "worksFor": {
          "@id": "https://noeliamakeup.com/#business"
        },
        "sameAs": [
          "https://www.instagram.com/noeliamakeup",
          "https://www.facebook.com/noeliamakeup"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}