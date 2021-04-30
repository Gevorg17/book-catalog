export const info = () => {
    const fields = require("../../book.json")
    return (
        <div>
            {createField(fields.NAME)}
            {createField(fields.AUTHOR)}
            {createField(fields.RELEASE_YEAR)}
            {createField(fields.ISBN)}
        </div>
    )
}

const createField = (name, value) => {
    return (
        <div>
            <span>{name}: </span>
            <input type="text"/>
        </div>
    )
}