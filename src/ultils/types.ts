export interface navItemProps {
    path: string;
    icon: JSX.Element;
    title: string;
    defaultItemActive: boolean;
}
export interface navBannerProps {
    bannerTitle: string;
    btnTitle: string;
    btnIsVip?: boolean;
    href: string;
}
