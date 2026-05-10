"use client";

import React, { useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  Navbar,
  NavbarButton,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Leadership", link: "#features" },
  { name: "Experience", link: "#pricing" },
  { name: "Profile", link: "#about" },
];

export function HomeNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className="fixed inset-x-0 top-0">
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} onItemClick={() => setIsOpen(false)} />
        <div className="relative z-20 flex items-center gap-2">
          <NavbarButton variant="primary" href="#contact">
            Contact
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen((v) => !v)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="w-full text-neutral-600 dark:text-neutral-200"
            >
              {item.name}
            </a>
          ))}

          <div className="flex w-full flex-col gap-2 pt-2">
            <NavbarButton variant="primary" href="#contact" className="w-full">
              Contact
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

