import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <div className="absolute top-0 flex flex-row justify-between items-center w-full max-w-full py-5">
                <div className="flex items-center justify-start">
                    <button className="text-white text-xl font-extrabold pl-5">
                         <Link href={"/"}>
                         AI - Asli Ini
                         </Link>
                    </button>
                </div>
                <div className="flex justify-center max-md:hidden items-center gap-4 flex-row">
                    <button className="text-white text-lg hover:underline">
                        <Link href={"/chat"}>Chat</Link>
                    </button>
                    <button className="text-white text-lg hover:underline">
                        <Link href={"/"}>Home</Link>
                    </button>
                    <button className="text-white text-lg hover:underline">Docs</button>
                </div>
                <div className="flex gap-4 pr-5 justify-end items-center">
                    <button className="text-white text-lg hover:underline">
                        <Link  href="/login">Login</Link>
                    </button>
                    <button className="text-white text-lg hover:underline">
                        About
                    </button>
                </div>
            </div>
        </>
    )
}