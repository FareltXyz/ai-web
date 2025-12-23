import { redirect } from "next/navigation";
import Sidebar from "../components/sidebar";
import { FaPlus, FaPaperPlane } from "react-icons/fa";
let login = false

export default function Chat() {
    return (
        <>
            { login ? redirect("/login") : 
                <>
                    <div className="relative min-h-screen flex flex-1 bg-gray-950">
                        <div className="absolute gap-4 mx-3 mt-3 px-3 top-0 right-0 h-12 min-w-32 flex items-center justify-end bg-gray-900 rounded-xl">
                            <img src="https://placehold.co/35" className="rounded-full"></img>
                            <p> Someone</p>
                        </div>
                        <Sidebar />
                        <main className="relative top-0 flex flex-col items-center justify-center w-full h-screen">
                            <div className=" flex-col flex items-center justify-center grow">
                                <h1 className="max-lg:max-w-64 text-center text-transparent bg-linear-to-r from-sky-400 to-purple-400 bg-clip-text text-4xl font-extrabold"> Hai, Ada yang bisa saya bantu?</h1>
                            </div>
                            <div className="sticky bottom-0 max-w-3/5 w-3/5 min-w-0 max-h-2/3 flex flex-row items-center h-24 gap-4">
                                <button className="p-5 rounded-full  bg-gray-900/70 "> <p className="text-white bg-linear-to-r from-sky-400 to-purple-400 bg-clip-text"> <FaPlus className=""/></p> </button>
                                <div className="grow flex max-h-max items-center justify-center rounded-full bg-gray-900"> <textarea name="message" placeholder="say anything.." defaultValue={""}  className="text-2xl resize-none w-full px-7 content-center outline-0"></textarea></div>
                                <button className="p-8 rounded-3xl bg-gray-900/70"> <FaPaperPlane /> </button>
                            </div>
                        </main>
                    </div>
                </>

            } 
        </>
    )
}