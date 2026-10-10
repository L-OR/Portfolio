import { Project, AboutData } from '../types';
import peerdomHeroImage from '../assets/images/Peerdom_Landing-page-before-after.png';
import almanacBenchmarkImage from '../assets/images/Almanac_home.png';
import competitiveBenchmarkImage from '../assets/images/Almanac_Product-Roadmap.jpg';
import mymenuiqThumbnail from '../assets/images/MyMenuIQ_Thumbnail.png';
import flyuxPersonas from '../assets/images/FlyUX_personas.png';
import flyuxBenchmark from '../assets/images/FlyUX_benchmark.png';
import flyuxSurvey from '../assets/images/FlyUX_survey.png';
import flyuxAffinity from '../assets/images/FlyUX_Affinity-diagram.png';
import flyuxJourney from '../assets/images/FlyUX_Customer-Journey-Map.png';
import flyuxFlow from '../assets/images/FlyUX_Flow-Diagram.png';
import flyuxSketch1 from '../assets/images/FlyUX_sketch1.png';
import flyuxSketch2 from '../assets/images/FlyUX_sketch2.png';
import flyuxHandover from '../assets/images/FlyUX_hand-over.png';
import flyuxUsability from '../assets/images/FlyUX_Usability-test.png';
import peerdomBenchmark from '../assets/images/Peerdom_Color-competitive-benchmark.png';
import peerdomStrategy from '../assets/images/Peerdom_brand-strategy.png';
import peerdomBrandBA from '../assets/images/Peerdom_brand-before-after.png';
import peerdomColorConcept from '../assets/images/Peerdom_color-concept.png';
import peerdomPalette from '../assets/images/Peerdom_color-palette.png';
import peerdomLogoBA from '../assets/images/Peerdom_logo-before-after.png';
import peerdomLogos from '../assets/images/Peerdom_logos.png';
import peerdomEvolution from '../assets/images/Peerdom_evolution.png';
import peerdomFavicon from '../assets/images/Peerdom_favicon.png';
export const portfolioProjects: Project[] = [
  {
    id: 'almanac',
    code: '01',
    title: 'Almanac',
    client: 'Personal Project',
    year: '2026',
    discipline: 'Financial Research Tool',
    tagline: 'Product design for a historical event-probability engine',
    overview: 'Designed a bias-free research tool for crypto traders, from idea to launch. Every stat answers three questions at a glance: up or down, by how much, and how much to trust it.',
    role: 'Project Manager & Product Designer',
    timeline: '2 Weeks',
    tools: ['Stitch', 'Google AI Studio', 'Claude', 'Figma Weave'],
    team: 'Personal Project',
    image: almanacBenchmarkImage,
    imageAlt: 'Almanac historical event-probability research engine interface',
    liveUrl: 'https://almanac.design',
    liveUrlLabel: 'Visit Almanac',
    liveDisabled: true,
    ctaEyebrow: 'DEPLOYED PRODUCT',
    ctaDescription: 'Coming soon :)',
    themeAccent: '#c83b2b',
    steps: [
      {
        number: '01',
        phaseLabel: 'INITIATION',
        title: 'Context',
        subtitle: 'FOLKLORE DRESSED UP AS ANALYSIS',
        description: 'PROBLEM: "Up-tober." "July is a red month." Seasonality claims spread through X threads and hand-built charts, with no hit-rate and no sample size. Traders can\'t tell a real pattern from noise. MARKET INSIGHTS: I benchmarked six tools: TradingView Seasonals, CoinGlass, Barchart, Brighter Data, Konseki and rt1m. Most offer dense dashboards limited to daily, weekly, monthly or quarterly views. None shows how far a result can be trusted. Two put their best features behind a paywall: Brighter Data (€59/month, and it asks users to confirm their own bias first) and Konseki ($49/year). GOALS: Build a free, transparent tool that shows the real historical odds after any recurring event. CONSTRAINTS: Solo project, no budget · AI tools used throughout · V1 limited to Bitcoin and calendar events',
        breakdown: [
          {
            label: 'PROBLEM',
            text: '"Up-tober." "July is a red month." Seasonality claims spread through X threads and hand-built charts, with no hit-rate and no sample size. Traders can\'t tell a real pattern from noise.'
          },
          {
            label: 'MARKET INSIGHTS',
            text: 'I benchmarked six tools: TradingView Seasonals, CoinGlass, Barchart, Brighter Data, Konseki and rt1m. Most offer dense dashboards limited to daily, weekly, monthly or quarterly views. None shows how far a result can be trusted. Two put their best features behind a paywall: Brighter Data (€59/month, and it asks users to confirm their own bias first) and Konseki ($49/year).'
          },
          {
            label: 'GOALS',
            text: 'Build a free, transparent tool that shows the real historical odds after any recurring event.'
          },
          {
            label: 'CONSTRAINTS',
            text: 'Solo project, no budget · AI tools used throughout · V1 limited to Bitcoin and calendar events'
          }
        ],
        infographicType: 'image',
        image: almanacBenchmarkImage,
        imageAlt: 'Six-Tool Competitive Market Insights & Benchmark Audit',
        graphicDetails: {
          caption: 'Six-Tool Competitive Market Insights & Benchmark Audit'
        }
      },
      {
        number: '02',
        phaseLabel: 'PLANNING',
        title: 'Scope',
        subtitle: 'UP OR DOWN?',
        description: 'SCOPE: Product concept · Competitive benchmarking · 3 user personas · Product principles · UX audit · Methodology page. PRIORITIES: I mapped every audience pain point against who already solves it. Most needs were already covered by competitors (the "dumb zone"). The winning zone was narrow: visible sample size, traceable methodology, bias-free design. So I built the product around trust rather than feature count. V1 stayed small on purpose: free browsing, account-gated favorites, no paid tiers, no export. PERSONAS: Markus, full-time trader: needs a clear answer in under 30 seconds. Priya, quant hobbyist: needs to see the math. Jordan, content creator: needs stats he can cite.',
        breakdown: [
          {
            label: 'SCOPE',
            text: 'Product concept · Competitive benchmarking · 3 user personas · Product principles · UX audit · Methodology page'
          },
          {
            label: 'PRIORITIES',
            text: 'I mapped every audience pain point against who already solves it. Most needs were already covered by competitors (the "dumb zone"). The winning zone was narrow: visible sample size, traceable methodology, bias-free design. So I built the product around trust rather than feature count. V1 stayed small on purpose: free browsing, account-gated favorites, no paid tiers, no export.'
          },
          {
            label: 'PERSONAS',
            text: 'Markus, full-time trader: needs a clear answer in under 30 seconds.\nPriya, quant hobbyist: needs to see the math.\nJordan, content creator: needs stats he can cite.'
          }
        ],
        infographicType: 'image',
        image: competitiveBenchmarkImage,
        imageAlt: 'Audience Pain Points & Feature Matrix Benchmark',
        graphicDetails: {
          caption: 'Audience Pain Points & Feature Matrix Benchmark'
        },
        additionalImages: [
          {
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',
            imageAlt: 'Traders, Quant Hobbyist & Creator Personas Matrix',
            caption: 'Traders, Quant Hobbyist & Creator Personas Matrix'
          }
        ]
      },
      {
        number: '03',
        phaseLabel: 'REVIEW',
        title: 'Alignment',
        subtitle: 'FROM FOLKLORE TO PRODUCT PRINCIPLES',
        description: 'STRATEGY: I turned the research into three product values: Reveal, don\'t predict · Show the receipts · Bias out, data in. Together they mean the product shows history, never gives advice, and always shows its evidence. RULES SET EARLY: Each rule answers a user need. Probability always leads, so the first thing a user sees is the answer. The headline magnitude is the median, not the mean, because BTC returns are skewed by outliers. Sample size is always visible, with a warning at n < 10, so a thin sample never looks like a strong pattern. Copy never uses "signal," "buy," "sell" or "should," because the tool informs decisions and doesn\'t make them. NAME DECISION: I ruled out "Trader\'s Almanac" for its closeness to the long-running Stock Trader\'s Almanac. Almanac evokes an old book that seems to know what\'s coming, while the product delivers verified statistics.',
        breakdown: [
          {
            label: 'STRATEGY',
            text: 'I turned the research into three product values: Reveal, don\'t predict · Show the receipts · Bias out, data in. Together they mean the product shows history, never gives advice, and always shows its evidence.'
          },
          {
            label: 'RULES SET EARLY',
            text: 'Each rule answers a user need:\n- Probability always leads, so the first thing a user sees is the answer.\n- The headline magnitude is the median, not the mean, because BTC returns are skewed by outliers.\n- Sample size is always visible, with a warning at n < 10, so a thin sample never looks like a strong pattern.\n- Copy never uses "signal," "buy," "sell" or "should," because the tool informs decisions and doesn\'t make them.'
          },
          {
            label: 'NAME DECISION',
            text: 'I ruled out "Trader\'s Almanac" for its closeness to the long-running Stock Trader\'s Almanac. Almanac evokes an old book that seems to know what\'s coming, while the product delivers verified statistics.'
          }
        ],
        infographicType: 'image',
        image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Product Principles: Reveal, Don\'t Predict & Show The Receipts',
        graphicDetails: {
          caption: 'Product Principles: Reveal, Don\'t Predict & Show The Receipts'
        }
      },
      {
        number: '04',
        phaseLabel: 'EXECUTION',
        title: 'Delivery',
        subtitle: 'Consistency and Clarity',
        description: 'USABILITY AUDIT: I walked through the full user flow and fixed nine inconsistencies. The recurring one: the same event showed different direction and magnitude on different pages, which breaks trust faster than any missing feature. I resolved it by enforcing a single source of truth for every stat.\n\nDESIGN DECISIONS:\nOne screen, one answer. The headline stat card leads with probability, then typical move, then sample size and date range, so users get all three answers in one glance.\nReliability built into the interface. Small-sample warnings sit on the stat itself, not in a footnote.\nNo signup wall. Users can browse and query freely. An account is only needed to save favorites.\nMethod for those who want the math. I rebuilt the Methodology page and rewrote the landing, events and footer copy so the same terms mean the same thing everywhere.',
        breakdown: [
          {
            label: 'USABILITY AUDIT',
            text: 'I walked through the full user flow and fixed nine inconsistencies. The recurring one: the same event showed different direction and magnitude on different pages, which breaks trust faster than any missing feature. I resolved it by enforcing a single source of truth for every stat.'
          },
          {
            label: 'DESIGN DECISIONS',
            text: 'One screen, one answer. The headline stat card leads with probability, then typical move, then sample size and date range, so users get all three answers in one glance.\nReliability built into the interface. Small-sample warnings sit on the stat itself, not in a footnote.\nNo signup wall. Users can browse and query freely. An account is only needed to save favorites.\nMethod for those who want the math. I rebuilt the Methodology page and rewrote the landing, events and footer copy so the same terms mean the same thing everywhere.'
          }
        ],
        infographicType: 'image',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'One Screen, One Answer UI Design Architecture',
        graphicDetails: {
          caption: 'One Screen, One Answer UI Design Architecture'
        },
        additionalImages: [
          {
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
            imageAlt: 'Single Source of Truth Usability & Consistency Audit',
            caption: 'Single Source of Truth Usability & Consistency Audit'
          },
          {
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
            imageAlt: 'Sub-Event Comparison Tables & Receipts Slide-out',
            caption: 'Sub-Event Comparison Tables & Receipts Slide-out'
          }
        ]
      },
      {
        number: '05',
        phaseLabel: 'RELEASE',
        title: 'Impact',
        subtitle: 'VERSION 1 IS READY!',
        description: 'OUTCOME: V1 is built and ready to be shipped, delivered in two weeks as a solo project.',
        breakdown: [
          {
            label: 'OUTCOME',
            text: 'V1 is built and ready to be shipped, delivered in two weeks as a solo project.'
          }
        ],
        infographicType: 'image',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'V1 Built and Ready for Release',
        graphicDetails: {
          caption: 'V1 Built and Ready for Release'
        }
      },
      {
        number: '06',
        phaseLabel: 'RETROSPECTIVE',
        title: 'Reflection',
        subtitle: 'AI-POWERED WORKFLOW',
        description: "WHAT WAS LEFT: The visual identity is still being finalized and will be revisited. The next version will add more event categories and connect the back end to real APIs. The product will be shipped as soon as these points are completed. WHAT I LEARNED: I learned to prototype with AI, going from research to a working prototype in two weeks. Google AI Studio turned out to be the best fit for the project's budget. I also found that including hand-drawn sketches of the interface in my prompts made the results more accurate, without needing a long prompt.",
        breakdown: [
          {
            label: 'WHAT WAS LEFT',
            text: 'The visual identity is still being finalized and will be revisited. The next version will add more event categories and connect the back end to real APIs. The product will be shipped as soon as these points are completed.'
          },
          {
            label: 'WHAT I LEARNED',
            text: "I learned to prototype with AI, going from research to a working prototype in two weeks. Google AI Studio turned out to be the best fit for the project's budget. I also found that including hand-drawn sketches of the interface in my prompts made the results more accurate, without needing a long prompt."
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
    year: '2024',
    discipline: 'Organizational Mapping Software',
    tagline: 'Brand identity and landing page for Saas start-up',
    overview: 'Rebranded a SaaS start-up in 3 months. The identity was adopted across its marketing website, social media and newsletter, well beyond the M&A campaign it was built for.',
    role: 'Project Manager, Brand Designer & UX/UI Designer',
    timeline: '3 months',
    tools: ['Figma', 'Illustrator', 'Photoshop', 'GitLab'],
    team: 'Developer, Paid Acquisition Specialist, Copywriter',
    image: peerdomHeroImage,
    imageAlt: 'Peerdom Before vs. After Landing Page Redesign',
    liveUrl: 'https://www.figma.com/proto/Ba80uc5QW7XmEeHRYN4Hz3/Peerdom?node-id=92-22386&t=T8JSgHXUepukrtc7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    liveUrlLabel: 'View Prototype',
    ctaEyebrow: 'PROTOTYPE',
    ctaDescription: "Check out the interactive prototype of Peerdom's Merger & Acquisition landing page.",
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
        image: peerdomBenchmark,
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
        image: peerdomStrategy,
        imageAlt: 'Brand Strategy',
        graphicDetails: {
          caption: 'Brand Strategy'
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
        image: peerdomColorConcept,
        imageAlt: 'Brand gradient concept presentation & founders consensus',
        graphicDetails: {
          caption: 'Brand gradient concept presentation & founders consensus'
        },
        additionalImages: [
          {
            image: peerdomLogoBA,
            imageAlt: 'Logo evolution',
            caption: 'Logo evolution'
          }
        ]
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
        image: peerdomPalette,
        imageAlt: 'Color palette',
        graphicDetails: {
          caption: 'Color palette'
        },
        additionalImages: [
          {
            image: peerdomLogos,
            imageAlt: 'Peerdom logos',
            caption: 'Peerdom logos'
          },
          {
            image: peerdomBrandBA,
            imageAlt: 'Brand identity evolution',
            caption: 'Brand identity evolution'
          }
        ]
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
        image: peerdomFavicon,
        imageAlt: 'Peerdom favicon',
        graphicDetails: {
          caption: 'Peerdom favicon'
        },
        additionalImages: [
          {
            image: peerdomEvolution,
            imageAlt: 'M&A Landing page campaign evolution',
            caption: 'M&A Landing page campaign evolution'
          }
        ]
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
    imageAlt: 'FlyUX FigJam Research & Design Board',
    embedUrl: 'https://embed.figma.com/board/zWVAz4xg0wcB5ybiCAsgMQ/Fly-UX?node-id=0-1&embed-host=share',
    figmaUrl: 'https://www.figma.com/board/zWVAz4xg0wcB5ybiCAsgMQ/Fly-UX?node-id=0-1&t=b1FH71pi4mOJVluM-1',
    liveUrl: 'https://www.figma.com/proto/Ore9Cib3qlUr33VtL9BK6G/Fly-UX?node-id=2-2&starting-point-node-id=2%3A2&t=KvJpAul6epB3OZHC-1',
    liveUrlLabel: 'View Prototype',
    ctaEyebrow: 'PROTOTYPE',
    ctaDescription: "Check out the interactive prototype for desktop of FlyUX Airline's flight booking process.",
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
        infographicType: 'none'
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
        image: flyuxBenchmark,
        imageAlt: 'UX competitive benchmark of a flight booking process',
        graphicDetails: {
          caption: 'Competitive Benchmark'
        },
        additionalImages: [
          {
            image: flyuxSurvey,
            imageAlt: 'Online Booking Survey & Quantitative Data Analysis',
            caption: 'Online Booking Survey & Quantitative Data Analysis'
          },
          {
            image: flyuxUsability,
            imageAlt: 'Remote Usability Testing Sessions',
            caption: 'Remote Usability Testing Sessions'
          },
          {
            image: flyuxPersonas,
            imageAlt: 'User Personas',
            caption: 'Three User Personas'
          }
        ]
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
        image: flyuxAffinity,
        imageAlt: 'Affinity Diagram',
        graphicDetails: {
          caption: 'Affinity Diagram'
        },
        additionalImages: [
          {
            image: flyuxJourney,
            imageAlt: 'Booking Customer Journey & Pain Point Analysis',
            caption: 'Booking Customer Journey & Pain Point Analysis'
          }
        ]
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
        image: flyuxFlow,
        imageAlt: 'User Flow Diagram & Five-Screen Architecture',
        graphicDetails: {
          caption: 'User Flow Diagram & Five-Screen Architecture'
        },
        additionalImages: [
          {
            image: flyuxSketch1,
            imageAlt: 'Low-Fidelity Screen Sketches',
            caption: 'Low-Fidelity Screen Sketches'
          }
        ]
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
        image: flyuxHandover,
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
        description: "WHAT I LEARNED This project let me run the full UX design process on my own. I learned to conduct complete UX research, extract concrete insights from the data, and turn them into user-friendly design decisions. WHAT I'D DO DIFFERENTLY In 2026, I could take the project further, and faster, by also handing over an interactive prototype.",
        breakdown: [
          {
            label: 'WHAT I LEARNED',
            text: 'This project let me run the full UX design process on my own. I learned to conduct complete UX research, extract concrete insights from the data, and turn them into user-friendly design decisions.'
          },
          {
            label: "WHAT I'D DO DIFFERENTLY",
            text: 'In 2026, I could take the project further, and faster, by also handing over an interactive prototype.'
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
    image: mymenuiqThumbnail,
    imageAlt: 'MyMenuIQ digital nutrition service interface for Nestle',
    liveUrl: 'https://www.figma.com/proto/vXUrn6Ap4NGgwKJ8NjPip7/MAGGI-Web?page-id=0%3A1&type=design&node-id=836-5822&viewport=2197%2C-853%2C0.22&t=ro1ObmlWpthapnUt-1&scaling=min-zoom&starting-point-node-id=836%3A5822&show-proto-sidebar=1',
    liveUrlLabel: 'View Prototype',
    ctaEyebrow: 'PROTOTYPE',
    ctaDescription: 'Check out the interactive prototype for mobile of MyMenu IQ™.',
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
        infographicType: 'none'
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
        image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=1200&q=80',
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
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Mid-Fidelity Wireframe Validation',
        graphicDetails: {
          caption: 'Mid-Fidelity Wireframe Validation'
        },
        additionalImages: [
          {
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
            imageAlt: 'Stakeholder Alignment & Experience Refinement',
            caption: 'Stakeholder Alignment & Experience Refinement'
          }
        ]
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
        image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'High-Fidelity Product Delivery & Design System',
        graphicDetails: {
          caption: 'High-Fidelity Product Delivery & Design System'
        },
        additionalImages: [
          {
            image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80',
            imageAlt: 'Reimagined User Flow & Recipe Journey Diagram',
            caption: 'Reimagined User Flow & Recipe Journey Diagram'
          },
          {
            image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
            imageAlt: 'Responsive Web & Mobile Wireframe Architecture',
            caption: 'Responsive Web & Mobile Wireframe Architecture'
          },
          {
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
            imageAlt: 'Brand Identity & Approachable Warm Palette System',
            caption: 'Brand Identity & Approachable Warm Palette System'
          }
        ]
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
        infographicType: 'metrics',
        graphicDetails: {
          tag: 'ROLLOUT & ADOPTION TELEMETRY',
          caption: 'Nestlé MyMenuIQ verified launch adoption & impact metrics (April 2021)',
          metrics: [
            { label: 'Platforms', value: '13' },
            { label: 'Countries', value: '6' },
            { label: 'Positive Consumer Feedback', value: '82%' }
          ]
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
    "I've worked across brand and digital product for the past 5 years. For me, a brand and a product are one experience. That's why I design ecosystems. I act as both strategist and gardien: I keep the brand and the user experience consistent on every touchpoint, and I plan how the product evolves."
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
