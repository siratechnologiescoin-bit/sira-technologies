
import {
  FaCamera,
  FaNetworkWired,
  FaLinux,
  FaWindows,
  FaCloud,
  FaHeadphones,
  FaTv,
} from "react-icons/fa";

export const services = [
  // =========================================================
  // CCTV & SECURITY
  // =========================================================
  {
    id: "cctv",
    title: "CCTV & Security",
    shortTitle: "CCTV",
    description:
      "Professional CCTV installation, surveillance systems, remote monitoring and security solutions for homes, offices and businesses.",

    icon: FaCamera,

    image:
      "https://images.pexels.com/photos/37591157/pexels-photo-37591157.jpeg",

    imageAlt:
      "Professional CCTV security camera and surveillance system",

    path: "/services/cctv",

    accent: "red",

    animation: {
      image: "zoom",
      icon: "float",
      overlay: "gradient",
      duration: 700,
    },

    features: [
      "IP CCTV Installation",
      "HD CCTV Systems",
      "DVR & NVR Installation",
      "Remote Mobile Monitoring",
      "Camera Maintenance",
      "Security System Upgrades",
    ],
  },

  // =========================================================
  // NETWORKING
  // =========================================================
  {
    id: "networking",
    title: "Networking",
    shortTitle: "Networking",
    description:
      "Reliable LAN, WAN, Wi-Fi and structured networking solutions for organizations of every size.",

    icon: FaNetworkWired,

    image:
      "https://images.pexels.com/photos/6466141/pexels-photo-6466141.jpeg",

    imageAlt:
      "Enterprise network servers and networking infrastructure",

    path: "/services/networking",

    accent: "gold",

    animation: {
      image: "zoom",
      icon: "float",
      overlay: "gradient",
      duration: 750,
    },

    features: [
      "LAN & WAN Installation",
      "Structured Cabling",
      "Router Configuration",
      "Switch Configuration",
      "Wi-Fi Deployment",
      "Network Troubleshooting",
    ],
  },

  // =========================================================
  // LINUX
  // =========================================================
  {
    id: "linux",
    title: "Linux Services",
    shortTitle: "Linux",
    description:
      "Linux server administration, deployment, security, monitoring and troubleshooting services.",

    icon: FaLinux,

    image:
      "https://images.pexels.com/photos/17489156/pexels-photo-17489156.jpeg",

    imageAlt:
      "Linux server administration and enterprise server infrastructure",

    path: "/services/linux",

    accent: "red",

    animation: {
      image: "zoom",
      icon: "float",
      overlay: "gradient",
      duration: 800,
    },

    features: [
      "Linux Server Administration",
      "Nginx & Apache",
      "Server Hardening",
      "User & Permission Management",
      "Monitoring",
      "Backup & Recovery",
    ],
  },

  // =========================================================
  // WINDOWS
  // =========================================================
  {
    id: "windows",
    title: "Windows Services",
    shortTitle: "Windows",
    description:
      "Windows Server and enterprise infrastructure administration services.",

    icon: FaWindows,

    image:
      "https://images.pexels.com/photos/3747486/pexels-photo-3747486.jpeg",

    imageAlt:
      "Windows server and enterprise IT infrastructure",

    path: "/services/windows",

    accent: "gold",

    animation: {
      image: "zoom",
      icon: "float",
      overlay: "gradient",
      duration: 700,
    },

    features: [
      "Windows Server",
      "Active Directory",
      "DNS & DHCP",
      "Group Policy",
      "File Server",
      "Windows Troubleshooting",
    ],
  },

  // =========================================================
  // AWS & CLOUD
  // =========================================================
  {
    id: "aws",
    title: "AWS & Cloud",
    shortTitle: "AWS",
    description:
      "AWS infrastructure deployment, cloud migration, networking, security and management.",

    icon: FaCloud,

    image:
      "https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg",

    imageAlt:
      "Cloud computing and enterprise cloud server infrastructure",

    path: "/services/aws",

    accent: "red",

    animation: {
      image: "zoom",
      icon: "float",
      overlay: "gradient",
      duration: 850,
    },

    features: [
      "EC2",
      "S3",
      "VPC",
      "IAM",
      "Load Balancing",
      "Cloud Deployment",
    ],
  },

  // =========================================================
  // IT SUPPORT
  // =========================================================
  {
    id: "it-support",
    title: "IT Support",
    shortTitle: "IT Support",
    description:
      "On-site and remote IT support for hardware, software, systems and infrastructure.",

    icon: FaHeadphones,

    image:
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",

    imageAlt:
      "Professional IT support and computer infrastructure service",

    path: "/services/it-support",

    accent: "gold",

    animation: {
      image: "zoom",
      icon: "float",
      overlay: "gradient",
      duration: 750,
    },

    features: [
      "Remote Support",
      "On-site Support",
      "System Troubleshooting",
      "Hardware Support",
      "Software Support",
      "IT Maintenance",
    ],
  },

  // =========================================================
  // LED WALL & DIGITAL DISPLAY
  // =========================================================
  {
    id: "led-wall",
    title: "LED Wall",
    shortTitle: "LED Wall",
    description:
      "Professional LED wall and digital display solutions for events, businesses, advertising, presentations and indoor or outdoor environments.",

    icon: FaTv,

    image:
      "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg",

    imageAlt:
      "Professional LED wall and large digital display installation",

    path: "/services/led-wall",

    accent: "red",

    animation: {
      image: "zoom",
      icon: "float",
      overlay: "gradient",
      duration: 800,
    },

    features: [
      "Indoor LED Walls",
      "Outdoor LED Displays",
      "LED Video Walls",
      "Digital Signage",
      "Event LED Screens",
      "LED Display Installation",
      "Controller Configuration",
      "LED Wall Maintenance",
    ],
  },
];

export default services;


