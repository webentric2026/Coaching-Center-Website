/**
 * Central institute configuration.
 * Update the values here to re-brand the site.
 */
export const siteConfig = {
  name: "Vidya Academy",
  shortName: "Vidya",
  tagline: "Strong Foundations. Bigger Goals.",
  description:
    "Vidya Academy is a coaching institute in Paschim Puri, Delhi offering focused classroom learning for Classes 6–12, CBSE boards, JEE, NEET and spoken English.",
  locale: "Paschim Puri, Delhi, India",

  contact: {
    phoneDisplay: "+91 98110 12345",
    phoneHref: "tel:+919811012345",
    whatsappDisplay: "+91 98110 12345",
    whatsappHref: "https://wa.me/919811012345?text=Hello%20Vidya%20Academy%2C%20I%20want%20details%20about%20courses.",
    email: "hello@vidyaacademy.example",
    addressLines: [
      "2nd Floor, Community Centre,",
      "Paschim Puri, New Delhi — 110063",
    ],
    addressShort: "Paschim Puri, Delhi, India",
    hours: [
      { days: "Monday – Saturday", time: "8:00 AM – 8:00 PM" },
      { days: "Sunday", time: "9:00 AM – 1:00 PM (Enquiries only)" },
    ],
    // Map centred on Paschim Puri.
    mapEmbedSrc:
      "https://www.google.com/maps?q=Paschim+Puri,+New+Delhi&output=embed",
  },

  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Faculty & Results", href: "/faculty-results" },
    { label: "Contact", href: "/contact" },
  ],

  images: {
    heroMain:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=70",
    heroSecondary:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=70",
    classroomLarge:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=70",
    aboutBuilding:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=70",
    studyGroup:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=70",
    teacherBoard:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=70",
    resultsSide:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=70",
  },
} as const;

export type SiteConfig = typeof siteConfig;
