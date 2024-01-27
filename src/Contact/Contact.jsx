import css from "./Contact.module.css"

export const Contact = ({ items, onDelete }) => {
    return (
        <>
            {items.map((item) =>
            <li className={css.item} key={item.id}>
                <h2 className={css.title}>
                    {item.name}
                </h2>
                <p className={css.discription}>{item.number}</p>
                <button className={css.btn} onClick={() => onDelete(item.id)}>Delete</button>
            </li>)}
        </>
    )
}