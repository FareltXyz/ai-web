"use client"

import Navbar from "../components/navbar"
import { useState, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Login() {
    const { status } = useSession([])
    const route = useRouter()
     const [mounted, setMounted] = useState(false)
      useEffect(() => {
          setMounted(true)
          if (status == "authenticated") {
             route.push("/chat")
          }
      }, [status, route])
    
    if (!mounted) return null
    return(
        <>
            <Navbar />
            <main className="h-screen w-screen bg-gray-950 flex flex-row items-center p-20 gap-4">
                <div>
                    <h1 className="text-6xl text-white font-extrabold">
                        Login Dulu, YUK
                    </h1>
                    <h2 className="text-4xl text-white font-bold">
                        Aman Aja kok
                    </h2>
                    <p className="text-gray-400">
                        Karena ini pakai autentikasi google jadi aman aja
                    </p>
                    <button onClick={() => {signIn("google")}} className="flex items-center justify-center gap-3 py-4 px-12 bg-slate-800 rounded-xl mt-20 shadow-sky-400/50 text-lg shadow-lg text-white hover:bg-slate-900 hover:underline">
                        <FaGoogle /> Login With google
                    </button>
                </div>
            </main>
        </>
    )
}