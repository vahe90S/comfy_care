import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {Outlet} from 'react-router-dom'

export default function Layout({usersData, setUsersData}) {
    return (
        <>
            <Header usersData={usersData} setUsersData={setUsersData}/>
            <div className="outlet" style={{padding: '80px 20px'}}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}
