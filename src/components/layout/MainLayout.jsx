import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../nav/Navbar'
import NextThemeProvider from '../theme/themeProvider/NextThemeProvider'

const MainLayout = ({ children }) => {
    return (
        <NextThemeProvider>
            <div className='min-h-screen flex flex-col justify-between items-center w-full  bg-th-main duration-300 transition-colors'>
                <Navbar />
                <main className='max-w-screen-xl mx-auto w-full h-full px-6 cursor-default'>
                    {children}
                </main>
                <Footer />
            </div>
        </NextThemeProvider>
    )
}

export default MainLayout