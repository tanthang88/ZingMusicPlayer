import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import Nav from "./Nav"
import SidebarLogo from "./Logo";
import Item from './Item'
import "./Sidebar.scss";


function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__wrapper">
                <Nav>
                    <SidebarLogo/>
                </Nav>
                <Nav>
                    <ul className="navbar__menu">
                        <Item
                            title="Trang Chủ"
                            icon={<FontAwesomeIcon className="icon" icon={solid('user')}/>}
                        />
                        <Item
                            title="Khám Phá"
                            icon={<FontAwesomeIcon className="icon" icon={solid('circle-dot')}/>}
                        />
                        <Item
                            title="#zingchart"
                            icon={<FontAwesomeIcon className="icon" icon={solid('chart-line')}/>}
                        />
                        <Item
                            title="Radio"
                            icon={<FontAwesomeIcon className="icon" icon={solid('radio')}/>}
                        />
                        <Item
                            title="Theo Dõi"
                            icon={<FontAwesomeIcon className="icon" icon={solid('table-list')}/>}
                        />
                    </ul>
                </Nav>
                <div className="sidebar__divide"/>
                <Nav>
                    <ul className="navbar__menu navbar__menu--bottom">
                        <Item
                            title="Nhạc Mới"
                            icon={<FontAwesomeIcon className="icon" icon={solid('music')}/>}
                        />
                        <Item
                            title="Thể Loại"
                            icon={<FontAwesomeIcon className="icon" icon={solid('bars-staggered')}/>}
                        />
                        <Item
                            title="Top 100"
                            icon={<FontAwesomeIcon className="icon" icon={solid('star')}/>}
                        />
                        <Item
                            title="MV"
                            icon={<FontAwesomeIcon className="icon" icon={solid('clapperboard')}/>}
                        />
                    </ul>
                </Nav>
            </div>
        </aside>
    )
}
export default Sidebar