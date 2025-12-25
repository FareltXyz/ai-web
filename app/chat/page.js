"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import { FaPlus, FaPaperPlane } from "react-icons/fa";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react"
export function Thinking() {
    return ( 
        <>
         <div className="flex gap-1 text-sky-400 text-2xl">
            <span className="animate-bounce">•</span>
            <span className="animate-bounce [animation-delay:0.2s]">•</span>
            <span className="animate-bounce [animation-delay:0.4s]">•</span>
        </div>
    </>
    )
}

export default function Chat() {
    
    const router = useRouter() 
    
    let { data: session, status } = useSession()
    const [ messages, setMessages ] = useState([]);
    const [ mounted, setMounted ] = useState(false)
    console.log(messages)
    useEffect(() => {
        setMounted(true)
        if(status == "unauthenticated") {
            router.push("/login")
        }
    },[status, router]) 
    if (!mounted ) return null;


    
    async function generate(e) {
        e.preventDefault()
        const prompt = e.target.prompt.value
        
        setMessages(prev => [
            ...prev,
            { role: "user", text: prompt },
            { role: "ai", text: "", isThinking: true}
        ])
        
        const res = await fetch("/api/fetch", {
            method: "POST",
            body: JSON.stringify({
                prompt
            })
        })
        let result = '';
        const decoder = new TextDecoder();
        const reader = res.body.getReader();
        
        while(true) {
            const { value, done } = await reader.read();
            if (done) break
            
            result += decoder.decode(value, {stream: true})
            console.log(result)
            setMessages(prev => {
                const updated = [...prev]
                updated[updated.length -1] = {
                    role: "ai",
                    text: result,
                    isThinking: false,
                };
                return updated;
            });
        }
        
        e.target.reset()
    }
    
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); 
            e.currentTarget.form.requestSubmit();
        }
    };

        return (
        <>
                    <form name="generator" onSubmit={generate}>
                    <div className="relative min-h-screen flex flex-1 bg-white dark:bg-gray-950">
                        <div className="absolute gap-4 mx-3 mt-3 px-3 top-0 right-0 h-12 min-w-32 flex items-center justify-end text-black dark:text-white dark:bg-gray-900 bg-gray-100 rounded-xl">
                            <Image width={35} height={35}  src={session?.user?.image || "/avatar.png"} alt="pfp" className="rounded-full" />
                            <p> {session?.user?.name}</p>
                        </div>
                        <Sidebar />
                        <main className="relative top-0 flex flex-col items-center justify-center  w-full h-screen">
                            <div className="flex-1 overflow-y-auto max-lg:px-4 py-10 w-full ">
                                <ul className="flex flex-col max-w-2xl gap-10 max-lg:px-4 mx-auto">
                                        <li className="text-dark dark:text-white"><p className={ messages.length == 0 ? "text-transparent  text-4xl font-extrabold bg-linear-to-l from-sky-400 to-purple-400 bg-clip-text " : "hidden" }>Hai, Ada yang bisa saya bantu</p></li>
                                        {messages.map((msg, i) => (
                                            <li key={i}>
                                                <div
                                                className={
                                                    msg.role == "ai" ? 
                                                    "text-gray-800 dark:text-gray-400 text-md gap-3 flex flex-col text-left"
                                                    :
                                                    "text-black dark:text-gray-50 text-md flex justify-end"
                                                }
                                                >
                                                    {
                                                        msg.role == "ai" ? (
                                                          msg.isThinking ?  (
                                                            <Thinking />
                                                        ) :
                                                            (<Markdown remarkPlugins={[remarkGfm]}>
                                                                {msg.text}
                                                            </Markdown>)
                                                        )
                                                         :
                                                        (
                                                            <p className="bg-gray-300 max-w-5 whitespace-pre-wrap dark:bg-gray-600/50 p-4 rounded-lg text-start self-end">
                                                                {msg.text}
                                                            </p>
                                                        )
                                                    }
                                                </div>
                                            </li>
                                        ))}
                                    </ul>                        
                            </div>
                            <div className="sticky bottom-0 max-w-3/5 max-lg:max-w-full lg:w-3/5 min-w-0 max-h-2/3 flex flex-row items-center h-24 gap-4">

                                <button className="p-5 rounded-full text-white bg-gray-200  dark:bg-gray-900/70 "> <p className="text-black dark:text-white bg-linear-to-r from-sky-400 to-purple-400 bg-clip-text"> <FaPlus className=""/></p> </button>
                                <div className="grow flex max-h-max items-center justify-center rounded-full bg-gray-200 dark:bg-gray-900"> <textarea onKeyDown={handleKeyDown} name="prompt" placeholder="say anything.." defaultValue={""}  className="text-2xl max-lg:text-lg text-black dark:text-white resize-none w-full px-7 content-center outline-0"></textarea></div>
                                <button type="submit" className="text-black dark:text-white p-5 min-w-0 min-h-0 rounded-xl bg-gray-200 dark:bg-gray-900/70"> <FaPaperPlane /> </button>
                            </div>
                        </main>
                    </div>
                    </form>
                </>
    )
}