import React from 'react';
import './RegistrationAndLogIn.scss'

const RegistrationAndLogIn = ({openRegistrationBlock, OpenCloseLoginBlock}) => {
    return (
        <div className="content-register-login">
            <span className="cursor" onClick={openRegistrationBlock}>Գրանցվել</span>
            <span>&</span>
            <span className="cursor" onClick={OpenCloseLoginBlock}>Մուտք գործել</span>
        </div>
    );
};

export default RegistrationAndLogIn;
