import React from "react";
import clsx from "clsx";

function Banner(props) {
    return (
        <>
            <div
                className={clsx("sidebar__banner", props.btnIsVip && "is_vip")}>
                <div>
                    <p className="text">{props.bannerTitle}</p>
                </div>
                <div className={clsx("btn", props.btnIsVip && "is_vip_btn")}>
                    <button>
                        <a href={props.href}>{props.btnTitle.toUpperCase()}</a>
                    </button>
                </div>
            </div>
        </>
    );
}
export default Banner;
