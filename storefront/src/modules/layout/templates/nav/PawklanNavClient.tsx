"use client"

import { useState } from "react"
import Image from "next/image"
import { headerLogo } from "../../../../../public/assets/images"
import { hamburger } from "../../../../../public/assets/icons"
import { navLinks } from "../../../../../public/constants"
import SideMenu from "@modules/layout/components/side-menu"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartDropdown from "@modules/layout/components/cart-dropdown"

// interface PawklanNavClientProps {
//   regions: StoreRegion[]
//   cart: Cart | null
// }

const PawklanNavClient = ({ regions, cart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className="padding-x py-8 sticky top-0 z-10 w-full bg-white shadow-sm">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image
            priority
            src={headerLogo}
            alt="Pawklan Logo"
            width={130}
            height={29}
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.label === "Cart" ? (
                <CartDropdown cart={cart} />
              ) : (
                <LocalizedClientLink
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {link.label}
                </LocalizedClientLink>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <button className="focus:outline-none" onClick={toggleMenu}>
            <Image src={hamburger} alt="Hamburger" width={25} height={25} />
          </button>
        </div>
      </nav>

      {isMenuOpen && <SideMenu onClose={toggleMenu} regions={regions} />}
    </header>
  )
}

export default PawklanNavClient
