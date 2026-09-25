import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLinkClass from './NavLink';

const Navbar = () => {
    return (
        <div className="max-lg:collapse bg-base-200 lg:mb-3 shadow-sm w-full rounded-md
        px-4 sm:px-6 lg:px-8">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <Image src='/logo.png' alt='Logo Image' width={28} height={28} className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
                    <button className="btn btn-ghost text-xl">FITLOG</button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <li><NavLinkClass href='/'>Workouts</NavLinkClass></li>
                        <li><NavLinkClass href='/my-plan'>My Plan</NavLinkClass></li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <div className='flex items-center justify-center gap-3'>
                        <button className="bg-transparent border-none shadow-none text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Plan</button>

                       <div className="badge bg-amber-200 badge-md text-black badge-outline rounded-full">0</div>

                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <button className="bg-transparent border-none shadow-none text-slate-400 btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Saved</button>
                        <div className="bg-[##C2F800]">
                            <div className="badge bg-transparent border-slate-600 badge-outline text-white">0</div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="collapse-content lg:hidden z-1">
                <ul className="menu">
                       <li><NavLinkClass href='/'>Workouts</NavLinkClass></li>
                        <li><NavLinkClass href='/my-plan'>My Plan</NavLinkClass></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;