"use client"

import React, { useEffect, useState } from 'react';

const ThisYear = () => {
    const [year, setYear] = useState(2023);

    useEffect(() => {
        const getYear = new Date().getFullYear();
        setYear(getYear);
    }, [])

    return (
        <>
            {year}
        </>
    )
}

export default ThisYear