import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <main className='flex flex-row justify-between px-10 py-5'>
        {/* Image */}
        <div>
            <h1 className='text-[14px] font-bold'>KK</h1>
        </div>

        {/* Links */}
        <div className="text-left">
            <ul className="px-10 text-[14px] space-x-3.5">
                {[
                { label: "X", url: "https://x.com/kluivstar" },
                { label: "LI", url: "https://www.linkedin.com/in/kasimu-kluivert" },
                { label: "GH", url: "https://github.com/kluivstar" },
                ].map(({ label, url }) => (
                <li
                    key={label}
                    className="relative inline-block cursor-pointer 
                            transition-transform duration-300 ease-out 
                            hover:-translate-y-1 group"
                >
                    <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative"
                    >
                    {label}
                    {/* underline effect */}
                    <span
                        className="absolute left-0 -bottom-1 h-[3px] bg-white w-0 
                                transition-all duration-300 ease-out 
                                group-hover:w-full"
                    />
                    </a>
                </li>
                ))}
            </ul>
        </div>
    </main>
  )
}

export default Header