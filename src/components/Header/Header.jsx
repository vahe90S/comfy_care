import React, {useEffect, useState} from 'react';
import './Header.scss';
import logo from '../../icons/comfy-3.svg';
import Navigation from '../Navigation/Navigation';
import {NavLink} from 'react-router-dom';
import RegistrationAndLogIn from "../RegistrationAndLogIn/RegistrationAndLogIn";
import Registration from "../Registration/Registration";

export default function Header({usersData, setUsersData}) {
    const [openUser, setOpenUser] = useState(false);
    const [openRegistration, setOpenRegistration] = useState(false);

    const openRegistrAndLogIn = () => {
        setOpenUser(!openUser);
    };

    const openRegistrationBlock = () => {
        setOpenRegistration(!openRegistration);
        openRegistrAndLogIn();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Если клик вне блока, закрываем его
            if (!event.target.closest('.container-register-and-login') && !event.target.closest('.icon-user')) {
                setOpenUser(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <NavLink to='/' className='container-logo'>
                <img src={logo} alt='Logo' className='logo'/>
            </NavLink>
            <Navigation/>
            <div className="registration" style={{maxHeight: openRegistration ? "800px" : "0px"}}>
                <Registration openRegistrationBlock={openRegistrationBlock} usersData={usersData}
                              setUsersData={setUsersData}/>
            </div>
            <div className='container-right-side'>
                <i className='icon-basket basket'/>
                <i onClick={openRegistrAndLogIn} className='icon-user'/>
                <div
                    className="container-register-and-login"
                    style={{maxHeight: openUser ? "700px" : "0px"}}
                >
                    <RegistrationAndLogIn openRegistrationBlock={openRegistrationBlock}/>
                </div>
                <div className="container-burger">
                    <span></span>
                </div>
            </div>
        </header>
    );
}
