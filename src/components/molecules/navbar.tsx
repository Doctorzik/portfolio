"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky shadow-md bg-[#000]/90  fixed w-full top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold ">
          MyLogo
        </a>

        {/* Desktop Menu - Always visible on large screens */}
        <ul className="hidden lg:flex space-x-6">
          {links.map((link, index) => {
            return (
              <li key={index} className="hover:bg-gray-700">
                <Link href={link.href}>
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile Menu Button - Hidden on large screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden  focus:outline-none"
        >
          {isOpen ? (
            <span className="text-2xl">&#10005;</span> // Close icon (X)
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger icon (☰)
          )}
        </button>
      </nav>

      {/* Mobile Menu - Hidden on large screens */}
      <ul
        className={`absolute w-full  shadow-md p-4 space-y-4 lg:hidden transition-all duration-300 ${isOpen ? "block" : "hidden"
          }`}
      >
        {links.map((link, index) => {
          return (
            <li key={index} className="hover:bg-gray-700">
              <Link href={link.href}>
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  );
}
