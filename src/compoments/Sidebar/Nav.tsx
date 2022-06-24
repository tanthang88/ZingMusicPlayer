import React from "react";

const Nav: (props: any) => JSX.Element | React.DetailedHTMLProps<any, any> = (
    props: any
) => {
    return <nav className="navbar">{props.children}</nav>;
};
export default Nav;
