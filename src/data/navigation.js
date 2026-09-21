export const navigation = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About",
    path: "/about",
  },

  {
    name: "Services",
    children: [
      {
        name: "Linux Services",
        path: "/services/linux",
      },

      {
        name: "Windows Services",
        path: "/services/windows",
      },

      {
        name: "Networking",
        path: "/services/networking",
      },

      {
        name: "CCTV & Security",
        path: "/services/cctv",
      },

      {
        name: "AWS",
        path: "/services/aws",
      },

      {
        name: "IT Support",
        path: "/services/it-support",
      },

      {
        name: "LED Wall",
        path: "/services/led-wall",
      },
    ],
  },

  {
    name: "Products",
    path: "/products",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];