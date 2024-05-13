import React from 'react';
import { car_rental_1, car_rental_2, car_rental_3, car_rental_4, car_rental_5, car_rental_6, car_rental_7, car_rental_8, car_rental_9, } from '../assets/images';
import { skillsData } from '../data/skillsData';
import { carListData } from '../data/carList';
import { testimonialsData } from '../data/testimonialsData';
import { Link } from 'react-router-dom';

export default function Home({
}) {
    return (
        <>
            <main className='bg-black text-white overflow-hidden'>
                <div className='container md:pl-28 min-h-[600px] flex pb-4'>
                    <div className='grid place-items-center grid-cols-1 md:grid-cols-2'>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            className='order-1 sm:order-2'
                        >
                            <img className='max-h-[600px]' src={car_rental_9} alt="" />
                        </div>
                        <div className=' md:order2 order-1 space-y-5 sm:pr-32'>
                            <p
                                data-aos="fade-up"
                                className='text-primary text-2xl font-serif flex md:justify-start justify-center'
                            >Effortless</p>
                            <h1
                                data-aos="fade-up"
                                data-aos-delay="600"
                                className='text-5xl lg:text-7xl md:max-w-10 font-semibold font-serif flex md:justify-start justify-center'                     >Car Rental</h1>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="1000"
                                className='flex justify-center md:pr-6 md:px-0 px-4'
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, a. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, assumenda?</p>
                            <button
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                className=' place-self-center bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300 ml-32 md:ml-0'><a href="./cars">Get Started</a></button>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-100 min-h-[600px] grid place-items-center">
                    <div className="container grid md:grid-cols-2 gap-10 grid-cols-1 place-items-center">
                        <div
                            data-aos="slide-right"
                            data-aos-duration="1500"
                            data-aos-once="false"
                        >
                            <img src={car_rental_3} alt="" />
                        </div>
                        <div className='sm:flex md:grid space-y-5 md:mr-24 md:pr-24 pb-5 px-4'>
                            <h1
                                data-aos="fade-up"
                                className='text-3xl flex justify-center md:justify-start md:text-4xl font-bold font-serif tracking-wider text-black'>About us</h1>
                            <p data-aos="fade-up" className='text-black leading-7'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente doloremque dolor deserunt quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aut est. Reiciendis nemo placeat blanditiis.        </p>

                            <p data-aos="fade-up" className='text-black leading-7'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ullam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, cum.
                            </p>
                            <button data-aos="fade-up" className='button-outline place-self-center max-w-fit flex md:justify-self-start ml-24 md:ml-0'><a href="./about">Get Started</a></button>
                        </div>
                    </div>
                </div>
                <div className='py-14 min-h-[600px] grid place-items-center'>
                    <div className="container">
                        <div className='pb-12'>
                            <h1
                                className='text-3xl font-semibold text-center font-serif md:text-4xl'
                            >Why Choose Us?</h1>
                        </div>
                        <div className='grid grid-cols-1 px-4 md:grid-cols-3 gap-10'>
                            {
                                skillsData.map((skill) => {
                                    return (
                                        <div
                                            key={skill.name}
                                            data-aos="fade-up"
                                            data-aos-delay={skill.aosDelay}
                                            className='card group text-center space-y-3 md:space-y-6 p-4 py-16 bg-dark 
                                         hover:bg-primary duration-30 hover:text-black rounded-lg'>
                                            <div className='grid place-items-center'>
                                                <skill.icon className='text-5xl text-primary group-hover:text-black' />
                                            </div>
                                            <h1>{skill.name}</h1>
                                            <p>{skill.description}</p>
                                            <a href={skill.link}>Learn More</a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='pb-24 pt-12 bg-white text-black'>
                    <div className="container">
                        { }
                        <h1 className='text-3xl px-3 sm:text-4xl font-semibold font-serif mb-3'>Lorem, ipsum dolor.</h1>
                        <p data-aos-="fade-up" className='text-sm px-3 pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iure doloremque. Minus, officiis?
                        </p>
                        {/* Car Listing Cards */}
                        <div>
                            <div className='grid grid-cols-1 place-items-center md:grid-cols-3 gap-16'>
                                {carListData
                                    .filter((car) => car.featured === true)
                                    .map((car) => {
                                        return (
                                            <Link
                                                to={`/cars/${car.id}`}
                                                key={car.id}
                                                data-aos="fade-up"
                                                data-aos-delay={car.aosDelay}
                                                className='space-y-3 w-[20rem] border-2 border-gray-300 hover:border-primary p-2 rounded-xl relative group'>
                                                <div className='w-full h-[160px]'>
                                                    <img
                                                        className='w-full h-[160px] object-contain translate-x-12 group-hover:translate-x-16'
                                                        src={car.image[0]}
                                                        alt="" />
                                                </div>
                                                <div className=' space-y-2'>
                                                    <h1 className='text-primary font-semibold'>{car.name}</h1>
                                                    <div className='flex justify-between items-center text-xl font-semibold'>
                                                        <p>${car.price}/Day</p>
                                                        <a href="#">Details</a>
                                                    </div>
                                                </div>
                                                <p className='text-xl font-semibold absolute top-0 left-3'>
                                                    12Km
                                                </p>
                                            </Link>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className=' grid mt-8'>
                            <button data-aos="fade-up" className=' button-outline w-32 place-self-center'>
                                <a href="./cars">See More</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='py-14 pb-24'>
                    <div className="container">
                        <div className=' space-y-4 pb-12'>
                            <p data-aos="fade-up" className='md:text-3xl font-semibold text-center text-4xl font-serif'>What Our Clients Say About Us</p>
                            <p data-aos="fade-up" className='md:text-center px-4 md:px-44'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, accusantium? Impedit ipsa explicabo laudantium.</p>
                        </div>
                    </div>
                    {/* card section */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-6'>
                        {
                            testimonialsData.map((data) => {
                                return (
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay={data.aosDelay}
                                        key={data.name} className='card text-center group space-y-6 p-4 bg-white/20 py-12 duration-300 rounded-lg'>
                                        <div className='grid place-items-center'>
                                            <img src={data.image} alt="" className='h-20 w-20 rounded-full' />
                                        </div>
                                        <div className='text-yellow-400 text-2xl'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                        <p>{data.description}</p>
                                        <p className='font-semibold text-center'>{data.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    );
}
