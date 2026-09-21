
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import { navigation } from "../../data/navigation";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const servicesRef = useRef(null);
  const location = useLocation();

  // =========================================================
  // ACTIVE ROUTE
  // =========================================================
  const isActive = (path) => {
    if (!path) return false;

    const currentPath =
      location.pathname.replace(/\/+$/, "") || "/";

    const targetPath =
      path.replace(/\/+$/, "") || "/";

    // Home
    if (targetPath === "/") {
      return currentPath === "/";
    }

    // Exact route or nested route
    return (
      currentPath === targetPath ||
      currentPath.startsWith(`${targetPath}/`)
    );
  };

  // =========================================================
  // FIND SERVICES
  // =========================================================
  const servicesItem = navigation.find(
    (item) =>
      item.name?.toLowerCase() === "services" ||
      item.children
  );

  // =========================================================
  // CHECK ACTIVE SERVICE
  // =========================================================
  const isServiceActive =
    servicesItem?.children?.some((child) =>
      isActive(child.path)
    ) || false;

  // =========================================================
  // CLOSE ALL MENUS
  // =========================================================
  const closeMenus = () => {
    setMobileOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  };

  // =========================================================
  // CLOSE DESKTOP DROPDOWN WHEN CLICKING OUTSIDE
  // =========================================================
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setDesktopServicesOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // =========================================================
  // CLOSE MOBILE MENU WHEN SCREEN BECOMES DESKTOP
  // =========================================================
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // =========================================================
  // CLOSE MENUS AFTER ROUTE CHANGE
  // =========================================================
  useEffect(() => {
    setMobileOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // =========================================================
  // PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  // =========================================================
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/20
        bg-white/75
        backdrop-blur-xl
        supports-[backdrop-filter]:bg-white/55
      "
    >
      <div className="sira-container">

        {/* =====================================================
            HEADER BAR
        ====================================================== */}
        <div
          className="
            flex
            h-16
            items-center
            justify-between
            sm:h-18
            lg:h-20
          "
        >

          {/* ===================================================
              LOGO
          ==================================================== */}
          <Link
            to="/"
            onClick={closeMenus}
            className="
              flex
              shrink-0
              items-center
              touch-manipulation
            "
            aria-label="SIRA Technologies Home"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo/siralogo.png`}
              alt="SIRA Technologies"
              className="
                h-10
                w-auto
                object-contain
                sm:h-12
                lg:h-14
              "
            />
          </Link>

          {/* ===================================================
              DESKTOP NAVIGATION
          ==================================================== */}
          <nav
            className="
              hidden
              items-center
              gap-7
              lg:flex
            "
            aria-label="Main navigation"
          >
            {navigation.map((item) => {

              // =================================================
              // DESKTOP SERVICES
              // =================================================
              if (item.children) {
                return (
                  <div
                    key={item.name}
                    ref={servicesRef}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setDesktopServicesOpen(
                          (prev) => !prev
                        )
                      }
                      className={`
                        flex
                        min-h-10
                        items-center
                        gap-1
                        rounded-md
                        px-2
                        text-sm
                        font-semibold
                        transition-colors
                        duration-200
                        focus:outline-none
                        focus:ring-2
                        focus:ring-sira-red/30
                        ${
                          isServiceActive
                            ? "text-sira-red"
                            : "text-sira-dark hover:text-sira-red"
                        }
                      `}
                      aria-expanded={desktopServicesOpen}
                      aria-haspopup="true"
                    >
                      {item.name}

                      <ChevronDown
                        size={15}
                        className={`
                          transition-transform
                          duration-200
                          ${
                            desktopServicesOpen
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>

                    {/* DESKTOP SERVICES DROPDOWN */}
                    <div
                      className={`
                        absolute
                        left-1/2
                        top-full
                        z-50
                        w-72
                        -translate-x-1/2
                        pt-3
                        transition-all
                        duration-200
                        ${
                          desktopServicesOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-1 opacity-0"
                        }
                      `}
                    >
                      <div
                        className="
                          overflow-hidden
                          rounded-xl
                          border
                          border-white/30
                          bg-white/90
                          p-2
                          shadow-xl
                          backdrop-blur-xl
                        "
                      >
                        {/* GOLD LINE */}
                        <div className="mb-1 h-0.5 w-full bg-sira-gold" />

                        {item.children.map((child) => {
                          const active = isActive(
                            child.path
                          );

                          return (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={closeMenus}
                              className={`
                                mb-1
                                flex
                                min-h-11
                                items-center
                                rounded-lg
                                px-4
                                py-3
                                text-sm
                                font-medium
                                transition-all
                                duration-200
                                ${
                                  active
                                    ? "bg-sira-red text-white"
                                    : "text-gray-700 hover:bg-sira-light hover:text-sira-red"
                                }
                              `}
                            >
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              // =================================================
              // DESKTOP NORMAL LINK
              // =================================================
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenus}
                  className={`
                    flex
                    min-h-10
                    items-center
                    rounded-md
                    px-2
                    text-sm
                    font-semibold
                    transition-colors
                    duration-200
                    ${
                      active
                        ? "text-sira-red"
                        : "text-sira-dark hover:text-sira-red"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* ===================================================
              DESKTOP GET A QUOTE
          ==================================================== */}
          <Link
            to="/quote"
            onClick={closeMenus}
            className={`
              hidden
              min-h-11
              items-center
              rounded-md
              px-5
              text-sm
              font-bold
              transition-all
              duration-200
              focus:outline-none
              focus:ring-2
              focus:ring-sira-red/30
              lg:flex
              ${
                isActive("/quote")
                  ? "bg-sira-black text-sira-gold"
                  : "bg-sira-red text-white hover:bg-sira-red-dark"
              }
            `}
          >
            Get a Quote
          </Link>

          {/* ===================================================
              MOBILE MENU BUTTON
          ==================================================== */}
          <button
            type="button"
            onClick={() => {
              setMobileOpen((prev) => !prev);

              // Reset Services submenu
              setMobileServicesOpen(false);
            }}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-sira-black
              transition-all
              duration-200
              hover:bg-black/5
              hover:text-sira-red
              active:scale-95
              focus:outline-none
              focus:ring-2
              focus:ring-sira-red/30
              lg:hidden
            "
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X size={26} strokeWidth={2.2} />
            ) : (
              <Menu size={26} strokeWidth={2.2} />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}
        {mobileOpen && (
          <>
            {/* MOBILE BACKDROP */}
            <button
              type="button"
              aria-label="Close navigation"
              onClick={closeMenus}
              className="
                fixed
                inset-0
                top-16
                z-40
                bg-black/20
                backdrop-blur-[2px]
                sm:top-18
                lg:hidden
              "
            />

            {/* MOBILE MENU PANEL */}
            <div
              id="mobile-navigation"
              className="
                absolute
                left-0
                right-0
                top-full
                z-50
                max-h-[calc(100vh-4rem)]
                overflow-y-auto
                border-t
                border-white/20
                bg-white/90
                shadow-2xl
                backdrop-blur-xl
                sm:max-h-[calc(100vh-4.5rem)]
                lg:hidden
              "
            >
              <nav
                className="
                  mx-auto
                  w-full
                  max-w-2xl
                  px-4
                  py-4
                  sm:px-6
                  sm:py-5
                "
                aria-label="Mobile navigation"
              >

                {navigation.map((item) => {

                  // =================================================
                  // MOBILE SERVICES
                  // =================================================
                  if (item.children) {
                    return (
                      <div
                        key={item.name}
                        className="
                          border-b
                          border-gray-100/80
                          last:border-0
                        "
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setMobileServicesOpen(
                              (prev) => !prev
                            )
                          }
                          className={`
                            flex
                            min-h-12
                            w-full
                            touch-manipulation
                            items-center
                            justify-between
                            rounded-lg
                            px-3
                            py-3
                            text-left
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            active:scale-[0.99]
                            ${
                              isServiceActive
                                ? "text-sira-red"
                                : "text-sira-dark hover:bg-black/5 hover:text-sira-red"
                            }
                          `}
                          aria-expanded={mobileServicesOpen}
                        >
                          <span>{item.name}</span>

                          <ChevronDown
                            size={19}
                            className={`
                              transition-transform
                              duration-200
                              ${
                                mobileServicesOpen
                                  ? "rotate-180"
                                  : ""
                              }
                            `}
                          />
                        </button>

                        {/* MOBILE SERVICES LIST */}
                        <div
                          className={`
                            grid
                            transition-all
                            duration-200
                            ${
                              mobileServicesOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }
                          `}
                        >
                          <div className="overflow-hidden">
                            <div
                              className="
                                mb-2
                                ml-3
                                border-l-2
                                border-sira-gold
                                pl-3
                              "
                            >
                              {item.children.map((child) => {
                                const active = isActive(
                                  child.path
                                );

                                return (
                                  <Link
                                    key={child.path}
                                    to={child.path}
                                    onClick={closeMenus}
                                    className={`
                                      mb-1
                                      flex
                                      min-h-11
                                      w-full
                                      touch-manipulation
                                      items-center
                                      rounded-lg
                                      px-4
                                      py-2.5
                                      text-sm
                                      font-medium
                                      transition-all
                                      duration-200
                                      active:scale-[0.99]
                                      ${
                                        active
                                          ? "bg-sira-red text-white shadow-sm"
                                          : "text-gray-700 hover:bg-sira-light hover:text-sira-red"
                                      }
                                    `}
                                  >
                                    {child.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // =================================================
                  // MOBILE NORMAL LINK
                  // =================================================
                  const active = isActive(item.path);

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenus}
                      className={`
                        flex
                        min-h-12
                        w-full
                        touch-manipulation
                        items-center
                        rounded-lg
                        border-b
                        border-gray-100/80
                        px-3
                        py-3
                        text-base
                        font-semibold
                        transition-all
                        duration-200
                        active:scale-[0.99]
                        ${
                          active
                            ? "text-sira-red"
                            : "text-sira-dark hover:bg-black/5 hover:text-sira-red"
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* =================================================
                    MOBILE GET A QUOTE
                ================================================== */}
                <Link
                  to="/quote"
                  onClick={closeMenus}
                  className={`
                    mt-4
                    flex
                    min-h-12
                    w-full
                    touch-manipulation
                    items-center
                    justify-center
                    rounded-lg
                    px-5
                    py-3
                    text-base
                    font-bold
                    transition-all
                    duration-200
                    active:scale-[0.98]
                    ${
                      isActive("/quote")
                        ? "bg-sira-black text-sira-gold"
                        : "bg-sira-red text-white hover:bg-sira-red-dark"
                    }
                  `}
                >
                  Get a Quote
                </Link>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;




// import { useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";

// import { navigation } from "../../data/navigation";

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);

//   const servicesRef = useRef(null);
//   const location = useLocation();

//   // =========================================================
//   // ACTIVE ROUTE
//   // =========================================================
//   const isActive = (path) => {
//     if (!path) return false;

//     const currentPath =
//       location.pathname.replace(/\/+$/, "") || "/";

//     const targetPath =
//       path.replace(/\/+$/, "") || "/";

//     // Home
//     if (targetPath === "/") {
//       return currentPath === "/";
//     }

//     // Exact route or nested route
//     return (
//       currentPath === targetPath ||
//       currentPath.startsWith(`${targetPath}/`)
//     );
//   };

//   // =========================================================
//   // CHECK IF ANY SERVICE PAGE IS ACTIVE
//   // =========================================================
//   const servicesItem = navigation.find(
//     (item) =>
//       item.name?.toLowerCase() === "services" ||
//       item.children
//   );

//   const isServiceActive =
//     servicesItem?.children?.some((child) =>
//       isActive(child.path)
//     ) || false;

//   // =========================================================
//   // CLOSE MENUS
//   // =========================================================
//   const closeMenus = () => {
//     setMobileOpen(false);
//     setServicesOpen(false);
//   };

//   // =========================================================
//   // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
//   // =========================================================
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         servicesRef.current &&
//         !servicesRef.current.contains(event.target)
//       ) {
//         setServicesOpen(false);
//       }
//     };

//     document.addEventListener(
//       "mousedown",
//       handleClickOutside
//     );

//     return () => {
//       document.removeEventListener(
//         "mousedown",
//         handleClickOutside
//       );
//     };
//   }, []);

//   // =========================================================
//   // CLOSE MOBILE MENU ON DESKTOP
//   // =========================================================
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setMobileOpen(false);
//         setServicesOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // =========================================================
//   // CLOSE MENUS AFTER ROUTE CHANGE
//   // =========================================================
//   useEffect(() => {
//     setMobileOpen(false);
//     setServicesOpen(false);
//   }, [location.pathname]);

//   return (
//     <header
//       className="
//         sticky
//         top-0
//         z-50
//         border-b
//         border-gray-100
//         bg-white/95
//         backdrop-blur
//       "
//     >
//       <div className="sira-container">

//         {/* =====================================================
//             HEADER
//         ====================================================== */}
//         <div className="flex h-20 items-center justify-between">

//           {/* ===================================================
//               LOGO
//           ==================================================== */}
//           <Link
//             to="/"
//             onClick={closeMenus}
//             className="flex items-center"
//             aria-label="SIRA Technologies Home"
//           >
//             <img
//               src={`${import.meta.env.BASE_URL}images/logo/siralogo.png`}
//               alt="SIRA Technologies"
//               className="h-14 w-auto object-contain"
//             />
//           </Link>

//           {/* ===================================================
//               DESKTOP NAVIGATION
//           ==================================================== */}
//           <nav
//             className="
//               hidden
//               items-center
//               gap-8
//               lg:flex
//             "
//             aria-label="Main navigation"
//           >
//             {navigation.map((item) => {

//               /* =================================================
//                  SERVICES DROPDOWN
//               ================================================== */
//               if (item.children) {
//                 return (
//                   <div
//                     key={item.name}
//                     ref={servicesRef}
//                     className="relative"
//                   >

//                     {/* Services Button */}
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setServicesOpen((prev) => !prev)
//                       }
//                       className={`
//                         flex
//                         items-center
//                         gap-1
//                         text-sm
//                         font-semibold
//                         transition-colors
//                         duration-200
//                         focus:outline-none
//                         focus:ring-2
//                         focus:ring-sira-red/30
//                         ${
//                           isServiceActive
//                             ? "text-sira-red"
//                             : "text-sira-dark hover:text-sira-red"
//                         }
//                       `}
//                       aria-expanded={servicesOpen}
//                       aria-haspopup="true"
//                     >
//                       {item.name}

//                       <ChevronDown
//                         size={15}
//                         className={`
//                           transition-transform
//                           duration-200
//                           ${
//                             servicesOpen
//                               ? "rotate-180"
//                               : ""
//                           }
//                         `}
//                       />
//                     </button>

//                     {/* =================================================
//                         DESKTOP SERVICES DROPDOWN
//                     ================================================== */}
//                     <div
//                       className={`
//                         absolute
//                         left-1/2
//                         top-full
//                         w-72
//                         -translate-x-1/2
//                         pt-3
//                         transition-all
//                         duration-200
//                         ${
//                           servicesOpen
//                             ? "visible opacity-100"
//                             : "invisible opacity-0"
//                         }
//                       `}
//                     >
//                       <div
//                         className="
//                           overflow-hidden
//                           rounded-lg
//                           border
//                           border-gray-100
//                           bg-white
//                           p-2
//                           shadow-sira-lg
//                         "
//                       >

//                         {/* Gold Line */}
//                         <div className="mb-1 h-0.5 w-full bg-sira-gold" />

//                         {item.children.map((child) => {
//                           const active = isActive(child.path);

//                           return (
//                             <Link
//                               key={child.path}
//                               to={child.path}
//                               onClick={closeMenus}
//                               className={`
//                                 mb-1
//                                 block
//                                 rounded-md
//                                 px-4
//                                 py-3
//                                 text-sm
//                                 font-medium
//                                 transition-all
//                                 duration-200
//                                 focus:outline-none
//                                 focus:ring-2
//                                 focus:ring-sira-red/20
//                                 ${
//                                   active
//                                     ? "bg-sira-red text-white"
//                                     : "text-gray-700 hover:bg-sira-light hover:text-sira-red"
//                                 }
//                               `}
//                             >
//                               {child.name}
//                             </Link>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               }

//               /* =================================================
//                  NORMAL DESKTOP NAVIGATION
//               ================================================== */

//               const active = isActive(item.path);

//               return (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   onClick={closeMenus}
//                   className={`
//                     text-sm
//                     font-semibold
//                     transition-colors
//                     duration-200
//                     ${
//                       active
//                         ? "text-sira-red"
//                         : "text-sira-dark hover:text-sira-red"
//                     }
//                   `}
//                 >
//                   {item.name}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* =====================================================
//               DESKTOP GET A QUOTE
//           ====================================================== */}
//           <Link
//             to="/quote"
//             onClick={closeMenus}
//             className={`
//               hidden
//               rounded-md
//               px-5
//               py-3
//               text-sm
//               font-bold
//               transition-all
//               duration-200
//               focus:outline-none
//               focus:ring-2
//               focus:ring-sira-red/30
//               lg:block
//               ${
//                 isActive("/quote")
//                   ? "bg-sira-black text-sira-gold"
//                   : "bg-sira-red text-white hover:bg-sira-red-dark"
//               }
//             `}
//           >
//             Get a Quote
//           </Link>

//           {/* =====================================================
//               MOBILE MENU BUTTON
//           ====================================================== */}
//           <button
//             type="button"
//             onClick={() => {
//               if (mobileOpen) {
//                 closeMenus();
//               } else {
//                 setMobileOpen(true);
//               }
//             }}
//             className="
//               rounded-md
//               p-1
//               text-sira-black
//               transition-colors
//               hover:text-sira-red
//               focus:outline-none
//               focus:ring-2
//               focus:ring-sira-red/30
//               lg:hidden
//             "
//             aria-label={
//               mobileOpen
//                 ? "Close navigation menu"
//                 : "Open navigation menu"
//             }
//             aria-expanded={mobileOpen}
//             aria-controls="mobile-navigation"
//           >
//             {mobileOpen ? (
//               <X size={27} />
//             ) : (
//               <Menu size={27} />
//             )}
//           </button>
//         </div>

//         {/* =====================================================
//             MOBILE NAVIGATION
//         ====================================================== */}
//         {mobileOpen && (
//           <div
//             id="mobile-navigation"
//             className="
//               border-t
//               border-gray-100
//               py-5
//               lg:hidden
//             "
//           >
//             {navigation.map((item) => {

//               /* ===============================================
//                  MOBILE SERVICES
//               ================================================ */
//               if (item.children) {
//                 return (
//                   <div key={item.name}>

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setServicesOpen((prev) => !prev)
//                       }
//                       className={`
//                         flex
//                         w-full
//                         items-center
//                         justify-between
//                         py-3
//                         text-left
//                         text-sm
//                         font-semibold
//                         transition-colors
//                         ${
//                           isServiceActive
//                             ? "text-sira-red"
//                             : "text-sira-dark hover:text-sira-red"
//                         }
//                       `}
//                       aria-expanded={servicesOpen}
//                     >
//                       <span>{item.name}</span>

//                       <ChevronDown
//                         size={17}
//                         className={`
//                           transition-transform
//                           duration-200
//                           ${
//                             servicesOpen
//                               ? "rotate-180"
//                               : ""
//                           }
//                         `}
//                       />
//                     </button>

//                     {/* Mobile Services List */}
//                     {servicesOpen && (
//                       <div
//                         className="
//                           ml-4
//                           border-l-2
//                           border-sira-gold
//                           pl-4
//                         "
//                       >
//                         {item.children.map((child) => {
//                           const active = isActive(child.path);

//                           return (
//                             <Link
//                               key={child.path}
//                               to={child.path}
//                               onClick={closeMenus}
//                               className={`
//                                 mb-1
//                                 block
//                                 rounded-md
//                                 px-3
//                                 py-2
//                                 text-sm
//                                 transition-all
//                                 duration-200
//                                 ${
//                                   active
//                                     ? "bg-sira-red font-semibold text-white"
//                                     : "text-gray-600 hover:bg-sira-light hover:text-sira-red"
//                                 }
//                               `}
//                             >
//                               {child.name}
//                             </Link>
//                           );
//                         })}
//                       </div>
//                     )}
//                   </div>
//                 );
//               }

//               /* ===============================================
//                  MOBILE NORMAL NAVIGATION
//               ================================================ */

//               const active = isActive(item.path);

//               return (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   onClick={closeMenus}
//                   className={`
//                     block
//                     rounded-md
//                     py-3
//                     text-sm
//                     font-semibold
//                     transition-colors
//                     ${
//                       active
//                         ? "text-sira-red"
//                         : "text-sira-dark hover:text-sira-red"
//                     }
//                   `}
//                 >
//                   {item.name}
//                 </Link>
//               );
//             })}

//             {/* =================================================
//                 MOBILE GET A QUOTE
//             ================================================== */}
//             <Link
//               to="/quote"
//               onClick={closeMenus}
//               className={`
//                 mt-3
//                 block
//                 rounded-md
//                 px-5
//                 py-3
//                 text-center
//                 text-sm
//                 font-bold
//                 transition-all
//                 duration-200
//                 ${
//                   isActive("/quote")
//                     ? "bg-sira-black text-sira-gold"
//                     : "bg-sira-red text-white hover:bg-sira-red-dark"
//                 }
//               `}
//             >
//               Get a Quote
//             </Link>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;