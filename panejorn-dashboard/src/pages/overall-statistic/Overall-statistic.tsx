import React from 'react'
import BigCard from '../../components/Card/BigCard'
import SmallCard from '../../components/Card/SmallCard'
import MapComp from '../../components/Map/Map' 

const Overall = () => {

    console.log('overall works')

    return (
        <div>
            <div className='row mb-4'>
                <div className='col'>
                    <span className='page-title gradient-text'> สถิตินักท่องเที่ยวทั้งหมด </span>
                </div>
            </div>
            <div className='row pt-4'>
                <div className='col-6'>
                    <MapComp/>
                </div>
                <div className='col-6 pr-4'>
                    <BigCard/>
                    <SmallCard/>
                </div>
            </div>
        </div>
    )
}

export default Overall;