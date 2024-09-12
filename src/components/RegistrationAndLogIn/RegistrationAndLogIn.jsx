import React from 'react';
import './RegistrationAndLogIn.scss'

const RegistrationAndLogIn = ({openRegistrationBlock}) => {
    return (
        <div className="content-register-login">
            <span className="cursor" onClick={openRegistrationBlock}>Գրանցվել</span>
            <span>&</span>
            <span className="cursor">Մուտք գործել</span>
        </div>
    );
};

export default RegistrationAndLogIn;
