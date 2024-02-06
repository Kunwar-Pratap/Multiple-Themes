import { fakeData } from '@/fakeData/fakeData'
import React from 'react'
import Card from '../card/Card'

const BlogsLayout = () => {
    return (
        <div className='py-24'>
            <h1 className='text-center font-bold text-2xl tracking-wider capitalize mb-12 text-th-p-heading underline underline-offset-[12px]'>Recent blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {fakeData.map((data) => {
                    return (
                        <Card key={data.id} data={data} />
                    )
                })}
            </div>
        </div>
    )
}

export default BlogsLayout