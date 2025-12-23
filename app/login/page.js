import Navbar from "../components/navbar"
import { FaGoogle } from "react-icons/fa";

export default function Login() {
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
                    <button className="flex items-center justify-center gap-3 py-4 px-32 bg-slate-800 rounded-xl mt-20 shadow-sky-500/50 shadow-lg text-white hover:bg-slate-900 hover:underline">
                        <FaGoogle /> Login With google
                    </button>
                </div>
            </main>
        </>
    )
}