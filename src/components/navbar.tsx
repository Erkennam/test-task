import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const Navbar:FC = ()=>{
    return(
        <nav className="w-full h-[10%] flex justify-center items-center border-b-2 border-[#e8e8e8]">
            <ul className="flex gap-8 text-blue-300">
                <li>
                    <NavLink to="/characters" className={({ isActive }) =>
                           `${isActive && 'text-blue-500'}`
                        }>
                        Персонажи
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/planets" className={({ isActive }) =>
                            `${isActive && 'text-blue-500'}`
                        }>
                        Планеты
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                            `${isActive && 'text-blue-500'}`
                        } to="/space-ships">
                        Космические корабли
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar; 