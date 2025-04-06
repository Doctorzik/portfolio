"use client";
import zik from "../../../src/app/public/logo.svg"
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/#skills" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth-status");
        if (!res.ok) throw new Error("Failed to fetch auth status");

        const data = await res.json();  // Only parse if response is JSON
        setIsAuthenticated(data.isAuthenticated);
      } catch (error) {
     console.error("Error checking authentication status:", error);
        setIsAuthenticated(false);  // Assume not authenticated on error
      }
    }
    checkAuth();
  }, []);

  // Function to handle Blog navigation
  const handleBlogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isAuthenticated) {
      e.preventDefault(); // Prevent navigation
      router.push("/login"); // Redirect to login
    }
  };

  return (
    <header className="shadow-md  fixed w-full top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <Image src={zik} alt="Zik logo" width="50" height="40" className="bg-white" />

        </Link>


        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {links.map((link, index) => (
            <li key={index} className="">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
          {/* Blog Link (Protected) */}
          <li className="hover:bg-gray-700">
            <Link href={isAuthenticated ? "/blog" : "/login"} onClick={handleBlogClick}>
              Blog
            </Link>
          </li>
        </ul>

        {/* Mobile Menu - ShadCN Sheet */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button className="lg:hidden">
              {isOpen ? <span className="text-2xl">&#10005;</span> : <span className="text-2xl">&#9776;</span>}
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-70 bg-black text-white">
            <SheetTitle>Menu</SheetTitle>

            <ul className="space-y-4 mt-4 ">
              {links.map((link, index) => (
                <li key={index} className="hover:bg-gray-700">
                  <Link href={link.href} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
              {/* Blog Link (Protected) */}
              <li className="hover:bg-gray-700">
                <Link href={isAuthenticated ? "/blog" : "/login"} onClick={handleBlogClick}>
                  Blog
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
