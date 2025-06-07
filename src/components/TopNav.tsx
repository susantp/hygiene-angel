"use client";

import Image from "next/image";

interface ITopNavProps {
    navigations: string[];
}

export default function TopNav({navigations}: ITopNavProps) {
    return (
        <div id="nav" className="flex justify-between px-12 lg:px-64 md:px-36 py-2 items-center">
            <div>
                <Image src="/logo.png" alt="Hygiene Angel Logo" width={16 * 8.2} height={9 * 8.2} priority={true}
                       className="w-auto h-auto"/>
            </div>
            <nav className="flex space-x-28 ">
                {navigations.map((key) => (
                    <a key={key} href={`#${key}`}
                       className="text-gray-700 hover:text-blue-500 font-semibold hover:border-b-2 border-b-primary py-2">{key.toUpperCase()}</a>

                ))}
            </nav>
        </div>
    )
}