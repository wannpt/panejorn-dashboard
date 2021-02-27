import React, { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import {MenuRounded} from '@material-ui/icons'

import './Menu.css'
import { Link } from 'react-router-dom'

const MenuConstant = [
    {name:'สถิติการท่องเที่ยว',path:'/dashboard/stat'},
    {name:'เทรนด์', path: '/dashboard/trends'},
]


const Menu = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    
    return (
        <>
            <button className='menu-button gradient-text' onClick={toggleDrawer}> <MenuRounded/> </button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left' style={{zIndex:9999}}>
                {
                    MenuConstant.map(el =>{
                        return (
                            <Link to={el.path} onClick={toggleDrawer}>
                                <p>{el.name}</p>
                            </Link>
                        )
                    })
                }
            </Drawer>
        </>
    )
}

export default Menu;