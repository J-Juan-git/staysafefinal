import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Home from '../Home'
const Layout = ({child,title="Book the best hotel for your Holiday!!"}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default Layout
