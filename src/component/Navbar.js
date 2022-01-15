import logo from "../logo.svg"

export default function Navbar() {

    return (
        <nav className="nav">
            <img src={logo} alt="Logo" className="nav-logo"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )

}