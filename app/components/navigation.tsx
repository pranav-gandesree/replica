// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import logo from "../../public/logo.jpg"

// export default function Navigation() {
//   const pathname = usePathname()

//   return (
//     <nav className="flex flex-col gap-8 sm:flex-row sm:justify-between px-6 py-4 text-[#094D3E]">
      
//       <div>
//         <Link href="/">
//           <Image src={logo} alt="Kiko Network" width={60} height={60} />
//         </Link>
//       </div>

      
//       <div className="flex gap-6 justify-center">
//         <Link
//           href="/"
//           className={`text-sm ${pathname === "/" ? "font-bold underline underline-offset-4" : ""}`}
//         >
//           Home
//         </Link>
//         <Link
//           href="/updates"
//           className={`text-sm ${pathname === "/updates" ? "font-bold underline underline-offset-4" : ""}`}
//         >
//           Updates
//         </Link>
//         <Link
//           href="/about"
//           className={`text-sm ${pathname === "/about" ? "font-bold underline underline-offset-4" : ""}`}
//         >
//           About
//         </Link>
//         <Link
//           href="/contact"
//           className={`text-sm ${pathname === "/contact" ? "font-bold underline underline-offset-4" : ""}`}
//         >
//           Contact
//         </Link>
//       </div>
//     </nav>
//   )
// }



























// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import logo from "../../public/logo.jpg"

// export default function Navigation() {
//   const pathname = usePathname()

//   return (
//     <nav className="flex flex-col sm:flex-row items-center justify-between px-6 py-5 text-[#094D3E]">
//       {/* Logo aligned to the left */}
//       <div className="self-start sm:self-center">
//         <Link href="/">
//           <Image src={logo} alt="kiko network" width={60} height={60} />
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       <div className="flex gap-8 mt-8 sm:mt-0">
//         {[
//           { href: "/", label: "Home" },
//           { href: "/updates", label: "Updates" },
//           { href: "/about", label: "About" },
//           { href: "/contact", label: "Contact" }
//         ].map((link) => (
//           <Link
//             key={link.href}
//             href={link.href}
//             className={`text-base font-medium transition-colors duration-300 text-[#094D3E] ${
//               pathname === link.href
//                 ? "font-bold border-b-2 border-[#094D3E]"
//                 : "hover:text-[#066F55] font-bold"
//             }`}
//           >
//             {link.label}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   )
// }




















"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logo from "../../public/logo.jpg"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between px-6 py-5 text-[#094D3E]">
      {/* Logo aligned to the left */}
      <div className="self-start sm:self-center">
        <Link href="/">
          <Image src={logo} alt="kiko network" width={60} height={60} />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 mt-8 sm:mt-0">
        {[
          { href: "/", label: "Home" },
          { href: "/updates", label: "Updates" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" }
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-base transition-colors duration-300 text-[#094D3E] ${
              pathname === link.href
                ? "font-bold border-b-2 border-[#094D3E]"
                : "hover:text-[#066F55]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
