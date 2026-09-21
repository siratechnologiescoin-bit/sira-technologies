
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import { navigation } from "../../data/navigation";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesRef = useRef(null);
  const location = useLocation();

  // =========================================================
  // ACTIVE ROUTE
  // =========================================================
  const isActive = (path) => {
    if (!path) return false;

    // Home
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname === path;
  };

  // =========================================================
  // CHECK IF A SERVICE PAGE IS ACTIVE
  // =========================================================
  const isServiceActive =
    navigation
      .find((item) => item.name === "Services")
      ?.children?.some((child) =>
        isActive(child.path)
      ) || false;

  // =========================================================
  // CLOSE MENUS
  // =========================================================
  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  // =========================================================
  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  // =========================================================
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
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
  // CLOSE MOBILE MENU ON DESKTOP
  // =========================================================
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  // =========================================================
  // CLOSE MENUS AFTER ROUTE CHANGE
  // =========================================================
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-gray-100
        bg-white/95
        backdrop-blur
      "
    >
      <div className="sira-container">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex h-20 items-center justify-between">

          {/* =====================================================
              LOGO
          ====================================================== */}
          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center"
            aria-label="SIRA Technologies Home"
          >
            <img
              src="/images/logo/siralogo.png"
              alt="SIRA Technologies"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <nav
            className="
              hidden
              items-center
              gap-8
              lg:flex
            "
            aria-label="Main navigation"
          >
            {navigation.map((item) => {

              /* =================================================
                 SERVICES DROPDOWN
              ================================================== */
              if (item.children) {
                return (
                  <div
                    key={item.name}
                    ref={servicesRef}
                    className="relative"
                  >
                    {/* Services Button */}
                    <button
                      type="button"
                      onClick={() =>
                        setServicesOpen(
                          (prev) => !prev
                        )
                      }
                      className={`
                        flex
                        items-center
                        gap-1
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
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {item.name}

                      <ChevronDown
                        size={15}
                        className={`
                          transition-transform
                          duration-200
                          ${
                            servicesOpen
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>

                    {/* =================================================
                        SERVICES DROPDOWN
                    ================================================== */}
                    <div
                      className={`
                        absolute
                        left-1/2
                        top-full
                        w-64
                        -translate-x-1/2
                        pt-3
                        transition-all
                        duration-200
                        ${
                          servicesOpen
                            ? "visible opacity-100"
                            : "invisible opacity-0"
                        }
                      `}
                    >
                      <div
                        className="
                          overflow-hidden
                          rounded-lg
                          border
                          border-gray-100
                          bg-white
                          p-2
                          shadow-sira-lg
                        "
                      >
                        {/* Gold line */}
                        <div className="mb-1 h-0.5 w-full bg-sira-gold" />

                        {item.children.map(
                          (child) => {
                            const active =
                              isActive(
                                child.path
                              );

                            return (
                              <Link
                                key={child.path}
                                to={child.path}
                                onClick={() =>
                                  setServicesOpen(
                                    false
                                  )
                                }
                                className={`
                                  mb-1
                                  block
                                  rounded-md
                                  px-4
                                  py-3
                                  text-sm
                                  font-medium
                                  transition-all
                                  duration-200
                                  focus:outline-none
                                  focus:ring-2
                                  focus:ring-sira-red/20
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
                          }
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              /* =================================================
                 NORMAL NAVIGATION ITEM
              ================================================== */

              const active = isActive(
                item.path
              );

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenus}
                  className={`
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

          {/* =====================================================
              DESKTOP GET A QUOTE
          ====================================================== */}
          <Link
            to="/quote"
            onClick={closeMenus}
            className={`
              hidden
              rounded-md
              px-5
              py-3
              text-sm
              font-bold
              transition-all
              duration-200
              focus:outline-none
              focus:ring-2
              focus:ring-sira-red/30
              lg:block
              ${
                location.pathname === "/quote"
                  ? "bg-sira-black text-sira-gold"
                  : "bg-sira-red text-white hover:bg-sira-red-dark"
              }
            `}
          >
            Get a Quote
          </Link>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}
          <button
            type="button"
            onClick={() => {
              if (mobileOpen) {
                closeMenus();
              } else {
                setMobileOpen(true);
              }
            }}
            className="
              rounded-md
              p-1
              text-sira-black
              transition-colors
              hover:text-sira-red
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
              <X size={27} />
            ) : (
              <Menu size={27} />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}
        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="
              border-t
              border-gray-100
              py-5
              lg:hidden
            "
          >
            {navigation.map((item) => {

              /* =================================================
                 MOBILE SERVICES
              ================================================== */
              if (item.children) {
                return (
                  <div key={item.name}>

                    <button
                      type="button"
                      onClick={() =>
                        setServicesOpen(
                          (prev) => !prev
                        )
                      }
                      className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        py-3
                        text-left
                        text-sm
                        font-semibold
                        transition-colors
                        ${
                          isServiceActive
                            ? "text-sira-red"
                            : "text-sira-dark hover:text-sira-red"
                        }
                      `}
                      aria-expanded={servicesOpen}
                    >
                      <span>{item.name}</span>

                      <ChevronDown
                        size={17}
                        className={`
                          transition-transform
                          duration-200
                          ${
                            servicesOpen
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>

                    {/* Mobile Services */}
                    {servicesOpen && (
                      <div
                        className="
                          ml-4
                          border-l-2
                          border-sira-gold
                          pl-4
                        "
                      >
                        {item.children.map(
                          (child) => {
                            const active =
                              isActive(
                                child.path
                              );

                            return (
                              <Link
                                key={child.path}
                                to={child.path}
                                onClick={closeMenus}
                                className={`
                                  mb-1
                                  block
                                  rounded-md
                                  px-3
                                  py-2
                                  text-sm
                                  transition-all
                                  duration-200
                                  ${
                                    active
                                      ? "bg-sira-red font-semibold text-white"
                                      : "text-gray-600 hover:bg-sira-light hover:text-sira-red"
                                  }
                                `}
                              >
                                {child.name}
                              </Link>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              /* =================================================
                 MOBILE NORMAL ITEM
              ================================================== */

              const active = isActive(
                item.path
              );

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenus}
                  className={`
                    block
                    rounded-md
                    py-3
                    text-sm
                    font-semibold
                    transition-colors
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

            {/* =================================================
                MOBILE GET A QUOTE
            ================================================== */}
            <Link
              to="/quote"
              onClick={closeMenus}
              className={`
                mt-3
                block
                rounded-md
                px-5
                py-3
                text-center
                text-sm
                font-bold
                transition-all
                duration-200
                ${
                  location.pathname === "/quote"
                    ? "bg-sira-black text-sira-gold"
                    : "bg-sira-red text-white hover:bg-sira-red-dark"
                }
              `}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


