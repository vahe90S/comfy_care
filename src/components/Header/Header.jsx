import React, {useEffect, useState} from 'react';
import './Header.scss';
import logo from '../../icons/comfy-3.svg';
import Navigation from '../Navigation/Navigation';
import {Link} from 'react-router-dom';
import RegistrationAndLogIn from "../RegistrationAndLogIn/RegistrationAndLogIn";
import Registration from "../Registration/Registration";

export default function Header({usersData, setUsersData}) {
    const [openUser, setOpenUser] = useState(false);
    const [openRegistration, setOpenRegistration] = useState(false);
    const [burger, setBurger] = useState(false);

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
            if (!event.target.closest('.navigation') && !event.target.closest('.container-burger')) {
                setBurger(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    let openMenu = () => {
        setBurger(!burger);
    }

    return (
        <header>
            <Link to='/' className='container-logo'>
                <img src={logo} alt='Logo' className='logo'/>
            </Link>
            <Navigation burger={burger}/>
            <div className="registration" style={{maxHeight: openRegistration ? "800px" : "0px"}}>
                <Registration openRegistrationBlock={openRegistrationBlock} usersData={usersData}
                              setUsersData={setUsersData}/>
            </div>
            <div className='container-right-side'>
                <div className="container-basket-user">
                    <i className='icon-basket basket'/>
                    <i onClick={openRegistrAndLogIn} className='icon-user'/>
                </div>
                <div
                    className="container-register-and-login"
                    style={{maxHeight: openUser ? "700px" : "0px"}}
                >
                    <RegistrationAndLogIn openRegistrationBlock={openRegistrationBlock}/>
                </div>
                <div className="container-burger" onClick={openMenu}>
                    <span></span>
                </div>
            </div>
        </header>
    );
}
