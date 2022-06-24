import React from "react";
import {navItemProps} from "../../ultils/types";
import {NavLink} from "react-router-dom";
import clsx from "clsx";

const Item: React.FC<navItemProps> = ({
    path,
    title,
    icon,
    defaultItemActive,
}): JSX.Element => {
    let activeClassName = "active";
    return (
        <li className={clsx("navbar__item")} title={title}>
            <NavLink
                to={path}
                className={({isActive}) =>
                    isActive
                        ? "item__content " + activeClassName
                        : "item__content"
                }>
                {icon}
                {title}
            </NavLink>
        </li>
    );
};
export default Item;
