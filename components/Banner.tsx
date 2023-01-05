import React from 'react'

function Banner() {
    return (
        <div>
            <div>
                <h1 className="text-7xl">Tech Tats Blog</h1>
                <h2 className="mt-5 md:mt-0">
                    Welcome to {"  "}
                    <span className='underline decoration-4 decoration-[#F7AB0A]'>
                        Tech enthusiast </span>
                    favourite Blog
                </h2>
            </div>
            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                What's trending news | New tech reviews just before you buy | Where to get the best deals!
            </p>


        </div>
    )
}

export default Banner