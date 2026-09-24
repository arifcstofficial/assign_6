import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className="max-lg:collapse bg-base-200 lg:mb-3 shadow-sm w-full rounded-md">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <Image src='/logo.png' alt='Logo Image' width={28} height={28} className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    <button className="btn btn-ghost text-xl">FITLOG</button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><button>Workouts</button></li>
                        <li><button>My Plan</button></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Responsive</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Responsive</button>

                </div>
            </div>

            <div className="collapse-content lg:hidden z-1">
                <ul className="menu">
                    <li><button>Workouts</button></li>
                    <li><button>My Plan</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;