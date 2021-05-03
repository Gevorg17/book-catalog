import form from "../../store/form"

export const info = (value) => {
    const properties = require("../../static/bookProperties.json")
    const fields = require("../../static/book.json")
    return (
        <>
            {createField(fields.NAME, properties.NAME, value.name)}
            {createField(fields.AUTHORS, properties.AUTHORS, value.authors)}
            {createField(fields.RELEASE_YEAR, properties.RELEASE_YEAR, value.releaseYear)}
            {createField(fields.ISBN, properties.ISBN, value.ISBN)}
        </>
    )
}

const createField = (text, name, value) => {
    const handleChange = (e) => {
        e.preventDefault();
        form.formInfoChanged(e.target.name, e.target.value)
    }
    if (value === {}) {
        return (
            <div>
                <span>{text}: </span>
                <input onChange={handleChange} name={name} type="text"/>
            </div>
        )
    } else {
        return (
            <div>
                <span>{text}: </span>
                <input onChange={handleChange} name={name} defaultValue={value} type="text"/>
            </div>
        )
    }

}