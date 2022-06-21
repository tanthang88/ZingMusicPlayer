function Item(props) {
    return (
        <li className="navbar__item">
            <a title={props.title}>
                {props.icon}
                <span>
                    {props.title}
                </span>
            </a>
        </li>
    )
}
export default Item;