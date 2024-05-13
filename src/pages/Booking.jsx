import React from 'react'
import { carlist2 } from '../assets/images'
import { useDispatch, useSelector } from 'react-redux'
import { changeInBook, removeFromBook } from '../features/slices/bookSlice';
import { MdClose } from 'react-icons/md';
import toast from 'react-hot-toast';

export default function Booking() {
    const bookState = useSelector((state) => state.book);
    const dispatch = useDispatch();
    return (
        <main className='flex flex-col relative'>
            <div className='bg-dark relative min-h-[65vh] px-4'>
                <img className='absolute top-0 left-0 w-full h-full object-cover opacity-50' src={carlist2} alt="" />
                <div className='relative py-10 container mt-28 mx-auto text-white flex flex-col justify-center h-full gap-2'>
                    <h3 className='text-3xl md:text-4xl font-bold'>BOOKING</h3>
                    <p className='text-base md:text-lg'>
                        Manage your bookings in one page
                    </p>
                </div>
            </div>
            <section className='bg-white px-4 py-10'>
                <div className='container mx-auto flex flex-col divide-y divide-slate-200'>
                    {bookState.length ? (
                        <>
                            {bookState.map((book) => (
                                <aside
                                    key={book.id}
                                    className='bg-white relative p-4 flex item-center gap-4'>
                                    <button
                                        onClick={() => dispatch(removeFromBook({ id: book.id }))}
                                        className='bg-cursor-pointer bg-primary rounded-full w-5 h-5 grid place-items-center absolute z-10 top-2 left-full text-white text-sm'>
                                        <MdClose />
                                    </button>
                                    <img src={book.image[0]} alt={book.name}
                                        className='min-h-10 w-14 object-cover flex-shrink-0' />
                                    <div className='flex-1'>
                                        <h3 className='text-dark text-xl md:text-2xl font-semibold'>
                                            {book.title}
                                        </h3>
                                        <p className='text-primary text-sm sm:text-base md:text-lg'>
                                            ${book.price.toLocaleString()}
                                        </p>
                                    </div>
                                    <div className='border border-slate-200 rounded-md w-10 h-10 overflow-hidden my-auto'>
                                        <label className='absolute bottom-16' For="days">Days</label>     
                                        <input 
                                            
                                            type="number"
                                            name=''
                                            id=''
                                            value={book.qty}
                                            onChange={(e) =>
                                                dispatch(
                                                    changeInBook({ id: book.id, qty: e.target.value })
                                                )
                                            }
                                            className=' re w-16 ml-1 p-2 outline-none text-slate-700 text-sm md:text-base relative'
                                        />
                                    </div>
                                </aside>
                            ))}
                            <div className='flex justify-between items-center gap-4 text-2xl md:text-3xl text-slate-700 '>
                                <h3 className="font-bold">
                                    Total: $
                                    {bookState
                                        .reduce(
                                            (oldTotal, book) => book.qty * book.price + oldTotal, 0
                                        ).toLocaleString()
                                    }

                                </h3>
                                <button
                                onClick={() => {toast.success('Your booking is successful')}} 
                                className='bg-primary py-2 px-4 w-28 my-10 text-white cursor-pointer rounded-md text-sm md:text-base'>
                                    Checkout
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className='text-base md:text-lg text-center'>
                            No Cars Booked
                        </p>
                    )}
                </div>
            </section>
        </main>
    );
}
