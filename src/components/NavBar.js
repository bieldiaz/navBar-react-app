import React, { useState } from 'react'
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { Link, } from "react-router-dom"
import SiderBarData from "./SideBarData"
import { IconContext } from "react-icons" //CHANGE COLOR OF THE ICONS 

function NavBar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar); //TRUE OR FALSE SIDE BAR

    return (
        <>
            <IconContext.Provider value={{ color: 'red' }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} onClick={showSidebar}>
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
