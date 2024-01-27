export const ListPersons = ({items, onDelete}) => {
    return (
            <ul>
            {items.map((item) => <li key={item.username}>
                <p>{item.username}</p>
                <button onClick={() => onDelete(item.id)}>Delite</button>
                </li>)}
            </ul>
    )
}