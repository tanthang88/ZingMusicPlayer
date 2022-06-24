import React from "react";
import {navBannerProps} from "../../ultils/types";
import clsx from "clsx";

const Banner: React.FC<navBannerProps> = ({
    bannerTitle,
    href,
    btnTitle,
    btnIsVip,
}) => {
    return (
        <>
            <div className={clsx("sidebar__banner", btnIsVip && "is_vip")}>
                <div>
                    <p className="text">{bannerTitle}</p>
                </div>
                <div className={clsx("btn", btnIsVip && "is_vip_btn")}>
                    <button>
                        <a href={href}>{btnTitle.toUpperCase()}</a>
                    </button>
                </div>
            </div>
        </>
    );
};
export default Banner;
