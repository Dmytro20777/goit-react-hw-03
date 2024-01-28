import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css"

export const ContactList = ({items, onDelete}) => {
    return (
        <ul className={css.list}>
            <Contact items={ items } onDelete={onDelete} />
        </ul>
    )
}