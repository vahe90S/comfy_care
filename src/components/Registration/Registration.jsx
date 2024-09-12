import React from 'react';
import './Registration.scss'
import {useNavigate} from "react-router-dom";

const Registration = ({openRegistrationBlock, usersData, setUsersData}) => {
    const navigate = useNavigate();
    const formSubmit = async (e) => {
        e.preventDefault();
        const {
            userName: {value: userName},
            password: {value: password},
            confirmPassword: {value: confirmPassword},
        } = e.target
        const newUser = {
            id: new Date().getTime().toString(),
            userName,
            password,
            confirmPassword,
        }
        const checkPassword = newUser.password === newUser.confirmPassword;
        if (checkPassword) {
            const checkNewUser = await usersData.find(user => user.userName === newUser.userName);
            if (checkNewUser) {
                alert('Նման օգտատեր արդեն գոյություն ունի,խնդրում ենք փոխել "username" դաշտը');
                e.target.reset();
            } else {
                setUsersData([...usersData, newUser]);
                const res = await fetch('http://localhost:8080/userData', {
                    method: 'POST',
                    body: JSON.stringify(newUser),
                })
                navigate("/LoginPage")

            }
        } else {
            alert("գաղտնաբառերը չեն համընկնում")
        }
    }
    return (
        <form className="content-registration" onSubmit={formSubmit}>
            <h2>Լրացրեք դաշտը</h2>
            <div className="container-inp">
                <label htmlFor="username">Username</label>
                <input type="text" name="userName" placeholder="Enter your username" required/>
            </div>

            <div className="container-inp">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter your password" required/>
            </div>

            <div className="container-inp">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="Confirm your password"
                       required/>
            </div>
            <div className="container-btns">
                <button type="submit">ԳՐԱՆՑՎԵԼ</button>
                <button type="button" onClick={openRegistrationBlock}>ՉԵՂԱՐԿՈՒՄ</button>
            </div>
        </form>
    );
};

export default Registration;

