"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes";
import { FaHome, FaSun, FaMoon } from "react-icons/fa";
import { FaArrowRightFromBracket, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiHome, FiUser, FiSettings, FiMenu, FiX } from "react-icons/fi"

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Toggle Button (Mobile) */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#1b283f] text-white lg:hidden"
      >
        {open ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      {/* Overlay (Mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          relative max-md:absolute shrink-0 top-0 left-0 z-50 h-screen w-64
          bg-slate-950 border-r border-white/10
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="p-6 text-lg font-bold text-white">
          { theme == "dark" ? "dark" : "light"}
        </div>

        {/* Menu */}
        <nav className="flex flex-col space-y-2 px-4">
          <SidebarItem href="/" icon={<FiHome />} label="Home" />
          <SidebarItem href="/chat" icon={<FaArrowUpRightFromSquare />} label="New Chat" />
          <SidebarItem icon={<FaArrowRightFromBracket />} label="Log Out" />
        </nav>
        <button onClick={() => { setTheme(theme === "dark" ? "light" : "dark" ) }} className="absolute bottom-0 right-0 mb-6 mr-6 p-8 rounded-full text-white bg-gray-900">{ theme == "dark" ? <FaSun /> : <FaMoon />}</button>
      </aside>
    </>
  )
}

function SidebarItem({ href, icon, label }) {
  return (
    <div onClick={href? () => {window.location = href } : null} className="flex items-center space-x-3 p-2 rounded-xl text-gray-300 hover:text-white hover:bg-[#1b283f] cursor-pointer transition">
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  )
}
