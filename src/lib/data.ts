export const siteMeta = {
  name: "Gary Lim",
  role: "Product Design Leader",
  email: "garylim.design@gmail.com",
  linkedin: "https://www.linkedin.com/in/gary-lim",
  resume: "https://drive.google.com/file/d/1rcMPjr3sQrJHoeq8jdJ04E5HLWlidWi9/view?usp=sharing",
  moreProjects: "https://garylim.notion.site/I-m-Gary-4833850ba1044c03baeecd44f6008cbe?source=copy_link",
};

export const heroAvatar = "/images/hero-avatar.png";

export const logos = [
  { name: "IBM", blurb: "Technology and consulting for global businesses.", logo: "/images/logos/ibm.svg" },
  { name: "Boston Consulting Group", blurb: "One of the world's top three strategy consulting firms.", logo: "/images/logos/bcg.svg" },
  { name: "KONE", blurb: "Global leader in elevators and escalators.", logo: "/images/logos/kone.png", logoIsWhite: true },
  { name: "ExpressVPN", blurb: "A top-tier consumer virtual private network.", logo: "/images/logos/expressvpn.svg" },
  { name: "Nanyang Polytechnic", blurb: "A leading institution for design education in Singapore.", logo: "/images/logos/nyp.svg" },
  { name: "Chaos Theory", blurb: "A venture studio building digital products.", logo: "/images/logos/chaos-theory.svg" },
];

export type Stat = { label: string; value: string };

export type CaseStudySection = {
  heading: string;
  paragraphs: string[];
};

