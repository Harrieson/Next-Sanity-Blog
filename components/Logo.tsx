import React from 'react'
import Image from 'next/image'
import LogoImage from '../public/images/okaycrazy.jpeg'

function Logo(props: any) {

    const { renderDefault, title } = props
    return (
        <div className='flex items-center space-x-3'>
            <Image src={LogoImage}
                className="rounded-full object-cover"
                height={50} width={50} alt="logo" />
            <>{renderDefault(props)}</>
        </div>
    )
}

export default Logo