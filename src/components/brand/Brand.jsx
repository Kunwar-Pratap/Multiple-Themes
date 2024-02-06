"use client"

import { useTheme } from 'next-themes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Brand = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;
    
    return (
        <div className="md:text-2xl text-xl font-black tracking-wider text-th-brand capitalize">
            <Link href='/'>
                {theme}-Mode
            </Link>
        </div>
    )
}

export default Brand