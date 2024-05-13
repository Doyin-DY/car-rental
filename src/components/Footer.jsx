import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import { FooterLInks } from '../data/footerLinks'


export default function Footer() {
    return (
        <div className='bg-dark pt-5 text-white'>
            <div className='container'>
                <div className=' grid md:grid-cols-4 py-5'>
                    {/* company details */}
                    <div className='grid place-items-center md:place-items-start py-8 px-4'>
                        <h1 className='text-3xl md:text-3xl font-bold text-left md:text-justify mb-3 gap-3'>Car Rental</h1>
                        <p className='text-center md:text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui dolor officia autem?</p>
                        <br />
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow className='' />
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaMobileAlt />
                            <a href='tel:+2349033247397'>+234 903 324 7397</a>
                        </div>
                        {/* Social Handles */}
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="#">
                                <FaInstagram className='text-3xl hover:text-primary ' />
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl hover:text-primary ' />
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl hover:text-primary ' />
                            </a>
                        </div>
                    </div>
                    {/* Navlinks */}
                    <div className='grid md:grid-cols-3 col-span-3 md:pl-10 place-items-center md:place-items-start'>
                        {/* first col */}
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='md:text-3xl text-xl font-bold text-left md:text-justify mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLInks.map((data) => {
                                            return (
                                                <li key={data.link}
                                                    className='cursor-pointer hover:text-primary duration-200'>
                                                    <span className=' mr-2'>&#11162;</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* Second col */}
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='md:text-3xl text-xl font-bold text-left md:text-justify mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLInks.map((data) => {
                                            return (
                                                <li key={data.link}
                                                    className='cursor-pointer hover:text-primary duration-200'>
                                                    <span className=' mr-2'>&#11162;</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* Third col */}
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='md:text-3xl text-xl font-bold text-left md:text-justify mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLInks.map((data) => {
                                            return (
                                                <li key={data.link}
                                                    className='cursor-pointer hover:text-primary duration-200'>
                                                    <span className=' mr-2'>&#11162;</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <footer className="flex justify-center text-small md:text-base text-slate-200 p-4">
                    &copy; {new Date().getFullYear()} Car Rental. All rights reserved.
                </footer>
        </div>
    )
}
