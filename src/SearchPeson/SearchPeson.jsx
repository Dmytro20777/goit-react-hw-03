export const SearchPerson = ({value, onChange }) => {
    return (
        <form>
             <label>Search person
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    autoComplete="off"
                />
        </label>
      </form>
    )
}