// lib/projectsData.js

export const projects = [
  {
    slug: "bvfrancis",
    title: "B.V. Francis & Associates",
    tagline: "Crafting a Trusted Online Presence for a Modern Law Firm",
    category: "Legal Services Website",
    industry: "Legal Services",
    role: "Lead Developer & Designer",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    challenge:
      "B.V. Francis & Associates, a reputable law firm, needed a professional and credible online presence to attract modern clients and clearly communicate their areas of expertise. Their existing site was outdated, not mobile-friendly, and didn't reflect the firm's contemporary approach.",
    approach:
      "My approach was to design and develop a clean, sophisticated, and highly performant static website. I focused on intuitive navigation, clear content presentation, and a design that instills trust and professionalism. User experience was paramount, ensuring accessibility across all devices. We went through a collaborative process of wireframing, design mockups, and iterative development.",
    solution:
      "The new website, built with Next.js for speed and SEO benefits, and styled with Tailwind CSS for a modern look, clearly outlines the firm’s practice areas, showcases attorney profiles, and provides easy-to-find contact information. Subtle animations using Framer Motion were added to enhance user engagement without compromising professionalism. The site is fully responsive and optimized for fast loading times.",
    results:
      "The revamped website led to a 25% increase in client consultation requests within the first three months. The firm also reported positive feedback on the site's professionalism and ease of use, significantly enhancing their brand image.",
    heroImage: "/images/projects/bvfrancis/bvfrancis-hero.png", // Already .png
    processImages: [
      "/images/projects/bvfrancis/bvfrancis-process-1.png", // Changed to .png
      "/images/projects/bvfrancis/bvfrancis-process-2.png", // Changed to .png
    ],
    galleryImages: [
      "/images/projects/bvfrancis/bvfrancis-gallery-1.png", // Changed to .png
      "/images/projects/bvfrancis/bvfrancis-gallery-2.png", // Changed to .png
      "/images/projects/bvfrancis/bvfrancis-gallery-3.png", // Changed to .png
    ],
    liveSiteUrl: "https://bvfrancis.example.com", // ADDED
  },
  {
    slug: "flygate",
    title: "Flygate Travel",
    tagline: "Informative Platform for Visa & Travel Services",
    category: "Travel Services Portal",
    industry: "Travel & Tourism",
    role: "Front-End Developer",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Contentful (Headless CMS)",
    ],
    challenge:
      "Flygate Travel required an engaging and highly informative website to guide users through complex visa application processes and showcase various travel packages. The key was to present large amounts of information in an easily digestible and visually appealing manner.",
    approach:
      "As the Front-End Developer, I focused on creating a user-centric interface with clear information architecture. I collaborated with the backend team to integrate a headless CMS (Contentful) for easy content updates by Flygate staff. The design emphasized clarity, intuitive navigation, and a welcoming aesthetic to encourage user exploration. Framer Motion was used for subtle interactive elements.",
    solution:
      "The resulting platform features detailed country-specific visa guides, an easily searchable database of travel services, and inspiring destination pages. The Next.js front-end ensures fast page loads and smooth transitions, while Tailwind CSS allowed for rapid UI development and a consistent design language. Interactive elements like animated accordions for FAQs and smooth page transitions enhance the user experience.",
    results:
      "The new Flygate Travel website saw a 40% increase in user engagement (time on site, pages per visit) and a 15% rise in inquiries for visa consultation services. Client feedback highlighted the site's ease of navigation and the clarity of information provided.",
    heroImage: "/images/projects/flygate/flygate-hero.png", // Already .png
    processImages: [
      "/images/projects/flygate/flygate-process-1.png", // Changed to .png
      "/images/projects/flygate/flygate-process-2.png", // Changed to .png
    ],
    galleryImages: [
      "/images/projects/flygate/flygate-gallery-1.png", // Changed to .png
      "/images/projects/flygate/flygate-gallery-2.png", // Changed to .png
    ],
    liveSiteUrl: "https://flygatetravel.example.com", // ADDED
  },
  {
    slug: "mekoddishkem",
    title: "Mekoddishkem Travel",
    tagline: "User-Friendly Visa & Travel Support Site",
    category: "Travel Support Website",
    industry: "Travel & Tourism",
    role: "Developer",
    tech: ["Next.js", "Tailwind CSS", "Markdown"],
    challenge:
      "Mekoddishkem Travel aimed to demystify international travel requirements and visa processes for their clientele. They needed a straightforward, fast, and highly accessible website that users could rely on for accurate information without feeling overwhelmed.",
    approach:
      "My approach as the Developer was to build an ultra-fast, content-focused static site. Simplicity and speed were the primary goals. I utilized Next.js for its static site generation capabilities and Tailwind CSS for efficient, clean styling. Content was structured using Markdown for ease of management and updating by the Mekoddishkem team.",
    solution:
      "The website provides clear, step-by-step guides for visa applications for various countries, essential travel tips, and downloadable checklists. The design is minimal and focused on readability, ensuring information is easy to find and understand. The absence of complex animations (no Framer Motion in tech stack) contributes to its lightning-fast performance, particularly on mobile devices and slower internet connections.",
    results:
      "Post-launch, Mekoddishkem Travel reported a significant reduction in repetitive email inquiries regarding basic visa information, as users were ableto find answers quickly on the site. User feedback consistently praised the website's speed and user-friendliness.",
    heroImage: "/images/projects/mekoddishkem/mekoddishkem-hero.png", // Changed to .png
    processImages: [
      "/images/projects/mekoddishkem/mekoddishkem-process-1.png", // Changed to .png
      "/images/projects/mekoddishkem/mekoddishkem-process-2.png", // Changed to .png
    ],
    galleryImages: ["/images/projects/mekoddishkem/mekoddishkem-gallery-1.png"], // Changed to .png
    liveSiteUrl: "https://mekoddishkemtravel.example.com", // ADDED
  },
  {
    slug: "nipto-express", // CHANGED
    title: "Nitpo Express Logistics", // CHANGED
    tagline: "Efficient Website for Transport Logistics Services",
    category: "Logistics & Transport Website",
    industry: "Transport & Logistics",
    role: "Full-Stack Developer (Static Focus)",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Serverless Functions (for contact form)",
    ],
    challenge:
      "Nitpo Express Logistics needed a professional website to showcase their comprehensive range of transport and logistics services, build credibility with potential B2B clients, and generate leads for their sales team. Their existing online footprint was minimal.",
    approach:
      "As a Full-Stack Developer with a static-first approach for this project, I focused on building a secure, fast, and scalable platform. The core site was built using Next.js and Tailwind CSS. For lead generation, a simple contact form was integrated using serverless functions for backend processing, keeping the primary site static and secure. Framer Motion was used for subtle animations to highlight key service areas.",
    solution:
      "The website effectively details Nitpo's services, fleet capabilities, and service areas. It features a clean, professional design that reflects the company's efficiency and reliability. Key sections include service pages, a company profile, and a clear call-to-action contact page with the integrated form. Animated counters for 'Packages Delivered' or 'Happy Clients' were added for visual appeal.",
    results:
      "The new Nitpo Express Logistics website resulted in a 30% increase in qualified B2B leads within six months. The site's professional appearance also helped Nitpo secure two major contracts by enhancing their perceived market presence and reliability.",
    heroImage: "/images/projects/nipto/nipto-hero.png", // CHANGED slug in path & extension
    processImages: [
      "/images/projects/nipto/nipto-process-1.png", // CHANGED slug in path & extension
      "/images/projects/nipto/nipto-process-2.png", // CHANGED slug in path & extension
    ],
    galleryImages: [
      "/images/projects/nitpo/nitpo-gallery-1.png", // CHANGED slug in path & extension
      "/images/projects/nitpo/nitpo-gallery-2.png", // CHANGED slug in path & extension
    ],
    liveSiteUrl: "https://nitpoexpress.example.com", // ADDED
  },
];

// Helper function to get data for a single project
export function getProjectData(slug) {
  return projects.find((project) => project.slug === slug);
}
