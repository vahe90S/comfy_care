import React from 'react'
import './Header.scss'
import logo from '../../icons/comfy-3.svg'
import Navigation from '../Navigation/Navigation'
import { NavLink } from 'react-router-dom'

export default function Header() {
	return (
		<header>
			<NavLink to='/' className='container-logo'>
				<img src={logo} alt='Logo' className='logo' />
			</NavLink>
			<Navigation />
			<div className='container-right-side'>
				<i className='icon-basket basket' />
				<i className='icon-user' />
			</div>
		</header>
	)
}
