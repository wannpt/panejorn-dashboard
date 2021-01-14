import { Col, Row } from 'antd'
import React from 'react'
import './topbar.css'

const topbarStyle = {
    height: 60
}

const Topbar = () => {
    
    return(
       <div className='row text-center'>
           <div className='col'>
               <span className='header'>Panejorn Dashboard</span>
           </div>
       </div>
    )
}

export default Topbar;