"use client"

import { XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Search: "/search",
  Account: "/account",
  Cart: "/cart",
}

const SideMenu = ({
  regions,
  onClose,
}: {
  regions: HttpTypes.StoreRegion[] | null
  onClose: () => void
}) => {
  const toggleState = useToggleState()

  return (
    <div className="flex flex-col fixed inset-0 backdrop-blur-md z-[9999]">
      <div
        data-testid="nav-menu-popup"
        className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-rounded justify-between p-6"
      >
        {/* Close button */}
        <div className="flex justify-end" id="xmark">
          <button data-testid="close-menu-button" onClick={onClose}>
            <XMark />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 items-start justify-start">
          {Object.entries(SideMenuItems).map(([name, href]) => (
            <li key={name}>
              <LocalizedClientLink
                href={href}
                className="text-3xl font-montserrat leading-10 font-bold text-white relative group
                group-hover:translate-y-[-4px]"
                onClick={onClose}
                data-testid={`${name.toLowerCase()}-link`}
              >
                {name}
                {/* Hover Effect */}
                <span
                  className="absolute left-0 bottom-0 w-full h-[7px]
                 bg-coral-red scale-x-0 duration-500
                 group-hover:scale-x-100 transition-all origin-bottom-left"
                />
              </LocalizedClientLink>
            </li>
          ))}
        </ul>

        {/* Country Selector and Footer */}
        <div className="flex flex-col gap-y-6">
          <div
            className="flex justify-between"
            onMouseEnter={toggleState.open}
            onMouseLeave={toggleState.close}
          >
            {regions && (
              <CountrySelect toggleState={toggleState} regions={regions} />
            )}
          </div>
          <Text className="flex justify-between txt-compact-small text-white mt-4">
            © {new Date().getFullYear()} PawKlan Store. All rights reserved.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default SideMenu
