import React from 'react'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/solid'

function StudioNavbar(props: any) {
    return (
        <div>
            <div className='flex items-center justify-space-between p-5'>
                <Link href="/" className='text-[#F7AB0A] flex items-center'>
                    <ArrowLeftIcon className="h-6 w-6 text-[F7AB0A] mr-2" />
                    Go to Website</Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar