"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SCCLogo from "@/components/scc-logo";
import { cn } from "@/lib/utils";
import { X, Menu } from "lucide-react";
import FocusTrap from 'focus-trap-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    {
      title: "소개",
      href: "/about",
      submenu: [
        { title: "히스토리", href: "/about/history" },
        { title: "미디어/파트너", href: "/about/media" },
      ],
    },
    {
      title: "계단정복지도",
      href: "/map",
      submenu: [
        { title: "앱 다운로드", href: "/map/download" },
        { title: "공지사항/FAQ", href: "/map/faq" },
      ],
    },
    {
      title: "활동 함께하기",
      href: "/activities",
      submenu: [
        { title: "크러셔클럽(개인참여)", href: "/activities/crusher-club" },
        { title: "파트너/콜라보/제휴", href: "/activities/partnership" },
      ],
    },
    { title: "후원", href: "/support" },
  ];

  const handleKeyDown = (e: React.KeyboardEvent, item: typeof menuItems[0]) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (item.submenu) {
          setActiveSubmenu(activeSubmenu === item.href ? null : item.href);
        } else {
          // Navigate to the link directly if no submenu
          window.location.href = item.href;
        }
        break;
      case 'Escape':
        setActiveSubmenu(null);
        break;
    }
  };

  const handleSubmenuKeyDown = (e: React.KeyboardEvent, href: string) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        window.location.href = href;
        break;
      case 'Escape':
        setActiveSubmenu(null);
        break;
    }
  };

  return (
    <>
      <div className="h-16"></div>
      <nav className={cn(
        "fixed top-0 left-0 right-0 backdrop-blur-sm transition-all duration-200 z-50 flex justify-between items-center",
        isScrolled || isMobileMenuOpen ? 'bg-white border-gray-200' : 'bg-transparent border-white/10'
      )}>
        <div className="container mx-auto px-8 flex justify-between items-center">
        <div>
          {/* Logo */}
          <Link href="/" className={cn(
            "text-2xl font-bold transition-colors",
            isScrolled || isMobileMenuOpen ? 'text-blue-500' : 'text-white'
          )}>
            <SCCLogo className={cn(
              "h-6",
              isScrolled || isMobileMenuOpen ? 'fill-blue-500' : 'fill-white'
            )}/>
          </Link>
        </div>
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation Menu */}
            <div className={cn(
              "hidden lg:flex space-x-8"
            )}>
              {menuItems.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`
                      transition-colors py-2 outline-none
                      focus-visible:ring-2 focus-visible:ring-blue-500 rounded
                      ${isScrolled 
                        ? 'text-gray-600 hover:text-blue-500' 
                        : 'text-white/90 hover:text-white'
                      }
                    `}
                    aria-expanded={activeSubmenu === item.href}
                    aria-haspopup={item.submenu ? "true" : undefined}
                    role={item.submenu ? "button" : undefined}
                    tabIndex={0}
                    onKeyDown={(e) => handleKeyDown(e, item)}
                  >
                    {item.title}
                  </Link>
                  
                  {item.submenu && (
                    <div 
                      className={`
                        absolute left-0 mt-2 w-48 transition-all duration-200
                        ${activeSubmenu === item.href 
                          ? 'opacity-100 visible' 
                          : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                        }
                      `}
                      role="menu"
                    >
                      <div className={`
                        py-2 rounded-lg shadow-lg
                        ${isScrolled ? 'bg-white' : 'bg-gray-800'}
                      `}>
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`
                              block px-4 py-2 outline-none
                              focus-visible:ring-2 focus-visible:ring-blue-500
                              ${isScrolled 
                                ? 'text-gray-600 hover:text-blue-500 hover:bg-gray-50' 
                                : 'text-white/90 hover:text-white hover:bg-gray-700'
                              }
                            `}
                            role="menuitem"
                            tabIndex={activeSubmenu === item.href ? 0 : -1}
                            onKeyDown={(e) => handleSubmenuKeyDown(e, subItem.href)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
        {/* Mobile Menu Button */}
        {!isMobileMenuOpen && <div className="pr-8">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg",
              isScrolled || isMobileMenuOpen ? 'text-gray-600' : 'text-white'
            )}
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>}

        {/* Mobile Menu Overlay with FocusTrap */}
        {isMobileMenuOpen && (
          <FocusTrap
            focusTrapOptions={{
              allowOutsideClick: true,
              clickOutsideDeactivates: true,
            }}
          >
            <div className={cn(
              "fixed inset-0 bg-white transition duration-200 lg:hidden h-fit overflow-hidden",
              "opacity-0 pointer-events-none",
              isMobileMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : ''
            )}>
              <div className="px-8 pb-4 ">
                <div className="container h-16 relative">
                <div className="relative right-0 top-1/2 transform -translate-y-1/2 flex justify-between items-center">
                  {/* Logo */}
                  <div className="flex items-center text-blue-500">
                    <SCCLogo className={cn(
                      "h-6",
                      'fill-blue-500'
                    )}/>
                  </div>
                  {/* Mobile Menu Close Button */}
                    <button
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className={cn(
                        "lg:hidden p-2 rounded-lg",
                      isScrolled || isMobileMenuOpen ? 'text-gray-600' : 'text-white'
                      )}
                      aria-label="Toggle mobile menu"
                    >
                      {isMobileMenuOpen ? <X className="text-black" size={24} /> : null}
                      </button>
                    </div>
                </div>
                {menuItems.map((item) => (
                  <div key={item.href} className="mb-4">
                    <Link
                      href={item.href}
                      className={cn(
                        "block text-xl font-medium text-gray-900 py-2",
                        "hover:text-blue-500"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                              "block text-gray-600 py-2",
                              "hover:text-blue-500"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FocusTrap>
        )}
      </nav>
    </>
  );
};

export default Navbar;