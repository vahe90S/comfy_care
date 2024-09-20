import React from 'react';
import './LoginPage.scss';

const LoginPage = ({OpenCloseLoginBlock}) => {


    return (
        <form className="content-login">
            <h2>Մուտքագրեք ձեր տվյալները անձնական էջ տեղափոխվելու համար</h2>
            <div className="container-inp">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Enter your username"/>
            </div>
            <div className="container-inp">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter your password"/>
            </div>
            <div className="container-inp">
                <label htmlFor="username">Username</label>
                <input type="password" name="confirmPassword" placeholder="Confirm your password"/>
            </div>
            <div className="container-btns">
                <button type="submit">ՄՈՒՏՔ ԳՈՐԾԵԼ</button>
                <button type="button" onClick={OpenCloseLoginBlock}>ԿԱՆԳՆԵՑՆԵԼ</button>
            </div>
        </form>
    );
};

export default LoginPage;