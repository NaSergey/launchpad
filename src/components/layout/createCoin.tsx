"use client";
import { FaTwitter, FaTelegram, FaInstagram, FaTiktok } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from 'next/link';
const Header: React.FC = () => {
  const [color, setColor] = useState("#FFFFFF");

  const colors = ["#FF00FF", "#FFFF00", "#00FF00", "#0000FF"]; 

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex justify-center flex-col items-center p-4">
        <Link href="/create" className="text-slate-50 py-2 text-2xl hover:underline hover:font-bold">
            [Start a new Coin]
        </Link>
      <div
        className="py-2 text-3xl font-extrabold animate-shake"
        style={{ color: color }}
      >
        Pump Fun
      </div>
    </div>
  );
};

export default Header;

