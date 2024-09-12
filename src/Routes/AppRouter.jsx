import React, {useEffect, useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../Pages/home/Home'
import Layout from '../Layout/Layout'
import ChildrenAndNewborns from '../Pages/Purchases/ChildrenAndNewborns/ChildrenAndNewborns'
import Mothers from '../Pages/Purchases/Mothers'
import Pregnant from '../Pages/Purchases/Pregnant'
import Detergents from '../Pages/Purchases/Detergents'
import AboutUs from '../Pages/AboutUs/AboutUs'
import DeliveryTerms from '../Pages/Purchases/DeliveryTerms'
import BestSeller from '../Pages/BestSeller/BestSeller'
import GiftSets from '../Pages/GiftSets/GiftSets'
import ChildrenAndNewbornsProducts from "../Pages/Purchases/ChildrenAndNewborns/ChildrenAndNewbornsProducts";
import LoginPage from "../components/LoginPage/LoginPage";
import Registration from "../components/Registration/Registration";


export default function AppRouter() {
    const [usersData, setUsersData] = useState([]);
    useEffect(() => {
        const getUsersData = async () => {
            const res = await fetch('http://localhost:8080/userData');
            const data = await res.json();
            setUsersData(data);
        }
        getUsersData();
    }, []);
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout usersData={usersData} setUsersData={setUsersData}/>}>
                    <Route index element={<Home/>}/>
                    <Route path='ChildrenAndNewborns' element={<ChildrenAndNewborns/>}/>
                    <Route path='ChildrenAndNewborns/:id' element={<ChildrenAndNewbornsProducts/>}/>
                    <Route path='Mothers' element={<Mothers/>}/>
                    <Route path='Pregnant' element={<Pregnant/>}/>
                    <Route path='Detergents' element={<Detergents/>}/>
                    {/* Other routes on the menu */}
                    <Route path='aboutUs' element={<AboutUs/>}/>
                    <Route path='DeliveryTerms' element={<DeliveryTerms/>}/>
                    <Route path='BestSeller' element={<BestSeller/>}/>
                    <Route path='GiftSets' element={<GiftSets/>}/>
                </Route>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='registration' element={<Registration/>}/>
            </Routes>
        </div>
    )
}

