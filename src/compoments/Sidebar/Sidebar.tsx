import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import Nav from "./Nav";
import SidebarLogo from "./Logo";
import Item from "./Item";
import Banner from "./Banner";
import "./Sidebar.scss";

const Sidebar: React.FC = (): JSX.Element => {
    return (
        <aside className="sidebar">
            <div className="sidebar__wrapper">
                <Nav>
                    <SidebarLogo />
                </Nav>
                <Nav>
                    <ul className="navbar__menu">
                        <Item
                            path="/"
                            title="Trang Chủ"
                            defaultItemActive={true}
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
                            defaultItemActive={false}
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
                            defaultItemActive={false}
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
                            defaultItemActive={false}
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
                            defaultItemActive={false}
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
                <Nav>
                    <ul className="navbar__menu navbar__menu--bottom">
                        <Item
                            path="/qqqq"
                            title="Nhạc Mới"
                            defaultItemActive={false}
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
                            defaultItemActive={false}
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
                            defaultItemActive={false}
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
                            defaultItemActive={false}
                            icon={
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={solid("clapperboard")}
                                />
                            }
                        />
                    </ul>
                </Nav>
                <Nav>
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
};
export default Sidebar;
