import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
import auth from "../../store/authStore"
import actions from "../../static/actions"
import {observer} from "mobx-react-lite";

const Header = observer(() => {
    let user = () => {
        if (!auth.currentUserName) {
            return (
                <>
                    <button onClick={() => auth.setActive(true, actions.SIGN_IN)} className="link-button">Войти</button>
                    <span>&nbsp;/&nbsp;</span>
                    <button onClick={() => auth.setActive(true, actions.SIGN_UP)} className="link-button">Регистрация</button>
                </>
            )
        } else {
            return (
                <button onClick={() => auth.signOut()} className="link-button">Выйти</button>
            )
        }
    }

    return (
        <div>
            <header className="header">
                <div className="name-block">
                    <span className="name">Book Catalog</span>
                </div>
                <div className="auth-block">
                    <span className="username">{auth.currentUserName}</span>
                    <FontAwesomeIcon className="icon" icon={faUser} size="2x"/>
                    {user()}
                </div>
            </header>
        </div>
    );
})

export default Header;