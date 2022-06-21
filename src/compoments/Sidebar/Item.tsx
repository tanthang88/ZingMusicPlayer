/* eslint-disable jsx-a11y/anchor-is-valid */
function Item(props: any): any {
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