export const info = (book) => {
    const fields = require("../../book.json")
    return (
        <div>
            {createInfoField(fields.NAME, book.name)}
            {createInfoField(fields.AUTHOR, book.authors)}
            {createInfoField(fields.RELEASE_YEAR, book.releaseYear)}
            {createInfoField(fields.ISBN, book.ISBN)}
        </div>
    )
}

const createInfoField = (name, value) => {
    return (
        <div>
            <span>{name}: </span>
            <input value={value} readOnly/>
        </div>
    )
}