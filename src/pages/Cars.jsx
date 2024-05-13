import React from 'react'
import { car_background } from '../assets/images'
import { carListData } from '../data/carList';
import { Link } from 'react-router-dom';

export default function Cars() {
    return (
        <main className='flex flex-col relative bg-white'>
            <div className="bg-dark relative min-h-[65vh] h-[70vh] px-4">
                <img
                    src={car_background}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative py-10 container mx-auto text-white flex flex-col justify-center h-full gap-2">
                    <h3 className="text-3xl md:text-4xl font-bold">Our Cars</h3>
                    <p className="text-base md:text-lg md:max-w-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquam laborum rerum distinctio nemo nostrum itaque provident perspiciatis natus eaque?{" "}
                    </p>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-1 place-items-center md:grid-cols-3 gap-16 m-12'>
                    {carListData
                        .map((car) => {
                            return (
                                <div
                                    className='space-y-3 w-[20rem] border-2 border-gray-300 hover:border-primary p-2 rounded-xl relative group'>
                                    <Link
                                        to={`/cars/${car.id}`}
                                        key={car.id}>
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

                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </main>
    )
}
