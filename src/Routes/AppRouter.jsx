import React from 'react'
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


export default function AppRouter() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
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
            </Routes>
        </div>
    )
}
