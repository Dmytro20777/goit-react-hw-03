import { Contact } from "../Contact/Contact"

export const ContactList = ({items, onDelete}) => {
    return (
        <ul>
            <Contact items={ items } onDelete={onDelete} />
        </ul>
    )
}