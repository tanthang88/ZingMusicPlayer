import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import React, {useEffect, useState} from "react";
import Nav from "./Nav";
import SidebarLogo from "./Logo";
import Item from "./Item";
import Banner from "./Banner";
import "./Sidebar.scss";

function Sidebar() {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);
    return (
        <aside className="sidebar">
            <div className="sidebar__wrapper">
                <Nav isLoading={isLoading} height={65} count={1}>
                    <SidebarLogo />
                </Nav>
                <Nav isLoading={isLoading} height={50} count={5}>
                    <ul className="navbar__menu">
                        <Item
                            path="/"
                            title="Trang Chủ"
                            icon={
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={solid("user")}
                                />
                            }
                        />

                        <Item
                            path="/abc"
                            title="Khám Phá"
                            icon={
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={solid("circle-dot")}
                                />
                            }
                        />
                        <Item
                            path="/d"
                            title="#zingchart"
                            icon={
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={solid("chart-line")}
                                />
                            }
                        />
                        <Item
                            path="/e"
                            title="Radio"
                            icon={
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={solid("radio")}
                                />
                            }
                        />
                        <Item
                            path="/f"
                            title="Theo Dõi"
                            icon={
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={solid("table-list")}
                                />
                            }
                        />
                    </ul>
                </Nav>
                <div className="sidebar__divide" />
                <Nav isLoading={isLoading} height={50} count={4}>
                    <ul className="navbar__menu navbar__menu--bottom">
                        <Item
                            path="/qqqq"
                            title="Nhạc Mới"
                            icon={
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={solid("music")}
                                />
                            }
                        />
                        <Item
                            path="/www"
                            title="Thể Loại"
                            icon={
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={solid("bars-staggered")}
                                />
                            }
                        />
                        <Item
                            path="/eee"
                            title="Top 100"
                            icon={
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={solid("star")}
                                />
                            }
                        />
                        <Item
                            path="/aaaaa"
                            title="MV"
                            icon={
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={solid("clapperboard")}
                                />
                            }
                        />
                    </ul>
                </Nav>
                <Nav isLoading={isLoading} height={120} count={2}>
                    <Banner
                        bannerTitle="Đăng nhập để khám phá playlist dành riêng cho bạn"
                        href="#"
                        btnTitle="đăng nhập"
                    />
                    <Banner
                        bannerTitle="Nghe nhạc không quảng cáo cùng kho nhạc VIP"
                        href="#"
                        btnTitle="nâng cấp vip"
                        btnIsVip={true}
                    />
                </Nav>
            </div>
        </aside>
    );
}
export default Sidebar;
