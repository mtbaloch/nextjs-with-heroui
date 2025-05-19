"use client";
import React, { useRef } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Link from "next/link";
const SiteNavbar = () => {
  /**
   * Navbar Component
   * 1- Branding (Logo)
   * 2- Links (File Base Routing)
   * 3- Navigation (it is also main element of links)
   * 4- Collapse Menu (Mobile Menu)
   */
  return (
    <>
      <Navbar
        classNames={{
          base: "bg-red-500",
          brand: "",
          content: "text-yellow-500 bg-red-500",
          item:"text-white"
        }}
        disableScrollHandler
        shouldHideOnScroll
        isBordered
        isBlurred="false"
      >
            <NavbarBrand>Logo</NavbarBrand>


         <NavbarContent justify="center">
            <NavbarItem isActive>
                <Link href="/">Home</Link>
            </NavbarItem>
        </NavbarContent>
         <NavbarContent className="hidden md:flex" justify="end">
            <NavbarItem>
                <Link href="/">Porifle Buttons</Link>
            </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default SiteNavbar;
