import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <footer className="footer flex justify-between bg-base-300 text-base-content p-4">
                <div className='flex gap-2 pt-15 sm:pt-16 lg:pt-20 sm:pb2 lg:pb-4'>
                    <Image src='/logo.png' alt='Logo Image'
                        width={28} height={28} className="w-8 h-8 sm:w-4 sm:h-4 md:w-5 md:h-5" />

                    <p>FITLOG</p>
                </div>
                <aside className="pt-15 sm:pt-16 lg:pt-20 text-slate-500">
                    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;