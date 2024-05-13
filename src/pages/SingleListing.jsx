import React, { useEffect, useState } from 'react'
import { FaCarAlt } from 'react-icons/fa';
import { carListData } from '../data/carList';
import { useParams } from 'react-router-dom';
import { addToBook } from '../features/slices/bookSlice';
import { useDispatch } from 'react-redux';

export default function SingleListing() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const handleBooking = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      addToBook({
        id: data?.id,
        image: data?.image,
        title: data?.name,
        price: data?.price,
      })
    );
  };


  useEffect(() => {
    const car = carListData.find((el) => el.id === params.id.toString());
    if (car) setData((prev) => ({ ...car }));
    setLoading(false);
  }, [params?.id]);

  return (
    <main className='flex flex-col bg-white'>
      {data ? (
        <section
          key={data.id}
          className="px-4 py-5">
          <h2 className="container font-bold mx-auto text-2xl md:text-4xl text-dark pt-5 pb-3 leading-tight flex items-center gap-2">
            <FaCarAlt />
            {data?.name}
          </h2>
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 grid-rows-[repeat(3,150px)] md:grid-rows-[repeat(2,250px)] gap-4">
            <img
              src={data.image[1]}
              alt={data.name}
              className="col-span-2 row-span-2 object-cover h-full w-full rounded-md"
            />
            <img
              src={data.image[2]}
              alt={data.name}
              className="object-cover h-full w-full rounded-md"
            />
            <img
              src={data.image[3]}
              alt={data.name}
              className="object-cover h-full w-full rounded-md"
            />
          </div>
          <div className="container mx-auto flex flex-col py-4">
            <div className=" flex justify-between items-center gap-4">
              <h3 className="text-lg md:text-xl text-slate-800 font-semibold">
                Description
              </h3>
            </div>
            <p className="text-base md:text-lg text-slate-600 font-medium">
              {data?.description}
            </p>
            <button
              onClick={handleBooking}
              className='button-outline place-self-center w-28 mt-8'>BOOK</button>
          </div>
        </section>
      ) : (
        <section className="px-4 py-5">
          <h3 className="text-dark text-xl md:text-2xl text-center py-5">
            {loading ? "Fetching House Details..." : "No Records Found"}
          </h3>
        </section>
      )}
    </main>
  );
}
