import React from "react";
import {Link} from "react-router-dom";
import {SidebarLoading} from "../Loading/Loading";

function SidebarLogo({isLoading}) {
    return (
        <>
            {!isLoading ? (
                <div className="navbar__brand">
                    <Link to="/">
                        <div className="navbar__logo" />
                    </Link>
                </div>
            ) : (
                <div className="navbar">
                    <SidebarLoading height={65} />
                </div>
            )}
        </>
    );
}
export default SidebarLogo;
