"use client";
import { useState } from "react"; // Импортировать useState
import { FaTwitter, FaTelegram, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Button from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/store/slices/authSlice';
import type { RootState } from '@/store/store';

const Header: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.auth.currentUser);

    const handleLogout = () => {
        dispatch(logout());
    };


    
  return (
    <div className="flex p-1">
        <Image src={"/image/logo.png"} alt="Logo" width={50} height={50} />
        <div className="flex w-full justify-between items-center">
            <div className="flex flex-col gap-0 ">
                <div className="flex gap-2">
                    <a className="text-sm text-slate-50 hover:underline hover:font-bold" href="/how-it-works" rel="noopener noreferrer" >
                        [how it works]
                    </a>
                    <a className="text-sm text-white hover:underline hover:font-bold" href="/advanced" rel="noopener noreferrer" >
                        [advanced]
                    </a>
                </div>
                <div className="flex gap-2 items-center">
                    <a className="text-sm text-white hover:underline hover:font-bold" href="https://t.me/pumpfunsupport" target="_blank" rel="noopener noreferrer" >
                        [support]
                    </a>
                    <a className="text-white hover:text-slate-400" href="https://twitter.com/pumpdotfun" target="_blank" rel="noopener noreferrer" >
                        <FaTwitter size={16} />
                    </a>
                    <a className="text-white hover:text-slate-400" href="https://t.me/launchonpump" target="_blank" rel="noopener noreferrer" >
                        <FaTelegram size={16} />
                    </a>
                    <a className="text-white hover:text-slate-400" href="https://www.instagram.com/pumpdotfun_/" target="_blank" rel="noopener noreferrer" >
                        <FaInstagram size={16} />
                    </a>
                    <a className="text-white hover:text-slate-400" href="https://www.tiktok.com/@pump.fun" target="_blank" rel="noopener noreferrer" >
                        <FaTiktok size={16} />
                    </a>
                </div>
            </div>
            <div className="flex gap-2 items-center pr-2">
                {currentUser ? (
                    <div className="flex items-center gap-2">
                        <span className="text-white hidden md:flex">{currentUser.email}</span>
                        <Button text="Logout" onClick={handleLogout} />
                    </div>
                ) : (
                    <Button text="Login" onClick={() => setModalOpen(true)} />
                )}
            </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Header;