export type CardArt = "gaming" | "brands" | "healthcare" | "androidtv" | "system" | "desktop";

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  cardArt: CardArt;
  image: string;
  cardStats: Stat[];
  role: string;
  year: string;
  industry: string;
  intro: string;
  challenge: string[];
  roleDetail: string[];
  impact: { intro: string; points: string[] };
  impactStats: Stat[];
  gallery: {
    caption: string;
    image?: string;
    video?: string;
    videoWebm?: string;
    heading?: string;
    description?: string;
    /** Container treatment for the image/video — "dark" (default) card, "white" card with padding for light-canvas artwork, or "none" for no border/background (image blends into the page). */
    frame?: "dark" | "white" | "none";
    /** Render at a capped, centered phone-screenshot width instead of stretching full-bleed — for a single portrait screenshot rather than a wide multi-panel graphic. */
    narrow?: boolean;
  }[];
  behindClosedDoors: { heading: string; paragraphs: string[]; actions?: string[] };
  quote?: { text: string; attribution: string };
  learning: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "leading-design-transformation-in-complex-real-time-gaming-technology-platform",
    title: "Leading Design For Complex Real-Time Gaming Technology Platform",
    summary:
      "A series of narratives detailing the redesign of the platform, establishing the design operations, and launching new features.",
    cardArt: "gaming" as const,
    image: "/images/case-studies/gaming.jpg",
    cardStats: [
      { label: "Monthly turnover", value: "$XXM+" },
      { label: "Unified Design System", value: "4" },
    ],
    role: "Lead Product Designer",
    year: "2024 - Ongoing",
    industry: "Gaming",
    intro:
      "Led comprehensive organisational design transformation for a high-growth gaming technology platform, scaling from external agency dependency to a 10-person internal design team in 6 months. Established design operations supporting 4 product lines with complex real-time data requirements, multi-state user flows, and immediate financial impact. Created scalable design systems and research capabilities while delivering sophisticated UX solutions for 6,000+ users across multiple platforms, supporting ~$XXM+ monthly turnover and enterprise-scale business operations.",
    challenge: [
      "The platform required sophisticated design solutions to address complex technical challenges, including multi-state user flows with over 15 possible states, real-time data integration, intricate dependency calculations across related selections, and regulatory compliance for immediate financial transactions.",
      "Simultaneously, the organisation needed a fundamental transformation from external agency dependency to internal design capability, requiring rapid team scaling, establishing a design culture, and creating an operational framework while maintaining product delivery velocity during aggressive expansion.",
    ],
    roleDetail: [
      "Led design operations transformation encompassing team scaling (5 to 10 designers in 6 months), design system establishment (<4 weeks for global implementation), and research capability development. Established design-to-development workflows, mentoring, and stakeholder alignment processes while delivering complex UX solutions for multi-state flows, real-time data integration, and regulatory compliance requirements. Influenced organisational design culture through direct collaboration with the CEO, CPO, and Head of Design, and systematic design thinking implementation.",
    ],
    impact: {
      intro: "",
      points: [
        "Team Building: Scaled the design team from 5 to 10 in 6 months. Established mentoring programs, design critique frameworks, and collaborative workflows to maintain quality standards during rapid expansion.",
        "Design System: Implemented a systematic approach to design system creation, establishing a global component library and token variables (colours, spacing, radius, font sizes) in under 4 weeks.",
        "Organisational Transformation: Transformed external agency dependency to internal design capability, establishing design culture in a previously design-naive organisation.",
        "Complex UX in Regulated Environment: Developed systematic methodology for complex multi-state user flows, implementing hierarchical information architecture, robust error handling, and real-time data integration patterns.",
      ],
    },
    impactStats: [
      { label: "Monthly turnover", value: "$XXM+" },
      { label: "Team growth", value: "100%" },
      { label: "Products support with design system", value: "4" },
    ],
    gallery: [
      {
        caption: "Project #1 — Multi-State Selection & Calculation Platform",
        heading: "Multi-State Selection & Calculation Platform",
        description:
          "Led design for sophisticated selection and calculation platform managing complex user choices with real-time data integration and immediate financial impact. Developed systematic approach to multi-state flows (15+ possible states), real-time data updates, and robust error handling across transaction scenarios. Created cross-platform design patterns optimised for mobile, tablet, and desktop environments.",
        image: "/images/case-studies/gallery/gaming-2.jpg",
        video: "/images/case-studies/gallery/gaming-1-cart.mp4",
        videoWebm: "/images/case-studies/gallery/gaming-1-cart.webm",
      },
      {
        caption: "Project #2 — Transaction History & Tracking",
        heading: "Transaction History & Tracking",
        description:
          "Redesigned comprehensive transaction management system creating transparent user activity records and facilitating complex tracking workflows. Implemented hierarchical information architecture for multi-step actions, integrated real-time status updates, and developed intuitive historical data access patterns, enabling users to review past actions and celebrate their progress.",
        image: "/images/case-studies/gallery/gaming-1.jpg",
      },
    ],
    behindClosedDoors: {
      heading: "Behind Closed Doors: Uncharted Waters",
      paragraphs: [
        "The company was navigating unprecedented transformation - their first rebrand after a decade of operation, concurrent with aggressive expansion across sponsorship, loyalty, VIP management, and affiliate programs. The shift from external agency to internal design team represented a fundamental organisational change, requiring rapid capability building while maintaining product delivery velocity. As the company adopted a data-informed culture for the first time, design leadership was crucial in aligning user experience, operations, and team growth with newly ambitious product goals. I was simultaneously expanding my domain knowledge, delivering design systems, redesigning core products, and building the team—all while working directly alongside the CEO.",
      ],
    },
    quote: {
      text: "Every time we jump on a call, we solve a puzzle and it feels great.",
      attribution: "Feedback from a recent performance review",
    },
    learning: [
      "This experience reinforced the critical role of design leadership in organisational transformation, particularly the challenge of building design culture while delivering complex technical solutions. Managing team scaling, stakeholder alignment, and product delivery simultaneously taught me the importance of systematic design operations and clear communication frameworks.",
    ],
  },
  {
    slug: "defining-strategic-design-vision-for-1b-multi-brand-intergration",
    title: "Defining Strategic Design Vision for $1B+ Multi-Brand Integration",
    summary:
      "Leading design strategy for three major VPN brands to maintain competitive distinctiveness while enabling operational efficiency",
    cardArt: "brands" as const,
    image: "/images/case-studies/brands.jpg",
    cardStats: [
      { label: "Brands differentiated", value: "3" },
      { label: "Global team members", value: "20+" },
    ],
    role: "Senior Product Designer",
    year: "2023",
    industry: "Privacy & Security",
    intro:
      "I co-led the strategic design vision development for a billion-dollar brand integration challenge, preventing cannibalisation across ExpressVPN, CyberGhost, and Private Internet Access—three major consumer VPN brands serving millions of users globally.",
    challenge: [
      "In 2023, the integration of three major VPN brands—ExpressVPN, CyberGhost, and Private Internet Access—under a single technology platform created one of the most complex strategic design challenges in the consumer privacy market. With millions of users and hundreds of millions in revenue across the portfolio, the stakes for successful brand differentiation were enormous. The task at hand was to transform this complex integration challenge into a competitive advantage through strategic design leadership that prevents cannibalisation, accelerates product development, and positions each brand for targeted market growth and user acquisition.",
      "Business Context — Brand Cannibalisation Threat: without clear differentiation, the three brands risked competing against each other, potentially destroying millions in revenue and confusing millions of users about which product served their specific needs. Market Positioning Confusion: each brand had developed different market positioning over years of independent operation. Operational Inefficiency: lack of unified design vision was slowing product development and creating inconsistent user experiences.",
      "Design Context — balancing differentiation vs. efficiency, ensuring UX consistency while maintaining distinctive brand personalities, and creating a long-term design vision flexible enough for market evolution.",
    ],
    roleDetail: [
      "As a Senior Product Designer, I co-led the multi-brand design strategy. I implemented evidence-based decision-making through systematic user research and rapid prototype validation, cutting through stakeholder opinion chaos and competitive panic. Streamlined complex stakeholder dynamics across global teams by establishing focused design critiques and transparent communication frameworks, enabling rapid strategic progress when speed was essential for business survival and technology investment justification.",
    ],
    impact: { intro: "", points: [] },
    impactStats: [
      { label: "VPN brands strategically differentiated", value: "3" },
      { label: "Global team members aligned", value: "20+" },
      { label: "Strategic design principles per brand defined", value: "5" },
    ],
    gallery: [
      { caption: "Collaborative workshopping." },
      { caption: "Design principles for each brand.", image: "/images/case-studies/gallery/brands-1.jpg" },
      { caption: "Future scenarios for each of the brands to highlight key hero moments.", image: "/images/case-studies/gallery/brands-2.jpg", frame: "none" },
      { caption: "Key job-to-be-done.", image: "/images/case-studies/gallery/brands-3.jpg", frame: "none" },
      { caption: "High-level strategy to transform patient experience.", image: "/images/case-studies/gallery/brands-5.jpg", frame: "white" },
      { caption: "Snippets of concept prototypes.", image: "/images/case-studies/gallery/brands-6.jpg", frame: "none", narrow: true },
    ],
    behindClosedDoors: {
      heading: "Behind Closed Doors: Leading Through Business Crisis",
      paragraphs: [
        "The Engineering team's significant investment in next-level traffic routing technology demanded immediate results, while competitors were capturing market share in identity management, private browsers, and mesh networking. As the company's first exploratory design initiative, we faced intense pressure to justify the investment and respond to competitive threats—but stakeholder opinions were creating paralysis when we needed speed.",
      ],
      actions: [
        "I implemented systematic leadership under pressure: first principles thinking to cut through competitive panic and focus on real user needs across ExpressVPN, CyberGhost, and PIA; streamlined stakeholder management to eliminate opinion chaos; transparent communication to unblock progress; and action-oriented prototyping to validate strategic directions with real user feedback rather than internal opinion.",
      ],
    },
    learning: [
      "Leading design under business pressure requires cutting through stakeholder chaos with evidence-based decision-making and user-centred thinking. When competitive threats create panic, systematic design leadership becomes the organisation's strategic advantage.",
    ],
  },
  {
    slug: "transforming-healthcare-experience-for-the-western-region-of-singapore",
    title: "Transforming Healthcare Experience for the Western Region of Singapore",
    summary: "A strategic design approach to improving patient care across 3 hospitals and 6 polyclinics.",
    cardArt: "healthcare" as const,
    image: "/images/case-studies/healthcare.jpg",
    cardStats: [
      { label: "First call resolution", value: "+20%" },
      { label: "Staff productivity", value: "+25%" },
    ],
    role: "Strategic Designer",
    year: "2019",
    industry: "Healthcare",
    intro:
      "The evolution of the patient journey; the future of healthcare will move into home and community. I designed a unified patient experience framework with an integrated contact centre, streamlined care coordination, and digital touchpoints that connect patients seamlessly across all facilities and services.",
    challenge: [
      "A major healthcare merger left patients navigating fragmented care across 3 hospitals and 6 polyclinics. The decentralised contact centre was failing patients, with poor first call resolution and disconnected care coordination affecting patient outcomes.",
    ],
    roleDetail: [
      "As a Strategic Designer, I led ethnographic research and experience transformation across 9 healthcare facilities. I conducted deep patient and staff research, designed unified care journeys, and enabled organisational transformation toward human-centred healthcare.",
      "Conducted comprehensive ethnographic research across specialty clinics, polyclinics, and contact centers. Used zero-based design methodology to reimagine patient experience without constraints, while developing quick-win initiatives and north-star concepts.",
    ],
    impact: { intro: "", points: [] },
    impactStats: [
      { label: "Improvement in first call resolution, reducing patient frustration", value: "20%" },
      { label: "Increase in staff productivity through optimised workflows", value: "25%" },
      { label: "Reduction in call drop rate, improving care accessibility", value: "20%" },
    ],
    gallery: [
      { caption: "A patient's personal calendar to keep track of her various appointments.", image: "/images/case-studies/gallery/healthcare-1.jpg" },
      { caption: "A patient zooming in on the medication details to get a clearer view.", image: "/images/case-studies/gallery/healthcare-2.jpg" },
      { caption: "Snapshot of challenges.", image: "/images/case-studies/gallery/healthcare-3.jpg" },
      { caption: "Ethnographic research summary.", image: "/images/case-studies/gallery/healthcare-4.jpg" },
      { caption: "Exemplars from various ecosystems.", image: "/images/case-studies/gallery/healthcare-5.jpg" },
      { caption: "High-level strategy to transform patient experience.", image: "/images/case-studies/gallery/healthcare-6.jpg" },
      { caption: "A series of concepts showcase.", image: "/images/case-studies/gallery/healthcare-7.jpg" },
    ],
    behindClosedDoors: {
      heading: "Behind Closed Doors: Introducing Human-Centred Design to Healthcare",
      paragraphs: [
        "The Cultural Resistance — Introducing Human-Centred Design to Healthcare felt like teaching jazz to a classical orchestra. Healthcare organisations operate on precision, protocols, and patient safety—concepts that seem to conflict with design thinking's iterative, ambiguous approach. Unclear outputs and design ambiguity made stakeholders uncomfortable—they expected detailed specifications, not exploratory prototypes.",
        "The Stakeholder Challenge — Multiple stakeholders with conflicting agendas made every decision complex. Clinical staff prioritised patient safety, administrators focused on efficiency, and executives needed merger success metrics. Meanwhile, healthcare red tape and privacy concerns created barriers to traditional UX research methods.",
      ],
      actions: [
        "Daily Transparency Built Trust — I hosted daily debriefs, sharing insights, learnings, and patient stories from research. This constant communication transformed scepticism into curiosity as stakeholders saw the human impact behind operational challenges.",
        "Visual Roadmaps Drove Alignment — I established early drafts of the experience roadmap with heavy visual emphasis. Journey maps and service blueprints made abstract concepts tangible, driving immediate reactions and stakeholder alignment.",
        "Participation Created Advocates — Rather than presenting to stakeholders, I brought them into the HCD process. Clinical staff participated in patient interviews, administrators observed workflow mapping, and executives contributed to the ideation process. When people help create the solution, they become invested in its success.",
        "The Result — Healthcare stakeholders transformed from design sceptics to HCD advocates, establishing their internal design team and applying human-centred methodology to future patient experience challenges.",
      ],
    },
    learning: [
      "Design is strategic when we know where we want to play to win. Design, commonly associated with being a tactical driver in terms of its visual appearance, can unlock strategic imperatives through its rigorous methodology. If I could do this again... I will seek more connected and unusual exemplars to challenge the teams' thinking and dramatically move the innovation needle.",
      "Design is more impactful when it can effectively connect its efforts to business value. The ROI of design is the business language of design. It enables the buy-in of business stakeholders and leaders. Ultimately, design is not the only hero, like any other discipline. It's a team sport. If I could do this again... investigate and connect more metrics that design could have contributed to and measured.",
    ],
  },
  {
    slug: "boosting-androidtv-sign-ups",
    title: "Boosting AndroidTV Sign-Ups by 2%",
    summary: "Redesigning the ExpressVPN sign-up experience to reduce user friction and drive business growth.",
    cardArt: "androidtv" as const,
    image: "/images/case-studies/androidtv.jpg",
    cardStats: [
      { label: "Sign-up rate", value: "+2%" },
      { label: "Annual revenue", value: "$20K" },
    ],
    role: "Senior Product Designer",
    year: "2022",
    industry: "Privacy & Security",
    intro:
      "I redesigned the sign-up screen and saw a 2% increase in successful sign-ins, contributing to an estimated annual revenue gain of approximately USD 20,000.",
    challenge: [
      "The cumbersome sign-up process on AndroidTV was causing significant user drop-off and direct revenue loss. With no clear guidance and a clunky activation flow, the platform had a poor conversion rate, creating a major bottleneck for user acquisition on a key growth platform.",
    ],
    roleDetail: [
      "As the Lead Product Designer, I drove the end-to-end redesign of the sign-up and onboarding experience. I led research, defined the design strategy, and collaborated across product, engineering, and QA to deliver a solution that aligned user needs with business goals.",
    ],
    impact: {
      intro: "Our work transformed a major point of friction into a seamless onboarding experience, delivering measurable results.",
      points: [
        "Reduced user friction and related support tickets, leading to higher user satisfaction and lower operational costs.",
        "Established a new design standard for onboarding across all TV platforms at ExpressVPN.",
        "Successfully championed a neglected platform, securing organisational buy-in and placing AndroidTV back on the product roadmap.",
      ],
    },
    impactStats: [
      { label: "Increase in successful sign-ins", value: "+2%" },
      { label: "Annual revenue uplift", value: "USD 20K" },
    ],
    gallery: [
      { caption: "As-is AndroidTV user journey.", image: "/images/case-studies/gallery/androidtv-1.jpg" },
      { caption: "One of the opportunity areas.", image: "/images/case-studies/gallery/androidtv-2.jpg" },
      { caption: "Example of a Northstar design direction.", image: "/images/case-studies/gallery/androidtv-3.jpg" },
      { caption: "Final implementation.", image: "/images/case-studies/gallery/androidtv-4.jpg" },
    ],
    behindClosedDoors: {
      heading: "Behind Closed Doors: Navigating Constraints & Driving Change",
      paragraphs: [
        "The AndroidTV platform was a significant source of user frustration, but had no dedicated owner and hadn't been prioritised since 2018. Key stakeholders, while supportive, were hesitant to adopt new work that fell outside their planned OKRs, creating organisational inertia.",
      ],
      actions: [
        "Built a Coalition for Change — Recognising the lack of formal ownership, I took the initiative to build a case for improvement. I partnered with the Customer Support and Voice of the Customer (VotC) teams to gather qualitative data and validate user frustrations.",
        "Quantified the Problem — I worked \"offline\" with a product manager to analyse the user funnel, identifying specific drop-off points and quantifying the business impact of the poor user experience.",
        "Made it Easy to Say Yes — Instead of presenting a single, monolithic solution, I provided multiple design iterations with clear pros and cons. This empowered stakeholders by simplifying the decision-making process and allowing for a phased approach.",
        "Socialised the Vision — I distilled all key findings, data, and design recommendations into a single, compelling presentation, making it easy to socialise the initiative and build widespread support for actionable next steps.",
      ],
    },
    learning: [
      "Good design is understanding business constraints. In a world where everything is fighting for attention, this case study highlights the importance of pursuing wins that might be small but help pave the way for more significant conversations.",
      "If I could do this again... I would break design directions into size options so stakeholders could compare them and seek clarification quickly, speeding up the decision process.",
    ],
  },
  {
    slug: "scaling-design-consistency-across-3-brands-and-4-plaftorms",
    title: "Scaling Design Consistency Across 3 Brands and 4 Platforms",
    summary:
      "A bold cross-team initiative to reduce design/tech debt, accelerating team velocity and improving accessibility standards",
    cardArt: "system" as const,
    image: "/images/case-studies/system.jpg",
    cardStats: [
      { label: "Brands differentiated", value: "3" },
      { label: "Global team members", value: "20+" },
    ],
    role: "Senior Product Designer",
    year: "2023",
    industry: "Privacy & Security",
    intro:
      "I led the design system transformation across ExpressVPN, CyberGhost, and Private Internet Access—unifying 3 brands and 4 platforms while achieving 100% AA accessibility compliance.",
    challenge: [
      "Design inconsistencies across ExpressVPN, PIA, and CyberGhost were causing unnecessary rework, slowing new feature development, and creating accessibility compliance risks.",
    ],
    roleDetail: [
      "As Lead Product Designer, I orchestrated the largest cross-platform design initiative in company history—unifying three brands across four platforms (Android, iOS, MacOS, and Windows) while maintaining feature development velocity.",
      "Strategic Leadership (60%): designed organisational structure for unprecedented scale, assigning platform ownership to 3 designers while maintaining system coherence through centralised coordination. Established a \"Design Control Tower\" with weekly alignment sessions to manage bandwidth, resolve conflicts, and maintain quality standards. Led stakeholder alignment with PMs and engineering leads, consistently advocating for best-in-class solutions.",
      "Tactical Execution (40%): built a comprehensive component library with embedded accessibility standards and cross-platform variations, established design token architecture and documentation standards that reduced handoff time, created a governance framework and review processes adopted across all product teams, and mentored 3 junior designers in system thinking and stakeholder management.",
      "Key Innovation — when no established methodology existed for multi-brand design system consolidation, I led through rapid experimentation, building prototype components and testing approaches with teams rather than relying on theoretical planning.",
    ],
    impact: {
      intro: "",
      points: [
        "100% AA accessibility compliance across all components",
        "Unified design language across 3 brands serving multi-million users",
        "Design libraries optimised for speed and consistency",
      ],
    },
    impactStats: [
      { label: "Designers mentored and developed in system thinking", value: "3" },
      { label: "Brands consolidated with distinct design language", value: "3" },
      { label: "Platforms unified under a scalable design language", value: "4" },
    ],
    gallery: [
      { caption: "Component snapshot.", image: "/images/case-studies/gallery/system-1.jpg" },
      { caption: "Flow-first approach.", image: "/images/case-studies/gallery/system-2.jpg" },
      { caption: "Embedded states in components.", image: "/images/case-studies/gallery/system-3.jpg" },
      { caption: "Embedded complex animation in component.", image: "/images/case-studies/gallery/system-4.jpg" },
      { caption: "Detailed documentation.", image: "/images/case-studies/gallery/system-5.jpg" },
      { caption: "Colour theming.", image: "/images/case-studies/gallery/system-6.jpg" },
    ],
    behindClosedDoors: {
      heading: "Behind Closed Doors: Leading Through Uncharted Territory",
      paragraphs: [
        "This was genuinely first-of-its-kind territory. No one in the company had attempted design system consolidation across three distinct brands and four platforms simultaneously. We were writing the methodology while executing it, with the entire organisation watching.",
        "The pressure was immense, but the uncertainty was the real challenge. While leadership debated high-level strategies and pivoted approaches in real-time, I realised that waiting for perfect clarity would mean never starting.",
      ],
      actions: [
        "Bias towards action — when faced with questions no one could answer theoretically, I built answers practically. I researched and experimented with the best ways to develop and document a component, and tested it with designers and developers.",
        "Designed for Distributed Leadership — recognising that centralised control would create bottlenecks at this scale, I implemented a \"hub and spoke\" model. Each designer became a platform owner with real decision-making authority, while I maintained system coherence through weekly \"Design Control Tower\" sessions that became the heartbeat of the project.",
      ],
    },
    learning: [
      "This project taught me that design leadership is about creating the conditions for teams to succeed in unprecedented situations. The most impactful design work often happens in organisational structure and process design, not just interface design.",
    ],
  },
  {
    slug: "modernising-desktop-vpn-experience-for-3m-users",
    title: "Modernising Desktop VPN Experience for 3M+ Users",
    summary:
      "A strategic design approach to transform ExpressVPN's desktop application for improved usability and competitive positioning",
    cardArt: "desktop" as const,
    image: "/images/case-studies/desktop.jpg",
    cardStats: [
      { label: "User preference", value: "80%" },
      { label: "Feature discoverability", value: "60%" },
    ],
    role: "Senior Product Designer",
    year: "2023",
    industry: "Privacy & Security",
    intro:
      "I designed a unified single-window desktop experience that modernises ExpressVPN's interface for 3M+ users across Windows and Mac platforms. Through strategic benchmarking and integration of platform guidelines, I transformed the fragmented, multi-window approach into a streamlined and accessible design, achieving an 80% preference from user validation.",
    challenge: [
      "ExpressVPN's desktop application faced a critical competitive disadvantage. While mobile VPN experiences had evolved toward streamlined, intuitive interfaces, our desktop app remained trapped in an outdated multi-window paradigm that created significant user experience friction.",
      "Business Context — competitive pressure from NordVPN and Surfshark's modernised, unified interfaces; platform evolution, with Apple, Microsoft and Google all recommending single-window approaches.",
      "UX Problems — ineffective space utilisation from the multi-window approach; poor feature discoverability, with critical features hidden in secondary windows; navigation inefficiency from fragmented workflows; and accessibility challenges for screen readers and users with mobility limitations.",
    ],
    roleDetail: [
      "As Senior Product Designer, I led the desktop application modernisation initiative for 3M+ users, managing stakeholder alignment across product, engineering, and design teams. I drove evidence-based design decisions through competitive analysis and user research, and overcame organisational resistance through strategic benchmarking and user validation.",
    ],
    impact: { intro: "", points: [] },
    impactStats: [
      { label: "User preference for unified design", value: "80%" },
      { label: "Increase in feature discoverability", value: "60%" },
      { label: "Platform guidelines compliance", value: "100%" },
    ],
    gallery: [
      { caption: "Before — Multi windows layout.", image: "/images/case-studies/gallery/desktop-1.jpg" },
      { caption: "After — Single window layout.", image: "/images/case-studies/gallery/desktop-2.jpg" },
      { caption: "Desktop application benchmarking.", image: "/images/case-studies/gallery/desktop-3.jpg" },
      { caption: "Prototype demo.", image: "/images/case-studies/gallery/desktop-4.jpg" },
      { caption: "Specification document of the new layout." },
    ],
    behindClosedDoors: {
      heading: "Behind Closed Doors: Navigating Stakeholder Resistance",
      paragraphs: [
        "Proposing a major desktop redesign at ExpressVPN meant overcoming significant organisational resistance. The Product Manager wanted minimal risk, while engineering teams worried about user familiarity with existing multi-window patterns.",
      ],
      actions: [
        "Instead of design arguments, I built compelling evidence: industry benchmarking of best-in-class applications, platform guidelines from Apple and Microsoft, and user testing with 30 existing customers. When 80% of users preferred the new single-window design, stakeholder conversations shifted from \"why change?\" to \"how do we implement this well?\"",
      ],
    },
    learning: [
      "Organisational resistance to design change often stems from legitimate concerns about user impact and implementation complexity. Rather than dismissing these concerns, successful design leadership involves collaborative problem-solving that incorporates stakeholder feedback while maintaining the integrity of the design vision.",
    ],
  },
];

