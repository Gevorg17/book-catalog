import Book from "../Book/Book";
import * as mobx from "mobx";
import {observer} from "mobx-react-lite";
import booksStore from "../../store/booksStore";
import "./BooksList.css"

const BooksList = observer(() => {
    const booksList = mobx.toJS(booksStore.getBooks).map((book) => {
        return (
            <Book key={book.id} id={book.id} book = {book} />
        )
    })

    return (
        <div className="books-list">
            {booksList}
        </div>
    );
})

export default BooksList;