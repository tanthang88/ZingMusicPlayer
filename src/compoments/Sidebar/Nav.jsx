function Nav(props) {
    console.log(props)
    return (
        <nav className="navbar">
            {props.children}
        </nav>
    )
}
export default Nav