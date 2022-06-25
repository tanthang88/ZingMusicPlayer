import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";

function Item(props) {
    let activeClassName = "active";
    return (
        <>
            <li className={clsx("navbar__item")} title={props.title}>
                <NavLink
                    to={props.path}
                    className={({isActive}) =>
                        isActive
                            ? "item__content " + activeClassName
                            : "item__content"
                    }>
                    {props.icon}
                    {props.title}
                </NavLink>
            </li>
        </>
    );
}
export default Item;
