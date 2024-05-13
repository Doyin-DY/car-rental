import React from 'react'
import { car_background, car_safety, carlist5 } from '../assets/images'
import { FaPhoneAlt } from 'react-icons/fa'
import { memberData } from '../data/memberData'

export default function About() {
    return (
        <main className='relative bg-white overflow-hidden'>
            <div className="bg-dark relative w-full h-[300px]">
                <img className='absolute top-0 left-0 w-full h-full object-cover opacity-50' src={car_background} alt="" />
                <div className='relative h-full place-items-center flex justify-center'>
                    <h1 className=' font-bold md:text-4xl text-3xl text-white'> ABOUT </h1>
                </div>
            </div>
            <div className="container md:flex grid gap-10 md:my-12 mt-10 mb-10 md:h-[450px]">
                <div className='md:flex md:flex-col grid place-items-center md:place-items-start h-[450px] md:gap-5 gap-2 mx-5 md:w-1/2'>
                    <h1 className='font-bold text-primary text-xl'>About Us</h1>
                    <h1 className='font-bold text-dark text-4xl'>We Are Committed To Providing Safe Ride Solutions</h1>
                    <p className=' text-slate-500 text-base leading-relaxed '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus porro animi, doloremque vitae blanditiis illum sed optio nemo necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, numquam!</p>
                    <p className='text-slate-500 text-base leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque dolore saepe praesentium labore itaque? Reiciendis, rem. Voluptates maiores sapiente fuga.</p>
                    <div className='flex gap-6'>
                        <FaPhoneAlt className='text-primary text-5xl' />
                        <div>
                            <p className='text-xl text-primary'>Need Any Help?</p>
                            <a href='tel:+2349033247397' className='font-medium text-2xl'>+234 903 324 7397</a>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 mx-5'>
                    <img className=' object-cover w-full h-[435px]' src={car_safety} alt="" />
                </div>
            </div>
            <div className='container mt-24'>
                <div className='grid place-items-center gap-3'>
                    <h1 className='text-primary font-bold text-xl'>Experts</h1>
                    <h1 className='text-dark font-bold text-5xl tracking-wider'>Our Members</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mx-4 my-10'>
                    {
                        memberData.map((driver) => {
                            return (
                                <div 
                                key={driver.id}
                                className='card block w-full h-[450px] my-10'
                                >
                                    <img className='w-full h-[350px] object-cover ' src={driver.image} alt="" />
                                    <div className='grid place-items-center border gap-4 shad py-5'>
                                        <h1 className='text-2xl font-bold text-dark'>{driver.name}</h1>
                                        <p className=' text-base text-slate-500'>{driver.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}
