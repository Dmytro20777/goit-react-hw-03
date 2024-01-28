import { useId } from "react";
import css from "./SearchBox.module.css";

export const SearchBox = ({value, onChange}) => {
    const labelId = useId();
    return (
        <div className={css.container}>
            <label className={css.label} htmlFor={labelId}>Find contacts by name
                <input
                    className={css.input}
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