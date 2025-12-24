"use client"
import { redirect } from "next/navigation";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import { FaPlus, FaPaperPlane } from "react-icons/fa";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

let login = false


export default function Chat() {
    const [ messages, setMessages ] = useState([]);

    async function generate(e) {
        e.preventDefault()
        const prompt = e.target.prompt.value

        setMessages(prev => [
            ...prev,
            { role: "user", text: prompt },
            { role: "ai", text: "" }
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
                    text: result
                };
                return updated;
            });
        }
        
        e.target.reset()
    }

    return (
            <>
                    <form onSubmit={generate}>
                    <div className="relative min-h-screen flex flex-1 bg-gray-950">
                        <div className="absolute gap-4 mx-3 mt-3 px-3 top-0 right-0 h-12 min-w-32 flex items-center justify-end bg-gray-900 rounded-xl">
                            <img src="https://placehold.co/35" className="rounded-full"></img>
                            <p> Someone</p>
                        </div>
                        <Sidebar />
                        <main className="relative top-0 flex flex-col items-center justify-center w-full h-screen">
                            <div className="flex-1 overflow-y-auto max-lg:px-4 py-10 w-full ">
                                <ul className="flex flex-col max-w-2xl gap-10 max-lg:px-4 mx-auto">
                                        <li className="text-dark dark:text-white"><p className="text-transparent text-4xl font-extrabold bg-linear-to-l from-sky-400 to-purple-400 bg-clip-text ">Hai, Ada yang bisa saya bantu</p></li>
                                        {messages.map((msg, i) => (
                                            <li key={i}>
                                                <div
                                                className={
                                                    msg.role == "ai" ? 
                                                    "text-gray-400 text-md gap-3 flex flex-col text-left"
                                                    :
                                                    "text-gray-50 text-md flex justify-end"
                                                }
                                                >
                                                    {
                                                        msg.role == "ai" ?
                                                         (<Markdown remarkPlugins={[remarkGfm]}>
                                                            {msg.text}
                                                        </Markdown>)
                                                         :
                                                        (
                                                            <p className="bg-gray-600/50 p-4 rounded-lg text-right self-end">
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

                                <button className="p-5 rounded-full text-white  bg-gray-900/70 "> <p className="text-white bg-linear-to-r from-sky-400 to-purple-400 bg-clip-text"> <FaPlus className=""/></p> </button>
                                <div className="grow flex max-h-max items-center justify-center rounded-full bg-gray-900"> <textarea name="prompt" placeholder="say anything.." defaultValue={""}  className="text-2xl  text-white resize-none w-full px-7 content-center outline-0"></textarea></div>
                                <button type="submit" className="text-white p-8 rounded-3xl bg-gray-900/70"> <FaPaperPlane /> </button>
                            </div>
                        </main>
                    </div>
                    </form>
                </>
    )
}