import React, { useEffect, useState } from 'react';
import { navLinks } from "../data/navLinks";
import { HiMiniBars2 } from "react-icons/hi2";
import { useLocation } from "react-router-dom";




export default function Header() {
    const [navShow, setNavShow] = useState(false);
    const location = useLocation();

    useEffect(() => {
        return () => {
            setNavShow(false);
        };
    }, [location.pathname])
    return (
        <header className='bg-dark relative px-3 w-full z-40'>
            <div className=" container md:max-h-20 md:mx-auto w-full relative py-4 flex justify-between gap-4 items-center bg-dark">
                <div className='flex flex-shrink-0 cursor-pointer px-2 items-center justify-start'>
                    <h1 className='text-3xl text-white font-bold font-serif'>Car Rental</h1>
                </div>
                <nav className={`flex md:justify-evenly justify-center absolute md:flex-row md:static ${navShow ? "left-0" : "left-[100vw]"} top-full w-full bg-dark md:bg-transparent z-50`}>
                    <ul className='flex flex-col md:flex-row items-center md:gap-20 px-2'>
                        {navLinks.map((data =>
                            <li key={data.id}>
                                <a className=' p-3 flex text-white md:hover:border-b-2 md:hover:text-primary  md:hover:border-primary transition-colors duration-500 md:border-transparent text-lg font-medium' href={data.link}>{data.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div onClick={() => setNavShow(!navShow)}
                    className="flex p-2 mx-2 border border-white md:hidden rounded-md cursor-pointer">
                    <HiMiniBars2 className='text-white font-bold text-lg' />
                </div>
            </div>
        </header>
    )
}
