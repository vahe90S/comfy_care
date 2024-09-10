import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {Outlet} from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <Header/>
            <div className="outlet" style={{padding: '80px 20px'}}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}
