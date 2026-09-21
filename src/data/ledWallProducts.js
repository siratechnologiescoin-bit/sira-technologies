import {
  Monitor,
  Tv,
  PanelsTopLeft,
  Presentation,
  Megaphone,
  Building2,
  ShoppingBag,
  Store,
  Video,
  Maximize,
  Sun,
  Moon,
  Layers,
  SlidersHorizontal,
  Projector,
  Cog,
} from "lucide-react";

const ledWallProducts = [
  // =========================================================
  // LED WALLS
  // =========================================================

  {
    id: "led-indoor-wall",
    name: "Indoor LED Wall",
    category: "LED Wall & Digital Display",
    service: "LED Display",
    type: "LED Wall",
    subtype: "Indoor LED Wall",

    description:
      "High-quality indoor LED display designed for presentations, advertising, events, meeting spaces, showrooms, and large visual installations.",

    useCases: [
      "Corporate presentations",
      "Conference rooms",
      "Shopping malls",
      "Retail showrooms",
      "Hotels",
      "Auditoriums",
      "Event stages",
      "Advertising displays",
      "Reception areas",
      "Control rooms",
    ],

    environments: [
      "Indoor",
      "Office",
      "Mall",
      "Hotel",
      "Auditorium",
      "Showroom",
      "Event Venue",
    ],

    specifications: {
      displayType: "Direct View LED",
      installation: "Wall Mount / Fixed Installation",
      brightness: "Indoor Brightness",
      viewing: "Wide Viewing Angle",
      content: "Video / Image / Presentation / Advertisement",
    },

    features: [
      "High-resolution display",
      "Seamless large screen",
      "Wide viewing angle",
      "Bright and clear visuals",
      "Modular installation",
      "Easy content management",
      "Suitable for long operating hours",
    ],

    keywords: [
      "indoor led wall",
      "indoor led display",
      "office led wall",
      "mall led wall",
      "conference led wall",
      "auditorium led display",
      "event led screen",
    ],

    tags: ["Indoor", "LED Wall", "Display", "Advertising"],

    icon: Monitor,
  },

  {
    id: "led-outdoor-wall",
    name: "Outdoor LED Wall",
    category: "LED Wall & Digital Display",
    service: "LED Display",
    type: "LED Wall",
    subtype: "Outdoor LED Wall",

    description:
      "High-brightness LED display designed for outdoor advertising, building facades, public areas, events, and locations where the screen must remain visible in daylight.",

    useCases: [
      "Outdoor advertising",
      "Building advertisements",
      "Shopping mall exteriors",
      "Roadside advertising",
      "Public information",
      "Outdoor events",
      "Stadiums",
      "Commercial buildings",
      "Petrol stations",
      "Large business premises",
    ],

    environments: [
      "Outdoor",
      "Building Exterior",
      "Roadside",
      "Stadium",
      "Public Area",
      "Commercial Area",
    ],

    specifications: {
      displayType: "Outdoor Direct View LED",
      brightness: "High Brightness",
      installation: "Wall Mount / Structure Mount",
      visibility: "Day and Night Visibility",
      content: "Video / Image / Advertisement / Information",
    },

    features: [
      "High brightness",
      "Outdoor visibility",
      "Large screen sizes",
      "Modular panels",
      "Wide viewing angle",
      "Weather-resistant installation options",
      "Remote content management",
    ],

    keywords: [
      "outdoor led wall",
      "outdoor led display",
      "advertising led screen",
      "building led display",
      "roadside led screen",
      "stadium led screen",
      "outdoor digital display",
    ],

    tags: ["Outdoor", "LED Wall", "Advertising", "Large Display"],

    icon: Tv,
  },

  {
    id: "led-advertising-wall",
    name: "LED Advertising Wall",
    category: "LED Wall & Digital Display",
    service: "LED Display",
    type: "LED Wall",
    subtype: "Advertising Display",

    description:
      "Large-format LED advertising screen for displaying promotional videos, product advertisements, offers, branding, and customer information.",

    useCases: [
      "Product advertising",
      "Brand promotion",
      "Retail advertisements",
      "Mall advertising",
      "Restaurant promotions",
      "Hotel promotions",
      "Corporate branding",
      "Outdoor campaigns",
      "Event promotions",
    ],

    environments: [
      "Mall",
      "Retail Store",
      "Showroom",
      "Hotel",
      "Restaurant",
      "Outdoor Commercial Area",
    ],

    specifications: {
      displayType: "LED Advertising Display",
      content: "Video / Image / Text",
      installation: "Indoor / Outdoor",
      management: "Media Player / Network Control",
    },

    features: [
      "Large advertising area",
      "Bright visuals",
      "Video playback",
      "Remote content updates",
      "Multiple content formats",
      "Branding support",
    ],

    keywords: [
      "led advertising wall",
      "advertising led screen",
      "digital advertising screen",
      "mall advertising display",
      "shop advertising led",
      "commercial led display",
    ],

    tags: ["Advertising", "LED", "Digital Display"],

    icon: Megaphone,
  },

  {
    id: "led-stage-wall",
    name: "LED Stage Wall",
    category: "LED Wall & Digital Display",
    service: "LED Display",
    type: "LED Wall",
    subtype: "Stage LED Screen",

    description:
      "Large LED screen designed for events, stage backgrounds, conferences, concerts, exhibitions, and live programs.",

    useCases: [
      "Corporate events",
      "Conferences",
      "Concerts",
      "Stage programs",
      "Wedding events",
      "Exhibitions",
      "Product launches",
      "Live shows",
      "Award functions",
    ],

    environments: [
      "Event Hall",
      "Auditorium",
      "Stage",
      "Exhibition",
      "Outdoor Event",
    ],

    specifications: {
      displayType: "Direct View LED",
      content: "Live Video / Graphics / Presentation",
      installation: "Fixed / Temporary Event Installation",
      input: "Video Processor / Media System",
    },

    features: [
      "Large seamless display",
      "Live video support",
      "Stage background support",
      "High brightness",
      "Wide viewing angle",
      "Modular design",
    ],

    keywords: [
      "stage led wall",
      "event led screen",
      "concert led wall",
      "conference led screen",
      "wedding led screen",
      "live event led display",
    ],

    tags: ["Stage", "Events", "LED Wall"],

    icon: Presentation,
  },

  {
    id: "led-video-wall",
    name: "Large Format LED Video Wall",
    category: "LED Wall & Digital Display",
    service: "LED Display",
    type: "Video Wall",
    subtype: "Large Format LED",

    description:
      "Large seamless LED video wall for organizations that require a highly visible display across a wide viewing area.",

    useCases: [
      "Corporate buildings",
      "Shopping malls",
      "Auditoriums",
      "Control rooms",
      "Public information",
      "Large advertising",
      "Events",
      "Transportation areas",
    ],

    environments: [
      "Corporate",
      "Mall",
      "Auditorium",
      "Public Area",
      "Event Venue",
    ],

    specifications: {
      displayType: "Direct View LED",
      format: "Large Format",
      installation: "Custom Structure",
      content: "Video / Image / Presentation / Live Feed",
    },

    features: [
      "Large display area",
      "Seamless appearance",
      "Scalable panel design",
      "Multiple input sources",
      "Wide viewing angle",
      "Custom installation",
    ],

    keywords: [
      "large led video wall",
      "big led screen",
      "large format led display",
      "video wall led",
      "commercial video wall",
    ],

    tags: ["Video Wall", "Large Format", "LED"],

    icon: Maximize,
  },

  // =========================================================
  // PIXEL PITCH / RESOLUTION OPTIONS
  // =========================================================

  {
    id: "led-fine-pitch",
    name: "Fine Pitch LED Display",
    category: "LED Wall & Digital Display",
    service: "LED Display",
    type: "LED Wall",
    subtype: "Fine Pixel Pitch",

    description:
      "Fine-pitch LED display designed for close viewing distances where sharper text, graphics, presentations, and detailed video are required.",

    useCases: [
      "Boardrooms",
      "Conference rooms",
      "Corporate presentations",
      "Control rooms",
      "Premium showrooms",
      "Broadcast environments",
      "Indoor advertising",
    ],

    environments: [
      "Indoor",
      "Office",
      "Boardroom",
      "Control Room",
      "Studio",
      "Showroom",
    ],

    specifications: {
      pixelPitch: "Fine Pixel Pitch",
      displayType: "Direct View LED",
      viewingDistance: "Short to Medium Distance",
      content: "Text / Graphics / Video / Presentation",
    },

    features: [
      "Sharp close-range image",
      "Fine pixel structure",
      "High image detail",
      "Seamless display",
      "Suitable for presentations",
      "Premium indoor applications",
    ],

    keywords: [
      "fine pitch led",
      "fine pixel led",
      "small pixel pitch led",
      "premium led wall",
      "boardroom led display",
      "control room led",
    ],

    tags: ["Fine Pitch", "Indoor", "Premium"],

    icon: PanelsTopLeft,
  },

  {
    id: "led-p2-display",
    name: "P2 LED Display",
    category: "LED Wall & Digital Display",
    service: "LED Display",
    type: "LED Wall",
    subtype: "P2 LED",

    description:
      "High-density LED display suitable for indoor applications where viewers are relatively close to the screen.",

    useCases: [
      "Conference rooms",
      "Control rooms",
      "Premium advertising",
      "Corporate offices",
      "Showrooms",
      "Auditoriums",
    ],

    environments: [
      "Indoor",
      "Office",
      "Control Room",
      "Showroom",
      "Auditorium",
    ],

    specifications: {
      pixelPitch: "P2",
      displayType: "Fine Pitch LED",
      application: "Close Viewing",
    },

    features: [
      "High pixel density",
      "Sharp text",
      "Detailed graphics",
      "Seamless display",
      "Suitable for close viewing",
    ],

    keywords: [
      "p2 led",
      "p2 led wall",
      "p2 display",
      "p2 indoor led",
      "high resolution led wall",
    ],

    tags: ["P2", "Fine Pitch", "Indoor"],

    icon: Layers,
  },

  {
    id: "led-p3-display",
    name: "P3 LED Display",
    category: "LED Wall & Digital Display",
    service: "LED Display",
    type: "LED Wall",
    subtype: "P3 LED",

    description:
      "Versatile LED display suitable for indoor advertising, events, offices, retail spaces, and medium-distance viewing.",

    useCases: [
      "Retail advertising",
      "Office displays",
      "Events",
      "Conference halls",
      "Showrooms",
      "Auditoriums",
    ],

    environments: [
      "Indoor",
      "Retail",
      "Office",
      "Event Hall",
      "Showroom",
    ],

    specifications: {
      pixelPitch: "P3",
      displayType: "LED",
      application: "Medium Viewing Distance",
    },

    features: [
      "Good image clarity",
      "Wide application range",
      "Seamless display",
      "Modular construction",
      "Video and image playback",
    ],

    keywords: [
      "p3 led",
      "p3 led wall",
      "p3 display",
      "indoor p3 led",
      "event p3 led",
    ],

    tags: ["P3", "Indoor", "LED"],

    icon: Monitor,
  },

  {
    id: "led-p4-display",
    name: "P4 LED Display",
    category: "LED Wall & Digital Display",
    service: "LED Display",
    type: "LED Wall",
    subtype: "P4 LED",

    description:
      "Popular LED display option for medium-to-large indoor and outdoor installations where viewers are positioned farther from the screen.",

    useCases: [
      "Outdoor advertising",
      "Large halls",
      "Events",
      "Shopping areas",
      "Building displays",
      "Stage backgrounds",
      "Public information",
    ],

    environments: [
      "Indoor",
      "Outdoor",
      "Event",
      "Commercial Area",
      "Public Area",
    ],

    specifications: {
      pixelPitch: "P4",
      displayType: "LED",
      application: "Medium to Long Viewing Distance",
    },

    features: [
      "Large display capability",
      "High brightness options",
      "Suitable for outdoor applications",
      "Modular installation",
      "Video playback",
    ],

    keywords: [
      "p4 led",
      "p4 led wall",
      "p4 outdoor led",
      "p4 display",
      "large outdoor led",
    ],

    tags: ["P4", "Outdoor", "LED"],

    icon: Sun,
  },

  {
    id: "led-p5-display",
    name: "P5 LED Display",
    category: "LED Wall & Digital Display",
    service: "LED Display",
    type: "LED Wall",
    subtype: "P5 LED",

    description:
      "High-brightness LED display commonly used for large outdoor advertising screens, building displays, events, and public information.",

    useCases: [
      "Outdoor advertising",
      "Roadside advertising",
      "Building facades",
      "Large events",
      "Stadiums",
      "Public displays",
      "Commercial signage",
    ],

    environments: [
      "Outdoor",
      "Roadside",
      "Building Exterior",
      "Stadium",
      "Public Area",
    ],

    specifications: {
      pixelPitch: "P5",
      displayType: "Outdoor LED",
      application: "Long Viewing Distance",
    },

    features: [
      "High brightness",
      "Large screen support",
      "Outdoor visibility",
      "Modular panels",
      "Suitable for large installations",
    ],

    keywords: [
      "p5 led",
      "p5 led wall",
      "p5 outdoor led",
      "p5 advertising screen",
      "large p5 display",
    ],

    tags: ["P5", "Outdoor", "Advertising"],

    icon: Sun,
  },

  // =========================================================
  // DIGITAL SIGNAGE
  // =========================================================

  {
    id: "digital-signage-display",
    name: "Digital Signage Display",
    category: "LED Wall & Digital Display",
    service: "Digital Signage",
    type: "Digital Display",
    subtype: "Digital Signage",

    description:
      "Commercial digital display for showing advertisements, menus, announcements, offers, directions, and customer information.",

    useCases: [
      "Retail advertisements",
      "Restaurant menus",
      "Hotel information",
      "Office announcements",
      "Hospital information",
      "School announcements",
      "Shopping mall information",
      "Reception displays",
    ],

    environments: [
      "Retail",
      "Restaurant",
      "Hotel",
      "Office",
      "Hospital",
      "School",
      "Mall",
    ],

    specifications: {
      displayType: "Commercial Digital Display",
      content: "Images / Videos / Text",
      management: "Media Player / Network",
      orientation: "Landscape / Portrait",
    },

    features: [
      "Digital content display",
      "Remote content updates",
      "Video playback",
      "Image and text support",
      "Portrait and landscape options",
      "Scheduled content",
    ],

    keywords: [
      "digital signage",
      "digital display",
      "advertising display",
      "menu display",
      "commercial display",
      "digital information display",
    ],

    tags: ["Digital Signage", "Advertising", "Display"],

    icon: PanelsTopLeft,
  },

  {
    id: "digital-menu-board",
    name: "Digital Menu Board",
    category: "LED Wall & Digital Display",
    service: "Digital Signage",
    type: "Digital Display",
    subtype: "Menu Board",

    description:
      "Digital menu display for restaurants, cafes, food courts, hotels, and quick-service outlets.",

    useCases: [
      "Restaurant menus",
      "Cafe menus",
      "Food courts",
      "Fast food outlets",
      "Hotel restaurants",
      "Bakery displays",
      "Promotional offers",
    ],

    environments: [
      "Restaurant",
      "Cafe",
      "Food Court",
      "Hotel",
      "Retail",
    ],

    specifications: {
      displayType: "Commercial Display",
      content: "Menu / Images / Video / Pricing",
      orientation: "Landscape / Portrait",
    },

    features: [
      "Easy menu updates",
      "Promotional content",
      "High visibility",
      "Digital pricing",
      "Multiple screen support",
    ],

    keywords: [
      "digital menu",
      "digital menu board",
      "restaurant display",
      "cafe digital menu",
      "food court display",
      "menu screen",
    ],

    tags: ["Menu", "Restaurant", "Digital Signage"],

    icon: ShoppingBag,
  },

  {
    id: "retail-advertising-display",
    name: "Retail Advertising Display",
    category: "LED Wall & Digital Display",
    service: "Digital Signage",
    type: "Digital Display",
    subtype: "Retail Display",

    description:
      "Digital advertising display for retail stores and showrooms to highlight products, promotions, discounts, and brand content.",

    useCases: [
      "Product promotions",
      "Discount campaigns",
      "Brand advertisements",
      "Store information",
      "Product videos",
      "New product launches",
    ],

    environments: [
      "Retail Store",
      "Showroom",
      "Shopping Mall",
      "Brand Store",
    ],

    specifications: {
      displayType: "Commercial Digital Display",
      content: "Video / Image / Text",
      installation: "Wall Mount / Stand Mount",
    },

    features: [
      "Promotional content",
      "Product presentation",
      "Video advertising",
      "Easy content replacement",
      "High visibility",
    ],

    keywords: [
      "retail display",
      "retail advertising screen",
      "shop digital display",
      "showroom display",
      "product advertising screen",
    ],

    tags: ["Retail", "Advertising", "Digital Display"],

    icon: Store,
  },

  // =========================================================
  // VIDEO WALL / CONTROL ROOM
  // =========================================================

  {
    id: "control-room-led-wall",
    name: "Control Room LED Wall",
    category: "LED Wall & Digital Display",
    service: "LED Display",
    type: "LED Wall",
    subtype: "Control Room Display",

    description:
      "Large-format display system for monitoring multiple video feeds, dashboards, maps, alerts, and operational information.",

    useCases: [
      "Security control rooms",
      "CCTV monitoring",
      "Network operation centers",
      "Server monitoring",
      "Traffic monitoring",
      "Industrial monitoring",
      "Command centers",
    ],

    environments: [
      "Control Room",
      "Security Room",
      "NOC",
      "SOC",
      "Industrial Facility",
    ],

    specifications: {
      displayType: "LED Video Wall",
      content: "CCTV / Dashboard / Maps / Live Feeds",
      input: "Video Processor / Multiple Sources",
      installation: "Fixed",
    },

    features: [
      "Multiple video sources",
      "Large monitoring area",
      "Continuous operation support",
      "Dashboard visualization",
      "CCTV display support",
      "Custom screen layout",
    ],

    keywords: [
      "control room led wall",
      "cctv video wall",
      "security control room display",
      "noc led wall",
      "monitoring video wall",
      "command center display",
    ],

    tags: ["Control Room", "CCTV", "Monitoring"],

    icon: SlidersHorizontal,
  },

  {
    id: "cctv-video-wall",
    name: "CCTV Video Wall Display",
    category: "LED Wall & Digital Display",
    service: "CCTV Display",
    type: "Video Wall",
    subtype: "CCTV Monitoring Display",

    description:
      "Large display solution for viewing multiple CCTV camera feeds together in security monitoring and surveillance environments.",

    useCases: [
      "CCTV monitoring",
      "Security operations",
      "Warehouse surveillance",
      "Factory monitoring",
      "Campus security",
      "Hospital security",
      "Apartment security",
    ],

    environments: [
      "Security Room",
      "Control Room",
      "Warehouse",
      "Factory",
      "Campus",
      "Hospital",
      "Apartment",
    ],

    specifications: {
      displayType: "LED / Video Wall",
      content: "Multiple CCTV Camera Feeds",
      source: "NVR / DVR / Video Processor",
      operation: "Continuous Monitoring",
    },

    features: [
      "Multiple camera feeds",
      "Large viewing area",
      "Centralized monitoring",
      "Multi-screen layouts",
      "Suitable for security operations",
    ],

    keywords: [
      "cctv video wall",
      "cctv display wall",
      "security monitoring screen",
      "camera monitoring wall",
      "nvr video wall",
      "surveillance video wall",
    ],

    tags: ["CCTV", "Video Wall", "Security"],

    icon: Video,
  },

  // =========================================================
  // SPECIALIZED DISPLAYS
  // =========================================================

  {
    id: "interactive-led-display",
    name: "Interactive Display",
    category: "LED Wall & Digital Display",
    service: "Interactive Display",
    type: "Interactive Display",
    subtype: "Touch Display",

    description:
      "Interactive large-format display designed for classrooms, meeting rooms, training sessions, presentations, and collaborative work.",

    useCases: [
      "Smart classrooms",
      "Corporate meetings",
      "Training rooms",
      "Presentations",
      "Workshops",
      "Educational institutions",
      "Collaborative sessions",
    ],

    environments: [
      "School",
      "College",
      "Office",
      "Training Center",
      "Meeting Room",
    ],

    specifications: {
      displayType: "Interactive Touch Display",
      input: "Touch",
      content: "Presentation / Whiteboard / Video / Documents",
      installation: "Wall Mount / Mobile Stand",
    },

    features: [
      "Touch interaction",
      "Digital whiteboard",
      "Presentation support",
      "Annotation",
      "Video playback",
      "Collaborative learning",
    ],

    keywords: [
      "interactive display",
      "interactive led",
      "smart classroom display",
      "touch screen display",
      "meeting room interactive display",
      "digital whiteboard",
    ],

    tags: ["Interactive", "Education", "Corporate"],

    icon: Presentation,
  },

  {
    id: "commercial-display",
    name: "Commercial Display",
    category: "LED Wall & Digital Display",
    service: "Commercial Display",
    type: "Commercial Display",
    subtype: "Professional Display",

    description:
      "Professional-grade display for businesses requiring reliable presentation, advertising, information, or monitoring screens.",

    useCases: [
      "Corporate offices",
      "Retail stores",
      "Hotels",
      "Hospitals",
      "Schools",
      "Showrooms",
      "Reception areas",
      "Digital signage",
    ],

    environments: [
      "Office",
      "Retail",
      "Hotel",
      "Hospital",
      "School",
      "Showroom",
    ],

    specifications: {
      displayType: "Professional Commercial Display",
      content: "Video / Image / Text / Presentation",
      installation: "Wall Mount / Stand Mount",
    },

    features: [
      "Professional display",
      "Long operating support",
      "Digital signage compatibility",
      "Video playback",
      "Business presentation support",
    ],

    keywords: [
      "commercial display",
      "professional display",
      "business display",
      "office display",
      "hotel display",
      "hospital display",
    ],

    tags: ["Commercial", "Professional Display"],

    icon: Building2,
  },

  {
    id: "outdoor-digital-billboard",
    name: "Outdoor Digital Billboard",
    category: "LED Wall & Digital Display",
    service: "Digital Advertising",
    type: "LED Billboard",
    subtype: "Outdoor Advertising",

    description:
      "Large outdoor digital advertising screen for high-visibility promotional campaigns, announcements, and public information.",

    useCases: [
      "Roadside advertising",
      "Brand campaigns",
      "Property advertising",
      "Public announcements",
      "Event promotion",
      "Commercial advertising",
      "Building branding",
    ],

    environments: [
      "Outdoor",
      "Roadside",
      "Commercial Area",
      "Building Exterior",
      "Public Area",
    ],

    specifications: {
      displayType: "Outdoor LED Billboard",
      brightness: "High Brightness",
      content: "Video / Image / Text",
      installation: "Custom Steel Structure / Building Mount",
    },

    features: [
      "Large advertising area",
      "High daytime visibility",
      "Digital content updates",
      "Video advertising",
      "Remote content management",
    ],

    keywords: [
      "digital billboard",
      "outdoor digital billboard",
      "led billboard",
      "roadside led billboard",
      "advertising billboard",
      "outdoor advertising screen",
    ],

    tags: ["Billboard", "Outdoor", "Advertising"],

    icon: Megaphone,
  },

  {
    id: "led-wall-controller",
    name: "LED Wall Video Controller",
    category: "LED Wall & Digital Display",
    service: "LED Display",
    type: "LED Controller",
    subtype: "Video Processor",

    description:
      "Video processing and control equipment used to manage content, inputs, screen layouts, and signal output for large LED walls.",

    useCases: [
      "LED wall installations",
      "Stage LED screens",
      "Conference displays",
      "Advertising screens",
      "Control room displays",
      "Multi-source video systems",
    ],

    environments: [
      "Event",
      "Conference",
      "Control Room",
      "Advertising",
      "Auditorium",
    ],

    specifications: {
      equipmentType: "LED Video Processor",
      inputs: "HDMI / DisplayPort / Other Video Inputs",
      output: "LED Processor Output",
      function: "Signal Processing and Screen Control",
    },

    features: [
      "Multiple video inputs",
      "Screen scaling",
      "Source switching",
      "Multi-screen layouts",
      "LED wall control",
      "Professional video processing",
    ],

    keywords: [
      "led controller",
      "led video processor",
      "led wall controller",
      "video wall controller",
      "led screen processor",
      "led display controller",
    ],

    tags: ["Controller", "Video Processor", "LED"],

    icon: SlidersHorizontal,
  },

  {
    id: "led-display-installation",
    name: "LED Wall Installation Solution",
    category: "LED Wall & Digital Display",
    service: "LED Display Installation",
    type: "LED Solution",
    subtype: "Complete Installation",

    description:
      "Complete LED wall installation solution including screen planning, structure, display assembly, controller setup, cabling, configuration, and testing.",

    useCases: [
      "Office LED walls",
      "Mall LED displays",
      "Outdoor advertising",
      "Stage LED screens",
      "Conference rooms",
      "Control rooms",
      "Showrooms",
      "Commercial buildings",
    ],

    environments: [
      "Indoor",
      "Outdoor",
      "Office",
      "Mall",
      "Event Venue",
      "Control Room",
      "Showroom",
    ],

    specifications: {
      solution: "Complete LED Display Installation",
      includes:
        "Display + Structure + Controller + Cabling + Configuration",
      installation: "Site Specific",
      support: "Testing and Configuration",
    },

    features: [
      "Site assessment",
      "Screen size planning",
      "Mounting structure",
      "LED panel installation",
      "Controller configuration",
      "Signal cabling",
      "Display testing",
      "Customer handover",
    ],

    keywords: [
      "led wall installation",
      "led display installation",
      "led screen installation",
      "complete led solution",
      "led wall setup",
      "led display contractor",
    ],

    tags: ["Installation", "LED Wall", "Complete Solution"],

    icon: Cog,
  },
];

export default ledWallProducts;