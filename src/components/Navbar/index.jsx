import { useState, useEffect, useRef } from "react";
import "./index.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (open && ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("click", checkIfClickedOutside);
        return () => {
            document.removeEventListener("click", checkIfClickedOutside);
        };
    }, [open]);
    return (
        <>
            <div className="flex flex-row items-center justify-between md:justify-around gap-5 py-2 px-5">
                <a
                    href="#"
                    className="flex items-center flex-shrink-0 text-white"
                >
                    <img
                        src={require("../../assets/logo.png")}
                        alt="logo"
                        className="h-12 sm:h-20 w-auto object-contain"
                    />
                </a>
                <div className="hidden sm:flex sm:flex-row">
                    <div className="flex sm:text-[12px] md:text-[14px] xl:text-[16px] sm:mr-[20px] md:mr-[30px] font-bold">
                        <div className="sm:mr-[10px] md:mr-[15px]">
                            <a href="#">Layanan</a>
                        </div>
                        <div className="sm:mr-[10px] md:mr-[15px]">
                            <a href="#">Artikel</a>
                        </div>
                        <div className="sm:mr-[10px] md:mr-[15px]">
                            <a href="#">Program</a>
                        </div>
                        <div className="sm:mr-[10px] md:mr-[15px]">
                            <a href="#">Tentang Kami</a>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center font-bold sm:text-[12px] md:text-[14px] xl:text-[16px]">
                        <div>
                            <a
                                href="#"
                                className="bg-[#84CB25] rounded-md text-white px-2 py-1.5 sm:mr-3 zakat"
                            >
                                Bayar Zakat
                            </a>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="bg-[#84CB25] rounded-md text-white px-2 py-1.5 zakat"
                            >
                                Kalkulator Zakat
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative sm:hidden z-50" ref={ref}>
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center justify-center text-[1.5rem] focus:outline-none focus:ring-2 focus:ring-gray-200 p-1 rounded-lg"
                    >
                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div
                        className={`${
                            open ? "block" : "hidden"
                        } absolute right-0 top-[45px] p-5 w-[90vw] rounded-lg bg-white shadow-2xl border`}
                    >
                        <div className="flex flex-col justify-center gap-3 text-center mb-3">
                            <a
                                href="#"
                                className="bg-[#84CB25] rounded-md text-white py-1 zakat"
                            >
                                Bayar Zakat
                            </a>

                            <a
                                href="#"
                                className="bg-[#84CB25] rounded-md text-white py-1 zakat"
                            >
                                Kalkulator Zakat
                            </a>
                        </div>
                        <div className="flex flex-col font-bold gap-3 text-center">
                            <a
                                href="#"
                                className="hover:bg-slate-100 rounded py-1"
                            >
                                Layanan
                            </a>
                            <a
                                href="#"
                                className="hover:bg-slate-100 rounded py-1"
                            >
                                Artikel
                            </a>
                            <a
                                href="#"
                                className="hover:bg-slate-100 rounded py-1"
                            >
                                Program
                            </a>
                            <a
                                href="#"
                                className="hover:bg-slate-100 rounded py-1"
                            >
                                Tentang Kami
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
