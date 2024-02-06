import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ data }) => {
    return (
        <div className='border p-6 border-gray-400 border-opacity-30 rounded-lg dark:border-opacity-10 overflow-hidden'>
            <div className=" relative h-52 border border-gray-400 border-opacity-20 rounded-lg">
                    <Image
                        src={`/assets/images/blogs/${data.img}`} alt={data.title}
                        fill
                        className=' object-cover rounded-lg'
                    />
            </div>
            <h2 className='mt-5 mb-3 text-lg font-semibold text-th-heading tracking-wider'>{data.title}</h2>
            <p className='text-base tracking-wide text-th-t-primary'>{data.desc}</p>
            <div className='border-none inline-flex py-2 px-6 mt-5 rounded-md  text-sm tracking-wide font-medium  bg-th-button text-th-t-button'>
                <Link href='/' >
                    Read more
                </Link>
            </div>
        </div>
    )
}

export default Card