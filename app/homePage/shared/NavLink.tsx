"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkClassProps{
    href:string;
    children:React.ReactNode;
}
const NavLinkClass = ({href,children}:NavLinkClassProps) => {
    const pathName = usePathname();

    return (
        <Link href={href} className={pathName === href?"text-[#C2F800] bg-slate-600 rounded-2xl":"btn btn-ghost"}>{children}</Link>
    )
};

export default NavLinkClass;