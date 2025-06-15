"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { House, LogIn, AppWindowIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const motivationalQuotes = [
    "In the midst of chaos, find your center.",
    "Each breath is a new beginning.",
    "The present moment is filled with joy and happiness.",
    "Peace comes from within. Do not seek it without.",
    "Wherever you are, be there totally."
  ];

  const [currentQuote] = useState(() => 
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
  );

  const handleTimerClick = () => {
    console.log("Timer button was pressed");
  };

  return (

    <div
    className="min-h-screen bg-gradient-to-br from-stone-50 via-stone-50 to-stone-100 text-stone-800 flex flex-col items-center justify-center p-4"
    // className="min-h-screen flex flex-col items-center justify-center p-4"
      // style={{
      //   background: 'radial-gradient(circle at 60% 40%, #eaf1fb 0%, #f8fafc 100%)',
      // }}
    >
      <motion.button
        whileHover={{ scale: 1.015, boxShadow: '0 0 0 8px #eaf1fb' }}
        whileTap={{ scale: 0.98 }}
        onClick={handleTimerClick}
        className="focus:outline-none cursor-pointer"
        style={{
          width: 'min(95vw, 600px)',
          height: 'min(95vw, 600px)',
          background: 'rgba(224, 242, 254, 0.10)',
          border: '1.5px dashed #b7c8f7',
          borderRadius: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          boxSizing: 'border-box',
          transition: 'box-shadow 0.3s',
        }}
      >
        {/* font-thin text-[#6b8fd6] tracking-wide select-none */}
        {/* <span className="text-4xl font-light text-[#6b8fd6]">Start</span>
        <span className="mt-5 text-[22px] font-thin tracking-wide text-[#7faaff] select-none">Begin your focus session</span> */}
        <span className="text-[40px] text-[#6b8fd6] tracking-wide font-thin">Start</span>
        {/* <span className="mt-5 text-[22px] font-thin tracking-wide text-[#7faaff] select-none">Begin your focus session</span> */}
      </motion.button>
    </div>

  );

}