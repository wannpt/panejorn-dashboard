import React from 'react'

import './Card.css'

import {AccessibilityNew, Payment} from '@material-ui/icons'

const SmallCard = (props:any) => {
    return (
        <div className='card small justify-content-center my-2'>
            <div className='row align-items-center px-4'>
                <div className='col-6'>
                    <span className='label-text mx-1'>กาญจนบุรี</span>
                </div>
                <div className='col-3'>
                    <AccessibilityNew className='gradient-text'/>
                    <span className='label-text mx-1'>35,667 คน</span>
                </div>
                <div className='col-3'>
                    <Payment className='gradient-text'/>
                    <span className='label-text mx-1'>176,000 บาท</span>
                </div>
            </div>
        </div>  
    )
}

export default SmallCard