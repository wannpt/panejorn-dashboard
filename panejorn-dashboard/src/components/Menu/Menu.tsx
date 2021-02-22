import React, { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import {MenuRounded} from '@material-ui/icons'

import './Menu.css'

const Menu = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    
    return (
        <>
            <button className='menu-button gradient-text' onClick={toggleDrawer}> <MenuRounded/> </button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left' style={{zIndex:9999}}>
                <div>Hello World</div>
            </Drawer>
        </>
    )
}

export default Menu;