import React from "react";
import {SidebarLoading} from "../Loading/Loading";
function Nav({children,isLoading, height, count,...props}) {
    return (
        <>
            {!isLoading ? (
                <nav className="navbar">{children}</nav>
            ) : (
                <nav className="navbar">
                    <SidebarLoading height={height} count={count} {...props}/>
                </nav>
            )}
        </>
    );
}
export default Nav;
