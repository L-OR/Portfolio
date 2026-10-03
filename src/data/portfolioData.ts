import { Project, AboutData } from '../types';
import peerdomHeroImage from '../assets/images/peerdom_hero_comparison_1790835903852.jpg';

export const portfolioProjects: Project[] = [
  {
    id: 'almanac',
    code: '01',
    title: 'Almanac',
    client: 'Personal Project',
    year: '2026',
    discipline: 'Design System & Editorial Platform',
    tagline: 'Coming soon',
    overview: 'A forward-looking digital publication and generative design system platform exploring the intersection of Swiss typography, archival editorial layout, and responsive spatial interfaces. Currently in active development for 2026.',
    role: 'Lead Product Designer & Design Architect',
    timeline: '6 months (2026)',
    tools: ['Figma', 'TypeScript', 'Tailwind CSS', 'Design Tokens'],
    team: 'Lyne Olmedo-Revaz, 2 Frontend Developers',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Almanac design system and generative editorial canvas preview',
    liveUrl: 'https://almanac.design',
    liveUrlLabel: 'Explore Almanac Platform',
    themeAccent: '#c83b2b',
    steps: [
      {
        number: '01',
        phaseLabel: 'INITIATION',
        title: 'Context',
        subtitle: 'CLASSICAL PRINT VS. FLUID VIEWPORTS',
        description: 'PROBLEM Editorial web design often abandons classical typography rhythms and proportional grid systems. MARKET INSIGHTS Modern digital publications lack tactile structure. Almanac bridges Swiss archival layout with modern responsive design. GOALS Establish an 8pt Swiss baseline grid, fluid typographic hierarchy, and tokenized design system primitives. CONSTRAINTS Web performance constraints, multi-device viewport scaling, variable typeface licensing.',
        breakdown: [
          {
            label: 'PROBLEM',
            text: 'Editorial web design often abandons classical typography rhythms and proportional grid systems.'
          },
          {
            label: 'MARKET INSIGHTS',
            text: 'Modern digital publications lack tactile structure. Almanac bridges Swiss archival layout with modern responsive design.'
          },
          {
            label: 'GOALS',
            text: 'Establish an 8pt Swiss baseline grid, fluid typographic hierarchy, and tokenized design system primitives.'
          },
          {
            label: 'CONSTRAINTS',
            text: 'Web performance constraints, multi-device viewport scaling, variable typeface licensing.'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'Baseline Grid & Typographic Scale Analysis',
        graphicDetails: {
          caption: 'Baseline Grid & Typographic Scale Analysis'
        }
      },
      {
        number: '02',
        phaseLabel: 'PLANNING',
        title: 'Scope',
        subtitle: 'TOKEN PIPELINE & EDITORIAL ARCHITECTURE',
        description: 'SCOPE Typographic scales · Variable glyph calibration · Modular component library · Documentation site. PRIORITIES Standardizing core tokens (spacing, typography, elevation) before authoring complex editorial layout blocks.',
        breakdown: [
          {
            label: 'SCOPE',
            text: 'Typographic scales · Variable glyph calibration · Modular component library · Documentation site'
          },
          {
            label: 'PRIORITIES',
            text: 'Standardizing core tokens (spacing, typography, elevation) before authoring complex editorial layout blocks.'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'Editorial Architecture & Layout Hierarchy',
        graphicDetails: {
          caption: 'Editorial Architecture & Layout Hierarchy'
        }
      },
      {
        number: '03',
        phaseLabel: 'REVIEW',
        title: 'Alignment',
        subtitle: 'STAKEHOLDER & TYPOGRAPHER CONSENSUS',
        description: 'STAKEHOLDER FEEDBACK Presented interactive type specimens and optical weight scaling tests to editorial directors and font engineers to secure cross-disciplinary buy-in.',
        breakdown: [
          {
            label: 'STAKEHOLDER FEEDBACK',
            text: 'Presented interactive type specimens and optical weight scaling tests to editorial directors and font engineers to secure cross-disciplinary buy-in.'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'Typographic Specimen & Optical Scale Review',
        graphicDetails: {
          caption: 'Typographic Specimen & Optical Scale Review'
        }
      },
      {
        number: '04',
        phaseLabel: 'EXECUTION',
        title: 'Delivery',
        subtitle: 'COMPONENTS, TOKENS & DOCUMENTATION',
        description: 'LEADERSHIP Directed sprint cycles across design and development, translating Figma components into verified, production-ready code primitives. DESIGN DECISIONS Monospaced technical telemetry paired with humanist serif display headings and quiet neutral backgrounds. DELIVERABLES Figma component library · Token pipeline in JSON · Interactive documentation portal · Production CSS tokens.',
        breakdown: [
          {
            label: 'LEADERSHIP',
            text: 'Directed sprint cycles across design and development, translating Figma components into verified, production-ready code primitives.'
          },
          {
            label: 'DESIGN DECISIONS',
            text: 'Monospaced technical telemetry paired with humanist serif display headings and quiet neutral backgrounds.'
          },
          {
            label: 'DELIVERABLES',
            text: 'Figma component library · Token pipeline in JSON · Interactive documentation portal · Production CSS tokens'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'Design Tokens & Component Library Delivery',
        graphicDetails: {
          caption: 'Design Tokens & Component Library Delivery'
        }
      },
      {
        number: '05',
        phaseLabel: 'RELEASE',
        title: 'Impact',
        subtitle: 'SYSTEM ROLLOUT & ADOPTION',
        description: 'CUSTOMER FEEDBACK Design teams praised the intuitive modular scales and speed of assembly, cutting page build times significantly. ROLLOUT Deployed across internal publication properties and shared as open-access architectural documentation for digital typographers.',
        breakdown: [
          {
            label: 'CUSTOMER FEEDBACK',
            text: 'Design teams praised the intuitive modular scales and speed of assembly, cutting page build times significantly.'
          },
          {
            label: 'ROLLOUT',
            text: 'Deployed across internal publication properties and shared as open-access architectural documentation for digital typographers.'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'System Rollout & Documentation Metrics',
        graphicDetails: {
          caption: 'System Rollout & Documentation Metrics'
        }
      },
      {
        number: '06',
        phaseLabel: 'RETROSPECTIVE',
        title: 'Reflection',
        subtitle: 'SCALING VARIABLE TYPE IN CODE',
        description: "WHAT WAS LEFT Advanced WebGPU optical sizing shaders remain in prototype stage for a future version 2.0 release. WHAT I'D DO DIFFERENTLY With more engineering capacity upfront, I would have integrated automated visual regression testing into the CI pipeline earlier.",
        breakdown: [
          {
            label: 'WHAT WAS LEFT',
            text: 'Advanced WebGPU optical sizing shaders remain in prototype stage for a future version 2.0 release.'
          },
          {
            label: "WHAT I'D DO DIFFERENTLY",
            text: 'With more engineering capacity upfront, I would have integrated automated visual regression testing into the CI pipeline earlier.'
          }
        ],
        infographicType: 'none'
      }
    ]
  },
  {
    id: 'peerdom',
    code: '02',
    title: 'Peerdom',
    client: 'Peerdom AG',
    year: '2025',
    discipline: 'Organizational Mapping Software',
    tagline: 'Brand identity and landing page for Saas start-up',
    overview: 'Rebranded a SaaS start-up in 3 months. The identity was adopted across its marketing website, social media and newsletter, well beyond the M&A campaign it was built for.',
    role: 'Project Manager, Brand Designer & UX/UI Designer',
    timeline: '3 months',
    tools: ['Figma', 'Illustrator', 'Photoshop', 'GitLab'],
    team: 'Developer, Paid Acquisition Specialist, Copywriter',
    image: peerdomHeroImage,
    imageAlt: 'Peerdom Before vs. After Landing Page Redesign',
    liveUrl: 'https://peerdom.com',
    liveUrlLabel: 'Visit Peerdom Platform',
    themeAccent: '#c83b2b',
    steps: [
      {
        number: '01',
        phaseLabel: 'INITIATION',
        title: 'Context',
        subtitle: 'OUTDATED BRAND, WRONG AUDIENCE',
        description: "PROBLEM The muted palette and dated look weren't resonating with customers or reaching the right audience. MARKET INSIGHTS I audited the existing brand and website, then researched competitors and industry trends. Competitors relied on purple and blue palettes. Peerdom, positioned as a \"change maker\" tool, needed a more distinctive and energetic look. GOALS Refresh the identity on a strong brand strategy, and design a landing page for a mergers and acquisitions (M&A) campaign. CONSTRAINTS No budget, internal team only · Fixed Brand Elements: logo shape, Inter typeface, icon and illustration library",
        breakdown: [
          {
            label: 'PROBLEM',
            text: "The muted palette and dated look weren't resonating with customers or reaching the right audience."
          },
          {
            label: 'MARKET INSIGHTS',
            text: 'I audited the existing brand and website, then researched competitors and industry trends. Competitors relied on purple and blue palettes. Peerdom, positioned as a "change maker" tool, needed a more distinctive and energetic look.'
          },
          {
            label: 'GOALS',
            text: 'Refresh the identity on a strong brand strategy, and design a landing page for a mergers and acquisitions (M&A) campaign.'
          },
          {
            label: 'CONSTRAINTS',
            text: 'No budget, internal team only · Fixed Brand Elements: logo shape, Inter typeface, icon and illustration library'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'Competitor Color Analysis',
        graphicDetails: {
          caption: 'Competitor Color Analysis'
        }
      },
      {
        number: '02',
        phaseLabel: 'PLANNING',
        title: 'Scope',
        subtitle: 'COLOR AND LAYOUT FIRST',
        description: 'SCOPE Brand and website audit · Brand strategy · Visual identity · Landing page · M&A campaign. PRIORITIES With the logo shape, Inter, and the illustrations and icons fixed, color and layout is where change would be most visible and most cost-effective. The brand strategy and a first visual sneak peek came before any detailed design work.',
        breakdown: [
          {
            label: 'SCOPE',
            text: 'Brand and website audit · Brand strategy · Visual identity · Landing page · M&A campaign'
          },
          {
            label: 'PRIORITIES',
            text: 'With the logo shape, Inter, and the illustrations and icons fixed, color and layout is where change would be most visible and most cost-effective. The brand strategy and a first visual sneak peek came before any detailed design work.'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'Scope & Brand Strategy',
        graphicDetails: {
          caption: 'Scope & Brand Strategy'
        }
      },
      {
        number: '03',
        phaseLabel: 'REVIEW',
        title: 'Alignment',
        subtitle: 'FROM RESISTANCE TO APPROVAL',
        description: 'STAKEHOLDER FEEDBACK There was resistance to a rebrand. I presented the research, strategy and sneak peek to the three founders. Once the strategy and scope were defined and clearly explained, all doubts were cleared and I got approval to develop the visual identity.',
        breakdown: [
          {
            label: 'STAKEHOLDER FEEDBACK',
            text: 'There was resistance to a rebrand. I presented the research, strategy and sneak peek to the three founders. Once the strategy and scope were defined and clearly explained, all doubts were cleared and I got approval to develop the visual identity.'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'Stakeholder Alignment & Strategy Presentation',
        graphicDetails: {
          caption: 'Stakeholder Alignment & Strategy Presentation'
        }
      },
      {
        number: '04',
        phaseLabel: 'EXECUTION',
        title: 'Delivery',
        subtitle: 'LED A TEAM OF FOUR THROUGH SPRINTS',
        description: 'LEADERSHIP I coordinated a cross-functional team of four (myself, Developer, Paid Acquisition Specialist, Copywriter) through sprints until the release. I managed timelines and tasks, and kept the work aligned with business strategy and user needs. DESIGN DECISIONS Kept green, raised the saturation. Green stayed as the primary color for continuity, with more impact to stand out from competitors. Added a green-to-blue gradient. Blue conveys growth, trust and confidence, and the gradient echoes the user journey from "newbie" to "expert." DELIVERABLES Refreshed visual identity · Landing page wireframes · High-fidelity prototype · Fully working landing page · Paid ads campaign for M&A on LinkedIn and Google',
        breakdown: [
          {
            label: 'LEADERSHIP',
            text: 'I coordinated a cross-functional team of four (myself, Developer, Paid Acquisition Specialist, Copywriter) through sprints until the release. I managed timelines and tasks, and kept the work aligned with business strategy and user needs.'
          },
          {
            label: 'DESIGN DECISIONS',
            text: 'Kept green, raised the saturation. Green stayed as the primary color for continuity, with more impact to stand out from competitors.\nAdded a green-to-blue gradient. Blue conveys growth, trust and confidence, and the gradient echoes the user journey from "newbie" to "expert."'
          },
          {
            label: 'DELIVERABLES',
            text: 'Refreshed visual identity · Landing page wireframes · High-fidelity prototype · Fully working landing page · Paid ads campaign for M&A on LinkedIn and Google'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'Landing Page & Campaign Deliverables',
        graphicDetails: {
          caption: 'Landing Page & Campaign Deliverables'
        }
      },
      {
        number: '05',
        phaseLabel: 'RELEASE',
        title: 'Impact',
        subtitle: 'APPROVED BEYOND THE CAMPAIGN',
        description: "CUSTOMER FEEDBACK The landing page and marketing campaign went live with the new identity. Customers responded very well to it and sent congratulation emails to Peerdom's sales team. ROLLOUT As a result, it was approved and rolled out across social media, the newsletter and the website, well beyond the M&A landing page.",
        breakdown: [
          {
            label: 'CUSTOMER FEEDBACK',
            text: "The landing page and marketing campaign went live with the new identity. Customers responded very well to it and sent congratulation emails to Peerdom's sales team."
          },
          {
            label: 'ROLLOUT',
            text: 'As a result, it was approved and rolled out across social media, the newsletter and the website, well beyond the M&A landing page.'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'Marketing Rollout & Customer Feedback',
        graphicDetails: {
          caption: 'Marketing Rollout & Customer Feedback'
        }
      },
      {
        number: '06',
        phaseLabel: 'RETROSPECTIVE',
        title: 'Reflection',
        subtitle: 'BRAND AND PRODUCT NOT YET ALIGNED',
        description: "WHAT WAS LEFT My contract ended before I could apply the identity to the platform itself and update the design system in Figma. WHAT I'D DO DIFFERENTLY With more budget or time, I would have sourced or designed an illustration library that looked less generic and matched the brand better.",
        breakdown: [
          {
            label: 'WHAT WAS LEFT',
            text: 'My contract ended before I could apply the identity to the platform itself and update the design system in Figma.'
          },
          {
            label: "WHAT I'D DO DIFFERENTLY",
            text: 'With more budget or time, I would have sourced or designed an illustration library that looked less generic and matched the brand better.'
          }
        ],
        infographicType: 'none'
      }
    ]
  },
  {
    id: 'flyux',
    code: '03',
    title: 'FlyUX Airline',
    client: 'UX Design Institute',
    year: '2022',
    discipline: 'Flight Booking Process',
    tagline: 'Flight booking experience for a fictional airline',
    overview: 'Designed an online booking experience for a fictional airline, from competitive research to a developer-ready hand-over wireframe, in 8 months.',
    role: 'UX Researcher, UX Designer',
    timeline: '8 months, part-time',
    tools: ['Figma', 'Illustrator', 'Photoshop', 'InDesign', 'Premiere Pro', 'Google Suite'],
    team: 'N.A. (Personal project for UX Design Diploma)',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'FlyUX flight booking experience interface',
    liveUrl: 'https://flyux-design.aero',
    liveUrlLabel: 'View FlyUX Prototype',
    themeAccent: '#c83b2b',
    steps: [
      {
        number: '01',
        phaseLabel: 'INITIATION',
        title: 'Context',
        subtitle: 'A BOOKING EXPERIENCE TO IMPROVE',
        description: 'BRIEF As part of my UX Design Diploma, I produced a case study for FlyUX, a fictional airline. The assignment covered the full UX process: research combining quantitative and qualitative data, then the design and prototyping of a solution. APPROACH Understand users through research, shape a user-friendly booking process, and design a user-centered website wireframe and interactive prototype. GOAL Give the airline a competitive advantage through an intuitive, frictionless online booking experience. CONSTRAINTS Fictional airline · User testing run remotely because of the COVID-19 pandemic',
        breakdown: [
          {
            label: 'BRIEF',
            text: 'As part of my UX Design Diploma, I produced a case study for FlyUX, a fictional airline. The assignment covered the full UX process: research combining quantitative and qualitative data, then the design and prototyping of a solution.'
          },
          {
            label: 'APPROACH',
            text: 'Understand users through research, shape a user-friendly booking process, and design a user-centered website wireframe and interactive prototype.'
          },
          {
            label: 'GOAL',
            text: 'Give the airline a competitive advantage through an intuitive, frictionless online booking experience.'
          },
          {
            label: 'CONSTRAINTS',
            text: 'Fictional airline · User testing run remotely because of the COVID-19 pandemic'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'FlyUX Booking Experience Research & Scope',
        graphicDetails: {
          caption: 'FlyUX Booking Experience Research & Scope'
        }
      },
      {
        number: '02',
        phaseLabel: 'PLANNING',
        title: 'Research',
        subtitle: 'GATHERING QUANTITATIVE AND QUALITATIVE DATA',
        description: 'COMPETITIVE BENCHMARK I researched the best airline websites to identify best practices and conventions for the project. SURVEY I built an online survey and gathered quantitative and qualitative data on how people interact with airline websites. USABILITY TEST Because of the COVID-19 pandemic, I ran it remotely. I prepared a recruiting screener, a consent form and a test script, then tested two different airline websites. It gave me extensive qualitative insight into the booking process and users\' experiences. PERSONAS Carlos (lives and works in Italy, backpacker seeking cost-effective flights), Anne (family traveler in Ireland booking via iPad/smartphone), Laetitia (frequent international traveler flying monthly across Asia, USA, Canada, Italy).',
        breakdown: [
          {
            label: 'COMPETITIVE BENCHMARK',
            text: 'I researched the best airline websites to identify best practices and conventions for the project.'
          },
          {
            label: 'SURVEY',
            text: 'I built an online survey and gathered quantitative and qualitative data on how people interact with airline websites.'
          },
          {
            label: 'USABILITY TEST',
            text: 'Because of the COVID-19 pandemic, I ran it remotely. I prepared a recruiting screener, a consent form and a test script, then tested two different airline websites. It gave me extensive qualitative insight into the booking process and users\' experiences.'
          },
          {
            label: 'PERSONAS',
            text: 'Carlos. Lives and works in Italy. An adventurous backpacker passionate about history, he takes short leisure trips in Europe and one long flight a year to visit his family in Mexico. He wants cost-effective flights that give him the most time at each destination.\n\nAnne. Lives with her family in Ireland and travels for pleasure during quick breaks. She books online on an iPad or smartphone, avoids aggregators like Skyscanner, and prefers the Ryanair or Aer Lingus apps.\n\nLaetitia. Lives and works in Ireland with her partner. A frequent traveler, she flies about once a month to Asia, the USA, Canada or Italy, and uses a MacBook or smartphone with a variety of apps.'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'User Research, Usability Testing & Personas',
        graphicDetails: {
          caption: 'User Research, Usability Testing & Personas'
        }
      },
      {
        number: '03',
        phaseLabel: 'REVIEW',
        title: 'Analysis',
        subtitle: 'FINDING PAIN POINTS THROUGH RAW DATA',
        description: 'AFFINITY DIAGRAM I brought together the benchmark, survey, personas and usability test in one affinity diagram, sorted into four groups: must-have, things to improve, nice-to-have and dislike. Insights are organized by process flow, interface, behavior and each stage of the booking. JOURNEY MAP I mapped the booking journey chronologically, across 15 steps in five stages from landing page to boarding pass. Frustration peaks at the cookie banner and at baggage, seats and extras. TOP PAIN POINTS Intrusive cookie banner with no "reject all" button, right at the start. Hard to compare flights, with many open tabs. Unclear fares and extras: fare names change along the way, and prices for baggage, seats and extras aren\'t transparent.',
        breakdown: [
          {
            label: 'AFFINITY DIAGRAM',
            text: 'I brought together the benchmark, survey, personas and usability test in one affinity diagram, sorted into four groups: must-have, things to improve, nice-to-have and dislike. Insights are organized by process flow, interface, behavior and each stage of the booking.'
          },
          {
            label: 'JOURNEY MAP',
            text: 'I mapped the booking journey chronologically, across 15 steps in five stages from landing page to boarding pass. Frustration peaks at the cookie banner and at baggage, seats and extras.'
          },
          {
            label: 'TOP PAIN POINTS',
            text: 'Intrusive cookie banner with no "reject all" button, right at the start.\nHard to compare flights, with many open tabs.\nUnclear fares and extras: fare names change along the way, and prices for baggage, seats and extras aren\'t transparent.'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'Affinity Diagram & 15-Step Journey Map',
        graphicDetails: {
          caption: 'Affinity Diagram & 15-Step Journey Map'
        }
      },
      {
        number: '04',
        phaseLabel: 'EXECUTION',
        title: 'Design',
        subtitle: 'THE WHOLE BOOKING IN FIVE SCREENS',
        description: 'FLOW DIAGRAM I started with the desktop user flow, considering each user task and limiting the number of screens needed to complete a booking. The whole journey runs through five screens: Home Page (search, results and comparison), Flight Features, Passenger Details, Payment Info and Confirmation. SKETCHES Following the flow, I used the analysis to sketch screen states that tackle the booking issues of current airline sites. Sketching is a quick, affordable way to explore ideas before prototyping. PROTOTYPE The flow and sketches defined the solution, and I built a mid-fidelity interactive prototype to test it. DESIGN DECISIONS Search, results and comparison on one page. Smart defaults. Exploration map. Fixed price summary and progress bar. Confirmation screen with boarding pass.',
        breakdown: [
          {
            label: 'FLOW DIAGRAM',
            text: 'I started with the desktop user flow, considering each user task and limiting the number of screens needed to complete a booking. The whole journey runs through five screens: Home Page (search, results and comparison), Flight Features, Passenger Details, Payment Info and Confirmation.'
          },
          {
            label: 'SKETCHES',
            text: 'Following the flow, I used the analysis to sketch screen states that tackle the booking issues of current airline sites. Sketching is a quick, affordable way to explore ideas before prototyping.'
          },
          {
            label: 'PROTOTYPE',
            text: 'The flow and sketches defined the solution, and I built a mid-fidelity interactive prototype to test it.'
          },
          {
            label: 'DESIGN DECISIONS',
            text: '- Search, results and comparison on one page, so that users don\'t have to juggled many open tabs to compare flights.\n- Smart defaults, so that users can expect a fast booking with few clicks.\n- An exploration map, so that users can explore destinations and flexible dates more easily.\n- A price summary stays on the side and a progress bar stays on top for transparent pricing. Economy is preselected, and fare upgrades, seats and baggage are features to activate on the same screen.\n- The confirmation screen shows a payment message and a download button, and a confirmation email arrives with the boarding pass attached.'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'User Flow Diagram & Five-Screen Architecture',
        graphicDetails: {
          caption: 'User Flow Diagram & Five-Screen Architecture'
        }
      },
      {
        number: '05',
        phaseLabel: 'RELEASE',
        title: 'Hand-over',
        subtitle: 'READY FOR A DEVELOPER',
        description: 'HAND-OVER DOCUMENTS A complete wireframe, ready to use for a developer with files describing the website\'s information architecture and user flows.',
        breakdown: [
          {
            label: 'HAND-OVER DOCUMENTS',
            text: 'A complete wireframe, ready to use for a developer with files describing the website\'s information architecture and user flows.'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'Developer-Ready Wireframes & Architecture Specs',
        graphicDetails: {
          caption: 'Developer-Ready Wireframes & Architecture Specs'
        }
      },
      {
        number: '06',
        phaseLabel: 'RETROSPECTIVE',
        title: 'Reflection',
        subtitle: 'THE FULL UX PROCESS',
        description: 'WHAT I LEARNED This project let me run the full UX design process on my own. I learned to conduct complete UX research, extract concrete insights from the data, and turn them into user-friendly design decisions.',
        breakdown: [
          {
            label: 'WHAT I LEARNED',
            text: 'This project let me run the full UX design process on my own. I learned to conduct complete UX research, extract concrete insights from the data, and turn them into user-friendly design decisions.'
          }
        ],
        infographicType: 'none'
      }
    ]
  },
  {
    id: 'nestle-mymenu-iq',
    code: '04',
    title: 'MyMenu IQ™',
    client: 'Nestle',
    year: '2021',
    discipline: 'Digital Nutrition Service',
    tagline: 'Digital nutrition service for Nestlé',
    overview: "Led the UX/UI and brand of Nestlé's meal-scoring service, redesigned from a rejected agency proposal. It went live on 13 platforms, and 82% of consumers who used the meal score said it helped them choose healthier side dishes.",
    role: 'UX/UI Designer, Brand Designer, Design Coordinator',
    timeline: '1 year, part-time',
    tools: ['Figma', 'Illustrator', 'Photoshop'],
    team: 'Digital Ecosystem Lead, Partner Agency (development)',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'MyMenuIQ digital nutrition service interface for Nestle',
    liveUrl: 'https://nestle.com/nutrition/mymenu-iq',
    liveUrlLabel: 'Learn More About MyMenuIQ',
    themeAccent: '#c83b2b',
    steps: [
      {
        number: '01',
        phaseLabel: 'INITIATION',
        title: 'Context',
        subtitle: "AN AGENCY PROPOSAL THAT DIDN'T WORK",
        description: "PROBLEM The Food department was dissatisfied with the design agency's work on MyMenuIQ, so I took over the UX/UI lead. AUDIT I analyzed the agency's deliverables and found a convoluted flow, too many steps for simple tasks, small and unclear buttons and assets, and an overcrowded interface. GOALS Turn a scientifically validated meal-scoring service into a simple tool that helps users build a balanced menu (scored from 0 to 100, with a target of at least 70), with direct access to recipes and a shopping list. CONSTRAINTS Integrated into Maggi's website, so the brand and typography had to connect with it",
        breakdown: [
          {
            label: 'PROBLEM',
            text: "The Food department was dissatisfied with the design agency's work on MyMenuIQ, so I took over the UX/UI lead."
          },
          {
            label: 'AUDIT',
            text: "I analyzed the agency's deliverables and found a convoluted flow, too many steps for simple tasks, small and unclear buttons and assets, and an overcrowded interface."
          },
          {
            label: 'GOALS',
            text: 'Turn a scientifically validated meal-scoring service into a simple tool that helps users build a balanced menu (scored from 0 to 100, with a target of at least 70), with direct access to recipes and a shopping list.'
          },
          {
            label: 'CONSTRAINTS',
            text: "Integrated into Maggi's website, so the brand and typography had to connect with it"
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'Agency Proposal Audit & Meal Scoring Goals',
        graphicDetails: {
          caption: 'Agency Proposal Audit & Meal Scoring Goals'
        }
      },
      {
        number: '02',
        phaseLabel: 'PLANNING',
        title: 'Scope',
        subtitle: 'FLOW FIRST, THEN SCREENS',
        description: 'SCOPE Audit of agency work · User flow · Mid-fidelity wireframes · Brand identity · High-fidelity prototype · Website and mobile web app. PRIORITIES I started with the user flow, to simplify how people build a menu and reach recipes. Wireframes then focused on the two core journeys: recipe listing and menu building.',
        breakdown: [
          {
            label: 'SCOPE',
            text: 'Audit of agency work · User flow · Mid-fidelity wireframes · Brand identity · High-fidelity prototype · Website and mobile web app'
          },
          {
            label: 'PRIORITIES',
            text: 'I started with the user flow, to simplify how people build a menu and reach recipes. Wireframes then focused on the two core journeys: recipe listing and menu building.'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'User Flow Architecture & Core Journeys',
        graphicDetails: {
          caption: 'User Flow Architecture & Core Journeys'
        }
      },
      {
        number: '03',
        phaseLabel: 'REVIEW',
        title: 'Alignment',
        subtitle: 'WIREFRAMES TESTED BEFORE HIGH-FIDELITY',
        description: "STAKEHOLDER FEEDBACK After the agency's work fell short, the team trusted me with the UX/UI lead. Mid-fidelity wireframes let us test and refine the experience before moving to high-fidelity.",
        breakdown: [
          {
            label: 'STAKEHOLDER FEEDBACK',
            text: "After the agency's work fell short, the team trusted me with the UX/UI lead. Mid-fidelity wireframes let us test and refine the experience before moving to high-fidelity."
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'Mid-Fidelity Wireframe Validation',
        graphicDetails: {
          caption: 'Mid-Fidelity Wireframe Validation'
        }
      },
      {
        number: '04',
        phaseLabel: 'EXECUTION',
        title: 'Delivery',
        subtitle: 'FROM USER FLOW TO HIGH-FIDELITY',
        description: 'LEADERSHIP As UX/UI designer, brand designer and design coordinator, I worked with the Digital Ecosystem Lead and the partner agency\'s developer, handing over clear information for the build, to take MyMenuIQ from the reimagined user flow to a consistent, cohesive high-fidelity product. DESIGN DECISIONS Simplified the user flow. A shorter, more intuitive path to a balanced menu and its recipes. Warm, welcoming palette. It builds trust and approachability, and conveys the scientific expertise behind the recipes. Typography linked to Maggi. It connects the two brands while staying highly readable for nutritional information. A logo that carries the message. It stands for Nestlé\'s nutrition science, delivered through one user-friendly tool. DELIVERABLES Flow diagram · Mid-fidelity wireframes (web and mobile) · Brand identity · High-fidelity interactive prototype',
        breakdown: [
          {
            label: 'LEADERSHIP',
            text: "As UX/UI designer, brand designer and design coordinator, I worked with the Digital Ecosystem Lead and the partner agency's developer, handing over clear information for the build, to take MyMenuIQ from the reimagined user flow to a consistent, cohesive high-fidelity product."
          },
          {
            label: 'DESIGN DECISIONS',
            text: 'Simplified the user flow. A shorter, more intuitive path to a balanced menu and its recipes.\nWarm, welcoming palette. It builds trust and approachability, and conveys the scientific expertise behind the recipes.\nTypography linked to Maggi. It connects the two brands while staying highly readable for nutritional information.\nA logo that carries the message. It stands for Nestlé\'s nutrition science, delivered through one user-friendly tool.'
          },
          {
            label: 'DELIVERABLES',
            text: 'Flow diagram · Mid-fidelity wireframes (web and mobile) · Brand identity · High-fidelity interactive prototype'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'High-Fidelity Product Delivery & Design System',
        graphicDetails: {
          caption: 'High-Fidelity Product Delivery & Design System'
        }
      },
      {
        number: '05',
        phaseLabel: 'RELEASE',
        title: 'Impact',
        subtitle: 'LIVE ON 13 PLATFORMS',
        description: 'LAUNCH MyMenuIQ went live as a website and mobile web app. It was rolled out online in 6 countries in Central West Africa and in Mexico, then reached 13 platforms by April 2021. RESULTS 82% of consumers who used the meal score agreed it helped them choose better, healthier side dishes. (Nestlé, April 2021)',
        breakdown: [
          {
            label: 'LAUNCH',
            text: 'MyMenuIQ went live as a website and mobile web app. It was rolled out online in 6 countries in Central West Africa and in Mexico, then reached 13 platforms by April 2021.'
          },
          {
            label: 'RESULTS',
            text: '82% of consumers who used the meal score agreed it helped them choose better, healthier side dishes. (Nestlé, April 2021)'
          }
        ],
        infographicType: 'image',
        imagePlaceholder: true,
        imageAlt: 'Platform Rollout & Consumer Adoption Metrics',
        graphicDetails: {
          caption: 'Platform Rollout & Consumer Adoption Metrics'
        }
      },
      {
        number: '06',
        phaseLabel: 'RETROSPECTIVE',
        title: 'Reflection',
        subtitle: 'MY FIRST LAUNCHED DIGITAL SERVICE',
        description: "WHAT I LEARNED MyMenuIQ was the first digital service I took all the way to launch. Figma had just been approved as a Nestlé tool, so I learned it on the project, and I learned to give the partner agency's developer clear information for the build. WHAT I'D CARRY FORWARD Clear, early communication with developers, so the design reaches the build intact.",
        breakdown: [
          {
            label: 'WHAT I LEARNED',
            text: "MyMenuIQ was the first digital service I took all the way to launch. Figma had just been approved as a Nestlé tool, so I learned it on the project, and I learned to give the partner agency's developer clear information for the build."
          },
          {
            label: "WHAT I'D CARRY FORWARD",
            text: 'Clear, early communication with developers, so the design reaches the build intact.'
          }
        ],
        infographicType: 'none'
      }
    ]
  }
];

export const aboutData: AboutData = {
  name: 'Lyne Olmedo-Revaz',
  title: 'Swiss Creative Director & Digital Product Architect',
  location: '📍Based in Switzerland (CET)',
  statementHeadline: 'Meet the designer',
  statementPill: "Hi, I'm Lyne!",
  bioParagraphs: [
    "Multifaceted professional with 5+ years' experience crafting product design systems and brand identities for SaaS and global brands. Led end-to-end projects from research and strategy to pixel-perfect execution in agile, fast paced, and remote work environments; skilled at turning complex business problems into clear, user-centered solutions and leveraging AI tools to accelerate workflows."
  ],
  philosophyQuotes: [
    {
      quote: 'When hierarchy is clear and spacing is intentional, meaning becomes effortless.',
      author: 'Lyne Olmedo-Revaz',
      context: 'On Swiss Grid Precision'
    },
    {
      quote: 'Structure does the communicating; decoration is almost entirely absent.',
      author: 'Design Principle',
      context: 'Quiet Luxury Architecture'
    }
  ],
  timeline: [
    {
      period: 'JAN 2025 – PRESENT',
      yearRange: 'JAN 2025 – PRESENT',
      role: 'Design Consultant',
      company: 'OJO',
      location: 'Remote・Freelance',
      description: 'Led end-to-end brand and product design projects for clients, creating interactive prototypes and developer-ready specs and translating business goals into responsive interfaces and cohesive visual design systems.',
      highlightTag: 'CURRENT'
    },
    {
      period: 'OCT 2023 – JAN 2025',
      yearRange: 'OCT 2023 – JAN 2025',
      role: 'Design Manager',
      company: 'Peerdom',
      location: 'Bern, Switzerland・Contract',
      description: "Led requirements and design for a SaaS platform's first sign-up, onboarding, and billing flows, delivered a brand and website relaunch in 3 months with a cross-functional team of 4, and built a Figma design system that cut delivery time by 50%.",
      highlightTag: 'LEADERSHIP'
    },
    {
      period: 'JUN 2020 – JAN 2023',
      yearRange: 'JUN 2020 – JAN 2023',
      role: 'Design Coordinator',
      company: 'Nestle',
      location: 'Vevey, Switzerland・Contract',
      description: 'Owned UX/UI delivery of digital nutrition services and websites, and drove multi-market brand guideline adoption, achieving 100% web and packaging compliance through agency and stakeholder management.',
      highlightTag: 'GLOBAL BRAND'
    },
    {
      period: 'OCT 2019 – MAY 2020',
      yearRange: 'OCT 2019 – MAY 2020',
      role: 'Graphic Designer',
      company: 'Hublot',
      location: 'Nyon, Switzerland・Contract',
      description: 'Created high-end sales materials for special-edition watches, and managed print partners.',
      highlightTag: 'HOROLOGY'
    }
  ],
  skills: [
    'Design Systems & Grid Architecture',
    'Interactive Dial & Radial Ergonomics',
    'Creative Direction & Editorial Monograph',
    'Swiss Typography & Bespoke Type',
    'Spatial UI & Ambient Displays',
    'Tactile Sound & Micro-Haptics',
    'Zero-Glance Peripheral Computing',
    'WebGPU / Canvas Shader Engineering'
  ],
  skillItems: [
    {
      title: 'Brand Ecosystem & Strategy',
      description: 'Keeping brand and product cohesive across channels.'
    },
    {
      title: 'UX Research & Market Analysis',
      description: 'Studying customer needs, market trends and competitor insights.'
    },
    {
      title: 'Requirements & User Stories',
      description: 'Creating detailed specifications, clear user stories, and product roadmaps.'
    },
    {
      title: 'User Flow & Prototyping',
      description: 'Mapping user journeys and prototyping user-centered solutions.'
    },
    {
      title: 'Design Systems',
      description: 'Building scalable component libraries that speed up design delivery.'
    },
    {
      title: 'Stakeholder Management',
      description: 'Aligning internal and external stakeholders.'
    },
    {
      title: 'Agile Methodology',
      description: 'Running short sprints and iterative development.'
    },
    {
      title: 'Multi-Market Rollout',
      description: 'Deploying brand and UX/UI standards across international markets.'
    },
    {
      title: 'AI-Powered Workflows',
      description: 'Using AI tools to move from idea to prototype faster.'
    }
  ],
  links: {
    linkedin: 'https://linkedin.com/in/lyne-olmedo-revaz',
    email: 'lyne@olmedo-revaz.ch',
    github: 'https://github.com/lyne-olmedo',
    readcv: 'https://read.cv/lyne.olmedo',
    locationCity: 'Zürich, Switzerland'
  }
};
