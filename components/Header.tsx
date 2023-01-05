import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeaderImage from '../public/images/okaycrazy.jpeg'

function Header() {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
            <div className='flex items-center space-x-2'>
                <Link href='/'>
                    <Image
                        src={HeaderImage}
                        height={50}
                        width={50}
                        alt='logo'
                        className='rounded-full' />
                </Link>
                <h1>Home Page</h1>
            </div>
            <div>
                <Link href="buy/now"
                    className='px-5 py-3 text-sm md:text-base bg-red-500 text-[#f7AB0A] flex items-center rounded-full text-center'
                >Start your trial! No Credit Card needed.</Link>
            </div>
        </header>
    )
}

export default Header