import { NavLink, Outlet } from "react-router-dom";

const navLinks = ['Home','Battle','Popular']

function Navigation() {
    return (  
        <div className="container">
            <ul className="nav">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink 
                        to={link === 'Home' ? '/' : link.toLowerCase()}>
                            {link}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Outlet/>
        </div>
    );
}

export default Navigation;