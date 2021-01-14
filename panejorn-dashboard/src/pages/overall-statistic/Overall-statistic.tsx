import React from 'react'
import Map from '../../components/Map/Map'

const Overall = () => {

    console.log('overall works')

    return (
        <div>
            <div className='row mb-4'>
                <div className='col'>
                    <span className='page-title gradient-background'> สถิตินักท่องเที่ยวทั้งหมด </span>
                </div>
            </div>
            <div className='row pt-4'>
                <div className='col-6'>
                    <Map/>
                </div>
                <div className='col-6'>
                    This should be card section
                </div>
            </div>
        </div>
    )
}

export default Overall;