"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
 
 const router = useRouter()
 const createTree = ()=>{
 
 router.push('/genrate?handle=${text}')

 }
  const [text, setText] = useState("")
  return (
    <main>
      <section className="bg-[#d2e823] grid grid-cols-2 min-h-[100vh]">
        <div className="flex  ml-[10vw] flex-col gap-3 justify-center">
          <h1 className="text-[#254f1a] font-bold text-7xl ">A link in bio built </h1>
          <h1 className="text-[#254f1a]  font-bold text-7xl ">for you.</h1>
          <p className="text-[#254f1a] text-xl my-4">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-5">
            <input className="bg-white py-3 px-3 focus:outline-[#f3f3f1] rounded-md" type="text" placeholder="Enter your handle" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>createTree()} onChange={()=>setText(e.target.value)} className="bg-[#254f1a] rounded-full px-4 py-4 text-white font-bold">Get started for free</button>
          </div>
        </div>
        <div className=" flex items-center mr-[10vw] flex-col justify-center">
          <img  src="/homepage.webp" alt="homepage" />
        </div>
      </section>
      <section className="bg-[#2665d6]  min-h-[100vh]  ">
        <div className="flex flex-col justify-center items-start gap-[clamp(24px,2.778vw,40px)] w-[54.2vw] max-w-[760px]">
        <h1 className="font-bold text-7xl  text-[#d2e823] text ">Create and customize</h1> 
        <h1 className="font-bold text-7xl  text-[#d2e823] text ">your Linktree in</h1> 
        <h1 className="font-bold text-7xl  text-[#d2e823] text ">minutes</h1>
        <p className="text-white text-[20px] font-bold m-top-10">Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.</p>
        </div>
      </section>
    </main>
  );
}
