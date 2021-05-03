import {makeAutoObservable} from "mobx";
import { auth, collections } from "../db";
// import collections from "../static/collections.json"

class UsersStore {
    constructor() {
        makeAutoObservable(this);
    }

    booksList = [];

    addBook = async (book) => {
        firestore.collection(collections.BOOKS).add(book)
            .then(docRef => console.log(docRef.id));
    }

    get getBooks() {
        return this.booksList;
    }

}

export default new UsersStore();