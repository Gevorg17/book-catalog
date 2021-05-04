export const info = (book) => {
    const fields = require("../../static/book.json")
    return (
        <div>
            {createInfoField(fields.NAME, book.name)}
            {createInfoField(fields.AUTHORS, book.authors)}
            {createInfoField(fields.RELEASE_YEAR, book.releaseYear)}
            {createInfoField(fields.ISBN, book.ISBN)}
        </div>
    )
}

const createInfoField = (text, value) => {
    return (
        <div>
            <span>{text}: </span>
            <input value={value} readOnly/>
        </div>
    )
}