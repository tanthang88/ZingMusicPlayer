import React from "react";
import {navItemProps} from "../../ultils/types";

const Item: React.FC<navItemProps> = ({title,icon}) => {
    return (
        <li className="navbar__item">
            <a title={title}>
                {icon}
                <span>
                    {title}
                </span>
            </a>


        </li>
    )
}
export default Item