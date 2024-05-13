import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react';
import Cars from './pages/Cars';
import SingleListing from './pages/SingleListing';
import Booking from './pages/Booking';
import About from './pages/About';

export default function App() {
  function PageLayout(){
    return (
      <>
        <Header />
        <Outlet />
        <Footer /> 
      </>
    );
  }

  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cars",
          element: <Cars />,
        },
        {
          path: "/cars/:id",
          element: <SingleListing />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/booking",
          element: <Booking />,
        },
      ]
    }
  ]);

// AOS Initialization
React.useEffect (() => {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
  });
  AOS.refresh();
}, []);
  return (
    <div className='bg-primary'>
      <Toaster></Toaster>
      <RouterProvider router={pageRoutes}></RouterProvider>
    </div>
  );
};
