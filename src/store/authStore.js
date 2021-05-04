import {makeAutoObservable, runInAction} from "mobx";
import {collections, firestore} from "../db";
import actions from "../static/actions"

class AuthStore {
    constructor() {
        makeAutoObservable(this);
        if (localStorage.getItem('currentUser')) {
            this.currentUserName = localStorage.getItem('currentUser');
            this.isAuthenticated = true;
        }
    }

    isAuthenticated = false;
    currentUserName = null;
    active = false;
    action = actions.DEFAULT;

    setActive = (status, action) => {
        this.active = status;
        this.action = action;
    }

    signUp = async (login, password) => {
        let exists = await firestore.collection(collections.USERS).where('login', '==', login).get();
        if (!exists.empty) {
            alert("User with this name already exists!")
        } else {
            await firestore.collection(collections.USERS).add({login: login, password: password});
        }
    }

    signIn = async (login, password) => {
        let exists = await firestore.collection(collections.USERS).where('login', '==', login).where('password', '==', password).get()
        if (exists.empty) {
            alert("Invalid username or password!")
        } else {
            runInAction(() => {
                this.currentUserName = login;
                this.isAuthenticated = true;
            })
            localStorage.setItem('currentUser', this.currentUserName);
        }
    }

    signOut = async () => {
        runInAction(() => {
            this.currentUserName = null;
            this.isAuthenticated = false;
        })
        localStorage.removeItem('currentUser');
    }
}

export default new AuthStore();