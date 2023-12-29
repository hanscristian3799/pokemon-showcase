'use client'
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="py-5 px-8 bg-main-red flex flex-row items-center justify-between">
            <Link href='/' className="text-xl font-semibold text-white">Pokemon Showcase</Link>
            <ul className="flex flex-row items-center justify-between gap-10">
                <li>
                    <Link href='/' className="text-base text-white font-normal hover:font-semibold transition-all">Home</Link>
                </li>
                <li>
                    <Link href='' className="text-base text-white font-normal hover:font-semibold transition-all">About</Link>
                </li>
                <li>
                    <Link href='' className="text-base text-white font-normal hover:font-semibold transition-all">FAQ</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
