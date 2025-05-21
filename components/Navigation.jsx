"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {

const menuItems = [
   "Home",
   "New",
   "Popular",
   "Trending",
   "Categories"
  ];

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <Image
            src="/assets/images/logo.svg"
            width={50}
            height={30}
            alt="nextjs with heroui"
          />
        </NavbarBrand>
        <NavbarContent className="md:hidden" justify="end">
          <NavbarMenuToggle/>
        </NavbarContent>
        <NavbarContent className="hidden md:flex">
          <NavbarItem>
            <Link className="hover:text-secondary" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="hover:text-secondary" href="/new">
              New
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="hover:text-secondary" href="/popular">
              Popular
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="hover:text-secondary" href="/trending">
              Trending
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="hover:text-secondary" href="/categories">
              Categories
            </Link>
          </NavbarItem>
        </NavbarContent>


         <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Navigation;
