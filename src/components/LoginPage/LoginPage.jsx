import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Сохраняем путь, откуда пользователь пришёл
    const fromPage = location.state?.from || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        // Логика авторизации...
        // После успешного входа возвращаемся на предыдущую страницу
        navigate(fromPage);
    };

    return (
        <div className="login-modal">
            <div className="login-form">
                <h2>Вход</h2>
                <form onSubmit={handleLogin}>
                    <div className="container-inp">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="Enter your username" required/>
                    </div>
                    <div className="container-inp">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter your password" required/>
                    </div>
                    <div className="container-btns">
                        <button type="submit">Войти</button>
                        <button type="button" onClick={() => navigate(fromPage)}>Отмена</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;