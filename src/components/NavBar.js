import React, { useState } from 'react'
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { Link, } from "react-router-dom"
import SiderBarData from "./SideBarData"
import { IconContext } from "react-icons" //CHANGE COLOR OF THE ICONS 
import NavBarWelkome from "./NavBarWelkome"
function NavBar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar); //TRUE OR FALSE SIDE BAR

    return (
        <>

            <IconContext.Provider value={{ color: 'black' }}>
                <div className="navbar ">
                    <Link to="#" className="menu-bars d-md-none">
                        <FaBars onClick={showSidebar} />

                    </Link>
                    <NavBarWelkome />
                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu '} onClick={showSidebar}>
                    <ul className="nav-menu-items">
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiOutlineClose />
                            </Link>
                        </li>
                        {
                            SiderBarData.map((item, index) => { //MAPPING THE ITEMS OF SIDE BAR DATA
                                return (
                                    <li key={index} className={item.class}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>

            </IconContext.Provider>
        </>
    )
}

export default NavBar
