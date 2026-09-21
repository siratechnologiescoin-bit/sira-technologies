import {
  Server,
  Monitor,
  Shield,
  Database,
  HardDrive,
  Terminal,
  Container,
  GitBranch,
  Settings,
  Activity,
  Cloud,
  Globe,
  Network,
  LockKeyhole,
  Cog,
} from "lucide-react";

/*
=========================================================
 SIRA TECHNOLOGIES
 LINUX PRODUCTS
=========================================================
*/

const linuxProducts = [

  // =====================================================
  // LINUX OPERATING SYSTEMS
  // =====================================================

  {
    id: "linux-ubuntu",
    name: "Ubuntu Linux",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Operating System",
    subtype: "Ubuntu",

    description:
      "Popular Linux operating system suitable for servers, desktops, development environments, web applications and cloud workloads.",

    useCases: [
      "Linux server setup",
      "Web hosting",
      "Application hosting",
      "Developer workstation",
      "Software development",
      "Docker hosting",
      "Cloud server deployment",
      "Database hosting",
      "Learning Linux",
      "Testing environments"
    ],

    environments: [
      "Homes",
      "Offices",
      "Businesses",
      "Data Centers",
      "Cloud",
      "Development Labs"
    ],

    specifications: {
      operatingSystem: "Ubuntu Linux",
      architecture: "x86_64 / ARM - Hardware Dependent",
      server: "Available",
      desktop: "Available",
      packageManagement: "APT"
    },

    features: [
      "Open Source",
      "Server Support",
      "Desktop Support",
      "Cloud Support",
      "Docker Support",
      "Development Support"
    ],

    keywords: [
      "ubuntu",
      "ubuntu linux",
      "linux os",
      "ubuntu server",
      "ubuntu desktop",
      "linux installation",
      "linux operating system"
    ],

    tags: [
      "Linux",
      "Ubuntu",
      "Operating System",
      "Server"
    ],

    icon: Terminal
  },

  {
    id: "linux-rhel",
    name: "Red Hat Enterprise Linux",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Operating System",
    subtype: "RHEL",

    description:
      "Enterprise Linux operating system commonly used for business servers, application servers, databases and enterprise workloads.",

    useCases: [
      "Enterprise server deployment",
      "Application servers",
      "Database servers",
      "Web servers",
      "Business applications",
      "Production workloads",
      "Enterprise virtualization",
      "Data center infrastructure"
    ],

    environments: [
      "Enterprises",
      "Data Centers",
      "Server Rooms",
      "Banks",
      "Hospitals",
      "Large Businesses"
    ],

    specifications: {
      operatingSystem: "Red Hat Enterprise Linux",
      architecture: "x86_64 / ARM - Hardware Dependent",
      packageManagement: "RPM / DNF",
      support: "Enterprise Support Available"
    },

    features: [
      "Enterprise Linux",
      "Production Server Support",
      "Security Features",
      "Enterprise Package Management",
      "Server Administration"
    ],

    keywords: [
      "rhel",
      "red hat linux",
      "redhat",
      "enterprise linux",
      "rhel server",
      "linux enterprise server"
    ],

    tags: [
      "Linux",
      "RHEL",
      "Enterprise",
      "Server"
    ],

    icon: Server
  },

  {
    id: "linux-rocky",
    name: "Rocky Linux",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Operating System",
    subtype: "Rocky Linux",

    description:
      "Enterprise-oriented Linux distribution suitable for servers, web hosting, development and production environments.",

    useCases: [
      "Linux server",
      "Web server",
      "Application server",
      "Database server",
      "Hosting server",
      "Development server",
      "Production workloads"
    ],

    environments: [
      "Businesses",
      "Server Rooms",
      "Data Centers",
      "Development Labs",
      "Cloud"
    ],

    specifications: {
      operatingSystem: "Rocky Linux",
      packageManagement: "DNF / RPM",
      architecture: "x86_64 / ARM - Hardware Dependent"
    },

    features: [
      "Enterprise-Oriented",
      "Server Support",
      "Open Source",
      "Production Server Support"
    ],

    keywords: [
      "rocky linux",
      "rocky server",
      "linux server",
      "rhel compatible linux",
      "enterprise linux"
    ],

    tags: [
      "Linux",
      "Rocky Linux",
      "Server"
    ],

    icon: Server
  },

  {
    id: "linux-almalinux",
    name: "AlmaLinux",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Operating System",
    subtype: "AlmaLinux",

    description:
      "Enterprise-focused Linux distribution suitable for web servers, application servers, hosting and production workloads.",

    useCases: [
      "Web server",
      "Application server",
      "Database server",
      "Hosting",
      "Production server",
      "Development environment"
    ],

    environments: [
      "Businesses",
      "Server Rooms",
      "Data Centers",
      "Cloud",
      "Development Labs"
    ],

    specifications: {
      operatingSystem: "AlmaLinux",
      packageManagement: "DNF / RPM",
      architecture: "x86_64 / ARM - Hardware Dependent"
    },

    features: [
      "Enterprise Server",
      "Open Source",
      "Production Support",
      "Server Administration"
    ],

    keywords: [
      "almalinux",
      "alma linux",
      "linux server",
      "enterprise linux",
      "linux hosting"
    ],

    tags: [
      "Linux",
      "AlmaLinux",
      "Server"
    ],

    icon: Server
  },

  {
    id: "linux-debian",
    name: "Debian Linux",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Operating System",
    subtype: "Debian",

    description:
      "Stable and versatile Linux operating system used for servers, development systems, networking and various computing workloads.",

    useCases: [
      "Linux server",
      "Web hosting",
      "Application hosting",
      "Network server",
      "Development workstation",
      "Database server",
      "Testing environment"
    ],

    environments: [
      "Homes",
      "Offices",
      "Businesses",
      "Data Centers",
      "Cloud",
      "Development Labs"
    ],

    specifications: {
      operatingSystem: "Debian Linux",
      packageManagement: "APT",
      architecture: "x86_64 / ARM - Hardware Dependent"
    },

    features: [
      "Stable Linux Platform",
      "Server Support",
      "Desktop Support",
      "Large Software Repository",
      "Open Source"
    ],

    keywords: [
      "debian",
      "debian linux",
      "debian server",
      "linux server",
      "linux os"
    ],

    tags: [
      "Linux",
      "Debian",
      "Server"
    ],

    icon: Terminal
  },

  {
    id: "linux-suse",
    name: "SUSE Linux Enterprise",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Operating System",
    subtype: "SUSE",

    description:
      "Enterprise Linux platform used for business servers, enterprise applications and specialized workloads.",

    useCases: [
      "Enterprise servers",
      "Application servers",
      "Database servers",
      "Business applications",
      "Production infrastructure",
      "Enterprise workloads"
    ],

    environments: [
      "Enterprises",
      "Data Centers",
      "Server Rooms",
      "Large Businesses"
    ],

    specifications: {
      operatingSystem: "SUSE Linux Enterprise",
      packageManagement: "RPM / Zypper",
      architecture: "Hardware Dependent"
    },

    features: [
      "Enterprise Linux",
      "Server Support",
      "Enterprise Administration",
      "Production Workloads"
    ],

    keywords: [
      "suse",
      "suse linux",
      "sles",
      "suse enterprise",
      "linux enterprise server"
    ],

    tags: [
      "Linux",
      "SUSE",
      "Enterprise"
    ],

    icon: Server
  },

  {
    id: "linux-centos",
    name: "CentOS Linux",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Operating System",
    subtype: "CentOS",

    description:
      "Linux platform historically used for web hosting, enterprise-style servers, development and infrastructure environments.",

    useCases: [
      "Legacy server management",
      "Existing CentOS environments",
      "Web server administration",
      "Application server administration",
      "Migration planning",
      "Linux training"
    ],

    environments: [
      "Existing Server Environments",
      "Development Labs",
      "Legacy Infrastructure"
    ],

    specifications: {
      operatingSystem: "CentOS",
      packageManagement: "RPM / YUM",
      status: "Version Dependent"
    },

    features: [
      "Linux Administration",
      "Legacy Environment Support",
      "Server Troubleshooting",
      "Migration Assistance"
    ],

    keywords: [
      "centos",
      "centos linux",
      "centos server",
      "legacy linux",
      "linux migration"
    ],

    tags: [
      "Linux",
      "CentOS",
      "Legacy"
    ],

    icon: Terminal
  },

  // =====================================================
  // LINUX SERVERS
  // =====================================================

  {
    id: "linux-server",
    name: "Linux Server",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Server",
    subtype: "General Purpose Server",

    description:
      "Linux-based server system for hosting websites, applications, databases, files, network services and business workloads.",

    useCases: [
      "Website hosting",
      "Application hosting",
      "Database hosting",
      "File sharing",
      "DNS server",
      "DHCP server",
      "Backup server",
      "Monitoring server",
      "Internal business applications",
      "Cloud workloads"
    ],

    environments: [
      "Offices",
      "Businesses",
      "Server Rooms",
      "Data Centers",
      "Cloud"
    ],

    specifications: {
      operatingSystem: "Linux",
      cpu: "Model Dependent",
      memory: "Model Dependent",
      storage: "HDD / SSD - Model Dependent",
      network: "Ethernet"
    },

    features: [
      "Multi-User Server",
      "Remote Administration",
      "Network Services",
      "Application Hosting",
      "Security Configuration"
    ],

    keywords: [
      "linux server",
      "linux machine",
      "linux server setup",
      "server linux",
      "linux production server"
    ],

    tags: [
      "Linux",
      "Server",
      "Infrastructure"
    ],

    icon: Server
  },

  {
    id: "linux-web-server",
    name: "Linux Web Server",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Server",
    subtype: "Web Server",

    description:
      "Linux server configured to host websites, web applications and APIs using web server software such as NGINX or Apache.",

    useCases: [
      "Website hosting",
      "Web application hosting",
      "API hosting",
      "React application deployment",
      "Node.js hosting",
      "PHP website hosting",
      "Reverse proxy",
      "HTTPS websites"
    ],

    environments: [
      "Businesses",
      "Web Hosting",
      "Cloud",
      "Data Centers",
      "Development Labs"
    ],

    specifications: {
      operatingSystem: "Linux",
      webServer: "NGINX / Apache - Model Dependent",
      ssl: "HTTPS Support",
      deployment: "Application Dependent"
    },

    features: [
      "Website Hosting",
      "HTTPS",
      "Reverse Proxy",
      "Virtual Hosts",
      "Web Application Hosting"
    ],

    keywords: [
      "linux web server",
      "nginx server",
      "apache server",
      "website server",
      "web hosting server",
      "api server"
    ],

    tags: [
      "Linux",
      "Web Server",
      "NGINX",
      "Apache"
    ],

    icon: Globe
  },

  {
    id: "linux-application-server",
    name: "Linux Application Server",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Server",
    subtype: "Application Server",

    description:
      "Linux server designed to run business applications, APIs and backend services.",

    useCases: [
      "Node.js applications",
      "Python applications",
      "Java applications",
      "Business applications",
      "REST APIs",
      "Backend services",
      "Microservices"
    ],

    environments: [
      "Businesses",
      "Cloud",
      "Data Centers",
      "Development Labs"
    ],

    specifications: {
      operatingSystem: "Linux",
      runtime: "Application Dependent",
      cpu: "Model Dependent",
      memory: "Model Dependent"
    },

    features: [
      "Application Hosting",
      "API Hosting",
      "Remote Administration",
      "Process Management",
      "Service Monitoring"
    ],

    keywords: [
      "linux application server",
      "app server",
      "linux backend server",
      "api server",
      "node server",
      "python server"
    ],

    tags: [
      "Linux",
      "Application Server",
      "API",
      "Backend"
    ],

    icon: Server
  },

  {
    id: "linux-database-server",
    name: "Linux Database Server",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Server",
    subtype: "Database Server",

    description:
      "Linux server configured to host databases for websites, applications and business systems.",

    useCases: [
      "Application databases",
      "Website databases",
      "Business applications",
      "Customer data storage",
      "Reporting systems",
      "Database development",
      "Production databases"
    ],

    environments: [
      "Businesses",
      "Data Centers",
      "Cloud",
      "Server Rooms"
    ],

    specifications: {
      operatingSystem: "Linux",
      database: "MySQL / PostgreSQL / MariaDB / Other",
      storage: "SSD / HDD - Model Dependent",
      backup: "Configuration Dependent"
    },

    features: [
      "Database Hosting",
      "Database Backup",
      "User Management",
      "Performance Monitoring",
      "Remote Administration"
    ],

    keywords: [
      "linux database server",
      "mysql server",
      "postgresql server",
      "mariadb server",
      "database linux",
      "db server"
    ],

    tags: [
      "Linux",
      "Database",
      "MySQL",
      "PostgreSQL"
    ],

    icon: Database
  },

  {
    id: "linux-file-server",
    name: "Linux File Server",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Server",
    subtype: "File Server",

    description:
      "Linux server used to centrally store and share files across computers and users on a network.",

    useCases: [
      "Office file sharing",
      "Department file storage",
      "Central document storage",
      "Shared folders",
      "Backup storage",
      "Employee file access"
    ],

    environments: [
      "Offices",
      "Schools",
      "Businesses",
      "Factories",
      "Clinics"
    ],

    specifications: {
      operatingSystem: "Linux",
      protocols: "SMB / NFS - Configuration Dependent",
      storage: "HDD / SSD - Model Dependent",
      access: "Network Based"
    },

    features: [
      "Central File Storage",
      "User Permissions",
      "Shared Folders",
      "Network File Access",
      "Backup Support"
    ],

    keywords: [
      "linux file server",
      "file sharing server",
      "samba server",
      "nfs server",
      "office file server",
      "shared folder server"
    ],

    tags: [
      "Linux",
      "File Server",
      "Storage",
      "File Sharing"
    ],

    icon: HardDrive
  },

  {
    id: "linux-backup-server",
    name: "Linux Backup Server",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Server",
    subtype: "Backup Server",

    description:
      "Linux-based backup server for storing copies of important business files, applications and system data.",

    useCases: [
      "Server backup",
      "File backup",
      "Database backup",
      "Website backup",
      "Application backup",
      "Disaster recovery",
      "Centralized backup"
    ],

    environments: [
      "Offices",
      "Businesses",
      "Server Rooms",
      "Data Centers"
    ],

    specifications: {
      operatingSystem: "Linux",
      storage: "HDD / SSD / NAS - Model Dependent",
      backupType: "Scheduled / Manual - Configuration Dependent"
    },

    features: [
      "Centralized Backup",
      "Scheduled Backups",
      "Data Recovery",
      "Backup Monitoring",
      "Disaster Recovery Support"
    ],

    keywords: [
      "linux backup server",
      "backup server",
      "server backup",
      "file backup server",
      "database backup server",
      "disaster recovery"
    ],

    tags: [
      "Linux",
      "Backup",
      "Storage",
      "Recovery"
    ],

    icon: HardDrive
  },

  {
    id: "linux-dns-server",
    name: "Linux DNS Server",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Network Server",
    subtype: "DNS Server",

    description:
      "Linux server providing DNS name resolution for websites, internal applications and network devices.",

    useCases: [
      "Internal DNS",
      "Office network DNS",
      "Website DNS",
      "Application hostname resolution",
      "Private network services",
      "Infrastructure management"
    ],

    environments: [
      "Offices",
      "Businesses",
      "Data Centers",
      "Cloud",
      "Development Labs"
    ],

    specifications: {
      operatingSystem: "Linux",
      service: "DNS",
      software: "BIND / Other - Configuration Dependent"
    },

    features: [
      "Name Resolution",
      "Internal DNS",
      "DNS Records",
      "Network Service Integration"
    ],

    keywords: [
      "linux dns server",
      "dns server",
      "bind dns",
      "internal dns",
      "network dns",
      "name server"
    ],

    tags: [
      "Linux",
      "DNS",
      "Networking"
    ],

    icon: Network
  },

  {
    id: "linux-dhcp-server",
    name: "Linux DHCP Server",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Network Server",
    subtype: "DHCP Server",

    description:
      "Linux-based DHCP service for automatically assigning IP addresses and network configuration to connected devices.",

    useCases: [
      "Office IP address assignment",
      "LAN configuration",
      "Network device management",
      "Lab networking",
      "Server room networking",
      "Internal network setup"
    ],

    environments: [
      "Offices",
      "Schools",
      "Labs",
      "Businesses",
      "Server Rooms"
    ],

    specifications: {
      operatingSystem: "Linux",
      service: "DHCP",
      addressAssignment: "Dynamic / Static Reservations"
    },

    features: [
      "Automatic IP Assignment",
      "DHCP Reservations",
      "Network Configuration",
      "Centralized Address Management"
    ],

    keywords: [
      "linux dhcp server",
      "dhcp server",
      "ip address server",
      "linux network server",
      "automatic ip assignment"
    ],

    tags: [
      "Linux",
      "DHCP",
      "Networking"
    ],

    icon: Network
  },

  // =====================================================
  // NGINX / APACHE
  // =====================================================

  {
    id: "linux-nginx",
    name: "NGINX Web Server",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Application",
    subtype: "NGINX",

    description:
      "High-performance web server and reverse proxy commonly used to host websites, APIs and web applications.",

    useCases: [
      "Website hosting",
      "Reverse proxy",
      "API gateway",
      "HTTPS termination",
      "React application hosting",
      "Node.js application proxy",
      "Load balancing",
      "Static file hosting"
    ],

    environments: [
      "Cloud",
      "Offices",
      "Businesses",
      "Data Centers",
      "Web Servers"
    ],

    specifications: {
      software: "NGINX",
      platform: "Linux",
      protocol: "HTTP / HTTPS",
      role: "Web Server / Reverse Proxy"
    },

    features: [
      "Reverse Proxy",
      "HTTPS",
      "Virtual Hosts",
      "Static File Serving",
      "Load Balancing",
      "Web Hosting"
    ],

    keywords: [
      "nginx",
      "nginx server",
      "reverse proxy",
      "web server",
      "https server",
      "nginx linux"
    ],

    tags: [
      "Linux",
      "NGINX",
      "Web Server",
      "Reverse Proxy"
    ],

    icon: Globe
  },

  {
    id: "linux-apache",
    name: "Apache Web Server",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Application",
    subtype: "Apache",

    description:
      "Widely used web server software for hosting websites and web applications on Linux servers.",

    useCases: [
      "Website hosting",
      "PHP hosting",
      "Web applications",
      "Internal web applications",
      "Development servers",
      "Legacy web applications"
    ],

    environments: [
      "Businesses",
      "Web Servers",
      "Cloud",
      "Development Labs"
    ],

    specifications: {
      software: "Apache HTTP Server",
      platform: "Linux",
      protocol: "HTTP / HTTPS"
    },

    features: [
      "Website Hosting",
      "HTTPS",
      "Virtual Hosts",
      "PHP Integration",
      "Web Application Hosting"
    ],

    keywords: [
      "apache",
      "apache web server",
      "httpd",
      "linux apache",
      "php apache server",
      "website server"
    ],

    tags: [
      "Linux",
      "Apache",
      "Web Server"
    ],

    icon: Globe
  },

  // =====================================================
  // LINUX FIREWALL & SECURITY
  // =====================================================

  {
    id: "linux-firewall",
    name: "Linux Firewall Server",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Security",
    subtype: "Firewall",

    description:
      "Linux-based firewall system used to control network traffic and protect servers and internal networks.",

    useCases: [
      "Server protection",
      "Office network firewall",
      "Internet traffic filtering",
      "Port access control",
      "Network segmentation",
      "VPN gateway",
      "Remote access security"
    ],

    environments: [
      "Offices",
      "Businesses",
      "Data Centers",
      "Server Rooms",
      "Cloud"
    ],

    specifications: {
      operatingSystem: "Linux",
      firewall: "nftables / iptables / firewalld - Configuration Dependent",
      routing: "Available",
      vpn: "Configuration Dependent"
    },

    features: [
      "Traffic Filtering",
      "Port Control",
      "Network Protection",
      "Routing",
      "VPN Support"
    ],

    keywords: [
      "linux firewall",
      "linux firewall server",
      "firewalld",
      "iptables",
      "nftables",
      "server firewall",
      "network firewall"
    ],

    tags: [
      "Linux",
      "Firewall",
      "Security",
      "Networking"
    ],

    icon: Shield
  },

  {
    id: "linux-vpn-server",
    name: "Linux VPN Server",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Security",
    subtype: "VPN Server",

    description:
      "Linux server configured to provide secure remote or site-to-site network connectivity using VPN technologies.",

    useCases: [
      "Remote employee access",
      "Office-to-office VPN",
      "Secure remote administration",
      "Private network access",
      "Remote server access",
      "Secure branch connectivity"
    ],

    environments: [
      "Businesses",
      "Offices",
      "Remote Sites",
      "Cloud",
      "Data Centers"
    ],

    specifications: {
      operatingSystem: "Linux",
      vpn: "WireGuard / OpenVPN / Other - Configuration Dependent",
      encryption: "VPN Protocol Dependent"
    },

    features: [
      "Secure Remote Access",
      "Site-to-Site VPN",
      "Encrypted Connectivity",
      "Remote Administration"
    ],

    keywords: [
      "linux vpn",
      "vpn server",
      "wireguard server",
      "openvpn server",
      "remote access vpn",
      "site to site vpn"
    ],

    tags: [
      "Linux",
      "VPN",
      "Security",
      "Remote Access"
    ],

    icon: LockKeyhole
  },

  // =====================================================
  // DOCKER & CONTAINERS
  // =====================================================

  {
    id: "linux-docker-server",
    name: "Docker Linux Server",
    category: "Linux",
    service: "Linux Services",
    type: "Container Platform",
    subtype: "Docker",

    description:
      "Linux server configured for running applications inside Docker containers for easier deployment and management.",

    useCases: [
      "Application containers",
      "Node.js deployment",
      "Database containers",
      "Microservices",
      "Development environments",
      "Testing environments",
      "Production applications"
    ],

    environments: [
      "Development",
      "Testing",
      "Cloud",
      "Data Centers",
      "Businesses"
    ],

    specifications: {
      platform: "Linux",
      containerEngine: "Docker",
      deployment: "Container Based"
    },

    features: [
      "Application Containers",
      "Container Isolation",
      "Easy Deployment",
      "Application Portability",
      "Docker Compose Support"
    ],

    keywords: [
      "docker linux",
      "docker server",
      "linux docker",
      "container server",
      "docker hosting",
      "docker deployment"
    ],

    tags: [
      "Linux",
      "Docker",
      "Containers",
      "DevOps"
    ],

    icon: Container
  },

  {
    id: "linux-kubernetes-node",
    name: "Linux Kubernetes Node",
    category: "Linux",
    service: "Linux Services",
    type: "Container Platform",
    subtype: "Kubernetes",

    description:
      "Linux server prepared to participate in a Kubernetes cluster for container orchestration and application deployment.",

    useCases: [
      "Container orchestration",
      "Microservices",
      "Application clusters",
      "Container deployment",
      "Scalable applications",
      "DevOps environments",
      "Cloud-native applications"
    ],

    environments: [
      "Data Centers",
      "Cloud",
      "Development Labs",
      "Enterprise Infrastructure"
    ],

    specifications: {
      platform: "Linux",
      orchestration: "Kubernetes",
      containerRuntime: "Environment Dependent"
    },

    features: [
      "Container Orchestration",
      "Cluster Support",
      "Application Deployment",
      "Scaling",
      "Service Management"
    ],

    keywords: [
      "kubernetes linux",
      "kubernetes server",
      "k8s node",
      "linux kubernetes",
      "container cluster",
      "kubernetes node"
    ],

    tags: [
      "Linux",
      "Kubernetes",
      "Containers",
      "DevOps"
    ],

    icon: Container
  },

  // =====================================================
  // DEVOPS
  // =====================================================

  {
    id: "linux-jenkins-server",
    name: "Jenkins CI/CD Server",
    category: "Linux",
    service: "Linux Services",
    type: "DevOps Platform",
    subtype: "Jenkins",

    description:
      "Linux-based Jenkins server for automating software builds, testing and application deployment workflows.",

    useCases: [
      "CI/CD pipelines",
      "Automated builds",
      "Automated testing",
      "Application deployment",
      "DevOps automation",
      "Source code integration",
      "Production deployment"
    ],

    environments: [
      "Development",
      "Testing",
      "Businesses",
      "Cloud",
      "Data Centers"
    ],

    specifications: {
      platform: "Linux",
      software: "Jenkins",
      automation: "CI/CD",
      integration: "Git / Build Tools / Deployment Tools"
    },

    features: [
      "Continuous Integration",
      "Continuous Deployment",
      "Automated Builds",
      "Automated Testing",
      "Pipeline Automation"
    ],

    keywords: [
      "jenkins",
      "jenkins server",
      "linux jenkins",
      "cicd server",
      "ci cd",
      "devops server",
      "deployment automation"
    ],

    tags: [
      "Linux",
      "Jenkins",
      "CI/CD",
      "DevOps"
    ],

    icon: GitBranch
  },

  {
    id: "linux-ansible-server",
    name: "Ansible Automation Server",
    category: "Linux",
    service: "Linux Services",
    type: "DevOps Platform",
    subtype: "Ansible",

    description:
      "Linux automation platform used to configure, manage and deploy software across multiple servers.",

    useCases: [
      "Server automation",
      "Configuration management",
      "Software deployment",
      "Patch management",
      "Multi-server administration",
      "Application deployment",
      "Infrastructure automation"
    ],

    environments: [
      "Businesses",
      "Data Centers",
      "Cloud",
      "Enterprise Infrastructure"
    ],

    specifications: {
      platform: "Linux",
      automation: "Ansible",
      management: "Agentless - Architecture Dependent"
    },

    features: [
      "Configuration Automation",
      "Server Management",
      "Application Deployment",
      "Patch Automation",
      "Infrastructure Automation"
    ],

    keywords: [
      "ansible",
      "ansible server",
      "linux ansible",
      "server automation",
      "configuration management",
      "ansible automation"
    ],

    tags: [
      "Linux",
      "Ansible",
      "Automation",
      "DevOps"
    ],

    icon: Settings
  },

  {
    id: "linux-git-server",
    name: "Git Repository Server",
    category: "Linux",
    service: "Linux Services",
    type: "DevOps Platform",
    subtype: "Git Server",

    description:
      "Linux-based Git repository server for centralized source-code management and team development workflows.",

    useCases: [
      "Source code management",
      "Team development",
      "Private Git repositories",
      "Version control",
      "Application development",
      "CI/CD integration"
    ],

    environments: [
      "Development Teams",
      "Businesses",
      "Offices",
      "Cloud",
      "Data Centers"
    ],

    specifications: {
      platform: "Linux",
      versionControl: "Git",
      repository: "Private / Internal"
    },

    features: [
      "Version Control",
      "Source Code Management",
      "Team Collaboration",
      "Branch Management",
      "CI/CD Integration"
    ],

    keywords: [
      "git server",
      "linux git server",
      "git repository",
      "source code server",
      "private git",
      "version control server"
    ],

    tags: [
      "Linux",
      "Git",
      "DevOps",
      "Development"
    ],

    icon: GitBranch
  },

  // =====================================================
  // MONITORING
  // =====================================================

  {
    id: "linux-server-monitoring",
    name: "Linux Server Monitoring System",
    category: "Linux",
    service: "Linux Services",
    type: "Monitoring Platform",
    subtype: "Server Monitoring",

    description:
      "Monitoring system for tracking Linux server health, CPU, memory, storage, network and service availability.",

    useCases: [
      "Server monitoring",
      "CPU monitoring",
      "Memory monitoring",
      "Disk monitoring",
      "Network monitoring",
      "Service monitoring",
      "Production monitoring",
      "Alerting"
    ],

    environments: [
      "Businesses",
      "Server Rooms",
      "Data Centers",
      "Cloud",
      "Production Infrastructure"
    ],

    specifications: {
      platform: "Linux",
      monitoring: "Server / Network / Service",
      alerting: "Configuration Dependent"
    },

    features: [
      "CPU Monitoring",
      "Memory Monitoring",
      "Disk Monitoring",
      "Network Monitoring",
      "Service Alerts",
      "Dashboard"
    ],

    keywords: [
      "linux monitoring",
      "server monitoring",
      "linux server monitoring",
      "cpu monitoring",
      "memory monitoring",
      "disk monitoring",
      "zabbix",
      "prometheus",
      "grafana"
    ],

    tags: [
      "Linux",
      "Monitoring",
      "Server",
      "Zabbix",
      "Prometheus"
    ],

    icon: Activity
  },

  {
    id: "linux-zabbix-monitoring",
    name: "Zabbix Monitoring Server",
    category: "Linux",
    service: "Linux Services",
    type: "Monitoring Platform",
    subtype: "Zabbix",

    description:
      "Infrastructure monitoring platform for monitoring servers, networks, applications and services.",

    useCases: [
      "Linux server monitoring",
      "Windows server monitoring",
      "Network monitoring",
      "Application monitoring",
      "Infrastructure alerts",
      "Capacity monitoring"
    ],

    environments: [
      "Businesses",
      "Data Centers",
      "Server Rooms",
      "Enterprise Networks"
    ],

    specifications: {
      platform: "Linux",
      software: "Zabbix",
      monitoring: "Server / Network / Application"
    },

    features: [
      "Infrastructure Monitoring",
      "Alerting",
      "Performance Monitoring",
      "Network Monitoring",
      "Dashboard"
    ],

    keywords: [
      "zabbix",
      "zabbix server",
      "zabbix monitoring",
      "linux monitoring",
      "network monitoring",
      "server monitoring"
    ],

    tags: [
      "Linux",
      "Zabbix",
      "Monitoring"
    ],

    icon: Activity
  },

  {
    id: "linux-prometheus-grafana",
    name: "Prometheus & Grafana Monitoring",
    category: "Linux",
    service: "Linux Services",
    type: "Monitoring Platform",
    subtype: "Prometheus Grafana",

    description:
      "Linux monitoring stack for collecting infrastructure metrics and displaying them through customizable dashboards.",

    useCases: [
      "Server metrics",
      "Application metrics",
      "Container monitoring",
      "Kubernetes monitoring",
      "Performance dashboards",
      "Infrastructure monitoring",
      "Alerting"
    ],

    environments: [
      "Cloud",
      "Data Centers",
      "DevOps",
      "Kubernetes",
      "Production Infrastructure"
    ],

    specifications: {
      platform: "Linux",
      metrics: "Prometheus",
      dashboards: "Grafana",
      monitoring: "Infrastructure / Application"
    },

    features: [
      "Metrics Collection",
      "Dashboards",
      "Alerting",
      "Container Monitoring",
      "Kubernetes Monitoring"
    ],

    keywords: [
      "prometheus",
      "grafana",
      "prometheus grafana",
      "linux monitoring",
      "kubernetes monitoring",
      "server metrics"
    ],

    tags: [
      "Linux",
      "Prometheus",
      "Grafana",
      "Monitoring",
      "DevOps"
    ],

    icon: Activity
  },

  // =====================================================
  // LINUX WORKSTATIONS
  // =====================================================

  {
    id: "linux-workstation",
    name: "Linux Workstation",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Computer",
    subtype: "Workstation",

    description:
      "Linux-powered desktop or workstation for developers, engineers, technical users and organizations using open-source software.",

    useCases: [
      "Software development",
      "Linux administration",
      "Programming",
      "DevOps work",
      "Network administration",
      "Cybersecurity labs",
      "Technical training",
      "Engineering applications"
    ],

    environments: [
      "Offices",
      "Development Labs",
      "Training Centers",
      "Engineering Offices",
      "Homes"
    ],

    specifications: {
      operatingSystem: "Linux",
      cpu: "Model Dependent",
      memory: "Model Dependent",
      storage: "SSD / HDD - Model Dependent"
    },

    features: [
      "Linux Desktop",
      "Developer Tools",
      "Programming Support",
      "Network Tools",
      "Development Environment"
    ],

    keywords: [
      "linux workstation",
      "linux desktop",
      "linux pc",
      "developer linux pc",
      "linux computer",
      "linux developer workstation"
    ],

    tags: [
      "Linux",
      "Workstation",
      "Desktop",
      "Development"
    ],

    icon: Monitor
  },

  // =====================================================
  // LINUX NAS / STORAGE
  // =====================================================

  {
    id: "linux-nas-server",
    name: "Linux NAS Storage Server",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Storage",
    subtype: "NAS Server",

    description:
      "Linux-based network storage system for centralized file storage, sharing and backup.",

    useCases: [
      "Office file storage",
      "Centralized backups",
      "Media storage",
      "Employee file sharing",
      "Document storage",
      "Server backups",
      "Network storage"
    ],

    environments: [
      "Homes",
      "Offices",
      "Small Businesses",
      "Server Rooms",
      "Development Labs"
    ],

    specifications: {
      operatingSystem: "Linux",
      storage: "HDD / SSD - Model Dependent",
      network: "Ethernet",
      raid: "Model / Configuration Dependent"
    },

    features: [
      "Network Storage",
      "File Sharing",
      "Backup Storage",
      "User Permissions",
      "Centralized Storage"
    ],

    keywords: [
      "linux nas",
      "nas server",
      "linux storage server",
      "network storage",
      "file storage server",
      "backup nas"
    ],

    tags: [
      "Linux",
      "NAS",
      "Storage",
      "Backup"
    ],

    icon: HardDrive
  },

  // =====================================================
  // LINUX VIRTUALIZATION
  // =====================================================

  {
    id: "linux-virtualization-server",
    name: "Linux Virtualization Server",
    category: "Linux",
    service: "Linux Services",
    type: "Virtualization",
    subtype: "Virtualization Server",

    description:
      "Linux server configured to run multiple virtual machines for efficient use of physical computing resources.",

    useCases: [
      "Virtual machine hosting",
      "Development labs",
      "Test environments",
      "Server consolidation",
      "Application isolation",
      "Training environments",
      "Infrastructure virtualization"
    ],

    environments: [
      "Businesses",
      "Data Centers",
      "Server Rooms",
      "Development Labs"
    ],

    specifications: {
      platform: "Linux",
      virtualization: "KVM / Other - Configuration Dependent",
      cpu: "Model Dependent",
      memory: "Model Dependent"
    },

    features: [
      "Virtual Machines",
      "Resource Allocation",
      "Server Consolidation",
      "Virtual Network Support",
      "Snapshot Support - Platform Dependent"
    ],

    keywords: [
      "linux virtualization",
      "linux vm server",
      "kvm server",
      "virtualization server",
      "linux virtual machine",
      "vm host"
    ],

    tags: [
      "Linux",
      "Virtualization",
      "KVM",
      "Server"
    ],

    icon: Server
  },

  // =====================================================
  // LINUX TERMINAL / ADMINISTRATION
  // =====================================================

  {
    id: "linux-admin-system",
    name: "Linux System Administration",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Administration",
    subtype: "System Administration",

    description:
      "Linux administration solution covering user management, services, storage, networking, permissions and system maintenance.",

    useCases: [
      "Linux server administration",
      "User management",
      "Service management",
      "Disk management",
      "Permission management",
      "Network configuration",
      "System troubleshooting",
      "Performance optimization"
    ],

    environments: [
      "Offices",
      "Businesses",
      "Data Centers",
      "Cloud",
      "Server Rooms"
    ],

    specifications: {
      platform: "Linux",
      administration: "Remote / Local",
      services: "System Dependent"
    },

    features: [
      "User Management",
      "Service Management",
      "Storage Management",
      "Network Configuration",
      "Troubleshooting",
      "Performance Tuning"
    ],

    keywords: [
      "linux administration",
      "linux system admin",
      "linux administrator",
      "linux server management",
      "linux troubleshooting",
      "linux support"
    ],

    tags: [
      "Linux",
      "Administration",
      "Server Management"
    ],

    icon: Cog
  },

  {
    id: "linux-server-security",
    name: "Linux Server Security",
    category: "Linux",
    service: "Linux Services",
    type: "Linux Security",
    subtype: "Server Hardening",

    description:
      "Linux security configuration focused on reducing unnecessary exposure and improving server access, authentication and system protection.",

    useCases: [
      "Production server hardening",
      "SSH security",
      "Firewall configuration",
      "User access control",
      "Permission management",
      "Security configuration",
      "Server protection"
    ],

    environments: [
      "Businesses",
      "Production Servers",
      "Cloud",
      "Data Centers",
      "Server Rooms"
    ],

    specifications: {
      platform: "Linux",
      security: "Configuration Dependent",
      firewall: "Available",
      ssh: "Security Configuration"
    },

    features: [
      "SSH Hardening",
      "Firewall Configuration",
      "User Access Control",
      "Permission Management",
      "Security Updates",
      "Service Review"
    ],

    keywords: [
      "linux security",
      "linux hardening",
      "server hardening",
      "linux firewall",
      "ssh security",
      "linux server security"
    ],

    tags: [
      "Linux",
      "Security",
      "Hardening",
      "Server"
    ],

    icon: Shield
  },

];

export default linuxProducts;