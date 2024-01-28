import css from "./Contact.module.css"
import { IoPersonOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";

export const Contact = ({ items, onDelete }) => {
    return (
        <>
            {items.map((item) =>
            <li className={css.item} key={item.id}>
                    <h2 className={css.title}>
                        <IoPersonOutline className={css.iconPerson} />
                    {item.name}
                </h2>
                    <p className={css.discription}>
                        <CiPhone className={css.iconPhone} />{item.number}</p>
                    <button className={css.btn} onClick={() => onDelete(item.id)}>Delete
                        <MdOutlinePersonRemoveAlt1 className={css.iconDelete} />
                    </button>
            </li>)}
        </>
    )
}