import {books} from "../../info";
import Book from "../Book/Book";

const BooksList = () => {
    const booksList = books.map((book, index) => {
        return (
            <Book key={index} book = {book} />
        )
    })

    return (
        <div>
            {booksList}
        </div>
    );
}

export default BooksList;