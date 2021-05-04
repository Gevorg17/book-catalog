import form from "../../store/form"
const properties = require("../../static/bookProperties.json")

export const info = (value) => {
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
    return (
        <div>
            <span>{text}: </span>
            <input placeholder={name === properties.ISBN ? "978-5-XXXXXX-XX-X" : null}
                   pattern={name === properties.ISBN ? "978-5-[0-9]{6}-[0-9]{2}-[0-9]{1}" : null}
                   onChange={handleChange} name={name} defaultValue={value ? value : ''}
                   type={name === properties.RELEASE_YEAR ? "number" : "text"}
                   max={name === properties.RELEASE_YEAR ? 2021 : ''}
                   min={name === properties.RELEASE_YEAR ? 1900 : ''}/>
        </div>
    )


}