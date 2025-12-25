"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes";
import { FaHome, FaSun, FaMoon } from "react-icons/fa";
import { FaArrowRightFromBracket, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiHome, FiUser, FiSettings, FiMenu, FiX } from "react-icons/fi"
import { signOut } from "next-auth/react";

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
          bg-gray-50 dark:bg-slate-950 border-r border-white/10
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="p-6 text-lg font-bold text-black dark:text-white">
          AI - Asli Ini
        </div>

        {/* Menu */}
        <nav className="flex flex-col space-y-2 px-4">
          <SidebarItem func={() => window.location = "/"}  icon={<FiHome />} label="Home" />
          <SidebarItem func={() => window.location = "/chat"} icon={<FaArrowUpRightFromSquare />} label="New Chat" />
          <SidebarItem func={signOut} icon={<FaArrowRightFromBracket />} label="Log Out" />
        </nav>
        <button type="button" onClick={() => { setTheme(theme === "dark" ? "light" : "dark" ) }} className="absolute bottom-0 right-0 mb-6 mr-6 p-8 rounded-full dark:text-white text-black dark:bg-gray-900 bg-gray-200">{ theme == "dark" ? <FaSun /> : <FaMoon />}</button>
      </aside>
    </>
  )
}

function SidebarItem({ func, icon, label }) {
  return (
    <div onClick={func} className="flex items-center space-x-3 p-2 rounded-xl text-gray-700 dark:text-gray-300  hover:dark:text-white hover:text-black  hover:dark:bg-[#1b283f] hover:bg-gray-200 cursor-pointer transition">
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  )
}
