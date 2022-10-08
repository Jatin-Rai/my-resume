import React from 'react'

import Footer from '../footer'
import Navbar from '../Navbar'

const Layout = ({ children }) => {
    return (
        <div className='lg:mx-36 sm:mx-0 md:mx-0'>
            <Navbar />
            <div className=''>
                {children}
            </div>
            <Footer />
        </div>

    )
}

export default Layout