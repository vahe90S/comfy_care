import React from 'react'
import './Navigation.scss'
import {NavLink} from 'react-router-dom'

export default function Navigation({burger}) {
    return (
        <nav className={burger ? "small-desktop-navigation" : "navigation"}>
            <ul className='main-container-purchases'>
                <li>
                    <div className='container-make-purchases'>
                        <span tabIndex='0'>կատարել գնումներ</span>
                        <i className='icon-arrow-down'/>
                    </div>
                    <ul className='container-purchases'>
                        <li>
                            <NavLink to='ChildrenAndNewborns'>երեխաներ եւ նործիններ</NavLink>
                        </li>
                        <li>
                            <NavLink to='Mothers'>մայրիկներ</NavLink>
                        </li>
                        <li>
                            <NavLink to='Pregnant'>հղիներ</NavLink>
                        </li>
                        <li>
                            <NavLink to='Detergents'>լվացող միջոցներ</NavLink>
                        </li>
                        <li>
                            <NavLink to='giftSets'>նվերների սեթեր</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to='AboutUs'>մեր մասին</NavLink>
                </li>
                <li>
                    <NavLink to='deliveryTerms'> առաքման պայմաններ</NavLink>
                </li>
                <li>
                    <NavLink to='bestSeller'>բեսթելլեր</NavLink>
                </li>
            </ul>
        </nav>
    )
}
