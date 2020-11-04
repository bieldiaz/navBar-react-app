import React from 'react'
import SiderBarData from "./SideBarData"
import { Link, } from "react-router-dom"

function NavBarWelkome() {
    return (
        <div className="d-none d-md-block ml-auto">
            <nav className="navbar navbar-expand-md navbar-light ">
                {
                    SiderBarData.map((item, index) => { //MAPPING THE ITEMS OF SIDE BAR DATA
                        return (
                            <ul class="navbar-nav mr-auto">
                                <li key={index} >
                                    <Link to={item.path} class="nav-item">
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            </ul>

                        )
                    })
                }
            </nav>
        </div>
    )
}

export default NavBarWelkome
