import React from "react";
import {Link} from "react-router-dom";

const SidebarLogo: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="navbar__brand">
        <Link to="/">
          <div className="navbar__logo" />
        </Link>
      </div>
    </>
  );
};
export default SidebarLogo;
