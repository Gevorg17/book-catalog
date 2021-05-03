import {makeAutoObservable, runInAction} from "mobx";
import { firestore, collections } from "../db";
// import collections from "../static/collections.json"

class BooksStore {
    booksList = [];
    constructor() {
        makeAutoObservable(this);
        this.getCollection();
    }

    getCollection = () => {
        firestore.collection(collections.BOOKS).get()
            .then((res) => {
                let list = [];
                res.forEach((doc) => {
                    let book = doc.data();
                    book.id = doc.id;
                    list.push(book)
                })
                runInAction(() => {
                    this.booksList = list;
                })
            })
    }

    addBook = async (book) => {
        await firestore.collection(collections.BOOKS).add(book);
        this.getCollection();
    }

    get getBooks() {
        console.log("Hi")
        return this.booksList;

    }

    deleteBook = async (id) => {
        await firestore.collection(collections.BOOKS).doc(id).delete();
        this.getCollection();
    }

    updateBook = async (id, book) => {
        await firestore.collection(collections.BOOKS).doc(id).update(book);
        this.getCollection();
    }

}

export default new BooksStore();