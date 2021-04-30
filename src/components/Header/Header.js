import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="name-block">
                    <span className="name">Book Catalog</span>
                </div>
                <div className="auth-block">
                    <FontAwesomeIcon className="icon" icon={faUser} size="2x"/>
                    <a href="">Войти</a>
                    <span>&nbsp;/&nbsp;</span>
                    <a href="">Регистрация</a>
                </div>
            </header>
        </div>
    );
}

export default Header;