"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-8 sm:flex-row sm:justify-between px-6 py-4">
      {/* Logo */}
      <div>
        <Link href="/">
          <Image src="/logo.svg" alt="Ithaca Logo" width={60} height={60} />
        </Link>
      </div>

      {/* Links */}
      <div className="flex gap-6 justify-center">
        <Link
          href="/"
          className={`text-sm ${pathname === "/" ? "font-bold underline underline-offset-4" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/updates"
          className={`text-sm ${pathname === "/updates" ? "font-bold underline underline-offset-4" : ""}`}
        >
          Updates
        </Link>
        <Link
          href="/about"
          className={`text-sm ${pathname === "/about" ? "font-bold underline underline-offset-4" : ""}`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`text-sm ${pathname === "/contact" ? "font-bold underline underline-offset-4" : ""}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}