export const experience = [
  { company: "Chaos Theory", tag: "Current", role: "Lead Product Designer", year: "2024" },
  { company: "Nanyang Polytechnic", tag: "Current", role: "Adjunct Lecturer", year: "2023" },
  { company: "ExpressVPN", tag: "", role: "Senior Product Designer", year: "2022" },
  { company: "KONE", tag: "", role: "Senior Service Designer", year: "2021" },
  { company: "BCG", tag: "", role: "Senior Strategic Designer", year: "2019" },
  { company: "IBM", tag: "", role: "Senior UX Designer", year: "2016" },
];

export const aboutStats: Stat[] = [
  { label: "Years of design experience", value: "9+" },
  { label: "Years in design management", value: "3" },
  { label: "Design projects delivered", value: "30+" },
];

export const aboutContent = {
  heading: "9 Years Driving Strategic And Product Design Transformation",
  paragraphs: [
    "Based in Singapore, I lead design strategy for complex organisational challenges—from billion-dollar multi-brand integrations to healthcare transformation initiatives. My foundation spans fashion and industrial design, providing a unique perspective on user interaction and creative problem-solving that enhances digital product strategy and drives innovative solutions.",
    "I combine strategic business thinking with comprehensive design expertise, having advised C-suite executives while managing global teams across multiple cultures and time zones. Experience across healthcare, privacy & security, and enterprise software—enhanced by cross-domain design thinking—enables rapid connection of systemic touchpoints and breakthrough approaches to organizational transformation.",
  ],
  highlights: [
    "Led $1B+ multi-brand integration strategy preventing cannibalisation",
    "Transformed healthcare experience for the Western Singapore region",
    "Generated measurable revenue through strategic product optimisation",
    "Led global design teams across ExpressVPN, BCG Platinion, IBM iX, and KONE",
  ],
  closing:
    "Beyond client work, I support the next generation of designers through part-time lecturing at Nanyang Polytechnic. I'm also a founding member of Service Design Network Singapore Chapter.",
};
