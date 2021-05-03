import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faWindowClose} from '@fortawesome/free-solid-svg-icons'
import "./AuthModal.css"
import auth from "../../store/authStore"
import {observer} from "mobx-react-lite";
import form from "../../store/form";
import actions from "../../static/actions";

const AuthModal = observer(() => {
    const handleClickAuth = (e) => {
        e.preventDefault();

        if (auth.action === actions.SIGN_IN) {
            auth.signIn(e.target.email.value, e.target.password.value);
        } else if (auth.action === actions.SIGN_UP) {
            auth.signUp(e.target.email.value, e.target.password.value);
        }
        e.target.email.value = null;
        e.target.password.value = null;
        auth.setActive(false, actions.DEFAULT);
    }

    return (
        <div className={auth.active ? "modal active" : "modal"} onClick={() => auth.setActive(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <FontAwesomeIcon onClick={() => auth.setActive(false, actions.DEFAULT)} size="2x" className="icon window-close" icon={faWindowClose}/>
                <div className="form-inner auth-form">
                    <div className="action">
                        <span>{auth.action}</span>
                    </div>
                    <form onSubmit={handleClickAuth}>
                        <div>
                            <span>Email: </span>
                            <input name="email" type="text"/>
                        </div>
                        <div>
                            <span>Password: </span>
                            <input name="password" type="text"/>
                        </div>
                        <button type="submit" className="button auth-button">
                            <span>{auth.action}</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
})

export default AuthModal;