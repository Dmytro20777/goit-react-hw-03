import { useId } from "react";

export const SearchBox = ({value, onChange}) => {
    const labelId = useId();
    return (
        <div>
            <label htmlFor={labelId}>Find contacts by name
                <input
                    type="text"
                    name="username"
                    id={labelId}
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                />
            </label>
        </div>
    )
}