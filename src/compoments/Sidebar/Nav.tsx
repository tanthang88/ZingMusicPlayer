import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

function Nav(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) {
    console.log(props)
    return (
        <nav className="navbar">
            {props.children}
        </nav>
    )
}
export default Nav