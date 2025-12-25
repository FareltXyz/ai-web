"use client"
import { FaBook, FaRegClock,  } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaDisplay, FaFilePen } from "react-icons/fa6"
import Navbar from "./components/navbar";
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-screen h-screen bg-gray-50 dark:bg-gray-950 min-h-75 flex justify-center items-center">
        <div className="flex flex-col p-4 justify-center items-center">
          <h1 className="text-6xl max-md:text-5xl text-black dark:text-white text-center font-extrabold">
             AI - Asli Ini 
          </h1>
          <h2 className="text-4xl max-md:max-w-sm max-md:text-2xl text-black dark:text-white text-center font-bold">
             Chat AI Santai, Cepat, dan Beneran Ngebantu
          </h2>
          <p className="text-xl max-md:max-w-sm max-md:text-lg text-gray-800 dark:text-gray-400 text-center max-w-xl">
            Platform Chatbot AI menggunakan model Google Genai Gemini 2.5-flash lite, siap membantu pekerjaan, tugas, atau hanya sekedar ngobrol
          </p>
          <div className="flex flex-row items-center justify-center pt-4 gap-5">
            <button onClick={() => { window.location = '/chat' }} className="flex items-center gap-3 text-black dark:text-white py-3 px-7 dark:bg-slate-800 bg-neutral-300 hover:bg-slate-300 rounded-4xl hover:underline dark:hover:bg-slate-900">
              Get Started <FaArrowUpRightFromSquare />
            </button>
            <button className="flex items-center gap-3 text-black dark:text-white bo py-3 px-7 dark:bg-slate-800 bg-neutral-300 rounded-4xl hover:underline hover:bg-slate-300 dark:hover:bg-slate-900">
              Docs <FaBook />
            </button>
          </div>
        </div>
      </main>
      <article className="w-screen lg:h-screen bg-gray-50 dark:bg-gray-950 min-h-75 flex flex-col gap-10 items-center justify-center">
        <div className="border-b w-2/4 z-10 border-gray-400 mb-20"></div>
        <div className="flex flex-row max-lg:flex-col items-center justify-center w-full gap-14">
            <div className="dark:text-white text-black">
              <p className="text-6xl font-extrabold text-center max-md:text-3xl">Fitur Unggulan <br /> Ai - Asli Ini</p>
            </div>
            <div className="max-w-2xl">
              <p className="dark:text-gray-400 text-gray-800 text-lg text-center max-lg:max-w-xs">
                dirancang untuk bekerja cepat dan efisien.
                Didukung model Google Genai Gemini 2.5-flash lite, AI ini memberikan respons instan langsung dari browser tanpa perlu instalasi.
                Cocok untuk membantu menyelesaikan berbagai tugas harian dengan lebih cepat dan praktis.
              </p>
            </div>
        </div>
        <div className="flex flex-row max-lg:flex-col items-start justify-start gap-10 mt-16">
            <div className="flex flex-col items-start justify-start gap-4 h-48">
              <div className="bg-neutral-300 dark:bg-slate-900 p-3 rounded-md">

              <FaRegClock className="text-xl text-black dark:text-white"/>
              </div>
              <p className="dark:text-white text-black text-2xl font-bold"> Cepat & Responsif</p>
              <p className="dark:text-gray-400 text-black max-w-xs">Jawaban instan karena ditenagai Google Genai Gemini 2.5-flash lite — ringan, ngebut, tanpa nunggu lama.</p>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 h-48">
              <div className="bg-neutral-300 dark:bg-slate-900 p-3 rounded-md">

              <FaDisplay className="text-xl text-black dark:text-white"/>
              </div>
              <p className="dark:text-white text-black text-2xl font-bold"> Berbasis Web</p>
              <p className="dark:text-gray-400 text-black max-w-xs">Langsung pakai lewat browser, tanpa install aplikasi tambahan. dan pasti nya gratis</p>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 h-48">
              <div className="bg-neutral-300 dark:bg-slate-900 p-3 rounded-md">

              <FaFilePen className="text-xl text-black dark:text-white"/>
              </div>
              <p className="dark:text-white text-black text-2xl font-bold"> Membantu Pekerjaan</p>
              <p className="dark:text-gray-400 text-black max-w-xs">Membantu menyelesaikan pekerjaan dengan lebih cepat melalui jawaban instan dan solusi yang langsung ke inti.</p>
            </div>
        </div>
        <div className="border-b w-2/4 z-10 border-gray-400 mt-20"></div>
        
      </article>
    </>  
  );
}
