import Link from 'next/link'
import React from 'react'
import ThisYear from '../thisYear/ThisYear'

const Footer = () => {
    return (
        <div className='h-[60px] w-full flex justify-center items-center bg-th-footer border-t border-t-gray-400 border-opacity-40 dark:border-opacity-10 cursor-default'>
            <footer className='flex max-w-screen-xl justify-between w-full items-center px-6 flex-col md:flex-row gap-1 md:gap-0'>
                <span className='md:text-xl text-lg font-bold tracking-wider text-th-f-brand'>
                    <Link href='/'>Multiple-Themes</Link>
                </span>
                <span className='md:text-sm text-xs text-neutral-300 tracking-wide text-th-t-footer'>
                    &copy;&nbsp;<ThisYear />&nbsp;
                    Copyrights by&nbsp;
                    <Link href='https://www.kunwarpratap.dev' target='_blank' className='hover:text-orange-400'>@Kunwar-Pratap&nbsp;
                    </Link>
                    | All rights reserved
                </span>
            </footer>
        </div>
    )
}

export default Footer