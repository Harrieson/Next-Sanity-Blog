import React from 'react'
import Link from 'next/link'
import { ArrorUturnLeftIcon } from '@heroicons/react/solid'

function StudioNavbar(props: any) {
    return (
        <div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar