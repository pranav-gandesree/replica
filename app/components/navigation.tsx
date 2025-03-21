
// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import logo from "../../public/logo.jpg"

// export default function Navigation() {
//   const pathname = usePathname()

//   return (
//     <nav className="flex flex-col sm:flex-row items-center justify-between px-6 py-5 text-[#094D3E]">
     
//       <div className="self-start sm:self-center">
//         <Link href="/">
//           <Image src={logo} alt="kiko network" width={60} height={60} />
//         </Link>
//       </div>

     
//       <div className="flex gap-2 mt-8 sm:mt-0">
//         {[
//           { href: "/", label: "Home" },
//           { href: "/updates", label: "Updates" },
//           { href: "/about", label: "About" },
//           { href: "/contact", label: "Contact" }
//         ].map((link) => (
//           <Link
//             key={link.href}
//             href={link.href}
//             className={`text-base transition-colors duration-300 w-20 text-[#094D3E] ${
//               pathname === link.href
//                 ? "font-bold border-b-2 border-[#094D3E] bg-[#7da59d] rounded-md"
//                 : "hover:text-[#066F55]"
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
     
      <div className="self-start sm:self-center">
        <Link href="/">
          <Image src={logo} alt="Kiko Network" width={60} height={60} />
        </Link>
      </div>

     
      <div className="flex gap-1 mt-8 sm:mt-0">
        {[
          { href: "/", label: "Home" },
          { href: "/updates", label: "Updates" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" }
        ].map((link) => (
          // <Link
          //   key={link.href}
          //   href={link.href}
          //   className={`inline-flex items-center justify-center px-4 rounded-lg text-base transition-colors duration-300 text-[#094D3E] ${
          //     pathname === link.href
          //       ? "font-bold border-b-2 border-[#094D3E] bg-[#7da59d]"
          //       : "hover:text-[#066F55]"
          //   }`}
          // >
          //   {link.label}
          // </Link>



<Link
  key={link.href}
  href={link.href}
  className={`inline-flex items-center justify-center px-4 rounded-lg text-base transition-colors duration-300 
    text-[#094D3E] active:text-white active:bg-[#066F55]
    ${
      pathname === link.href
        ? "font-bold border-b-2 border-[#094D3E] bg-[#7da59d]"
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
