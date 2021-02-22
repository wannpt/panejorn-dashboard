import React, { useEffect } from 'react'
import BigCard from '../../components/Card/BigCard'
import SmallCard from '../../components/Card/SmallCard'
import MapComp from '../../components/Map/Map' 
import { connect } from 'react-redux'
import Menu from '../../components/Menu/Menu'


// interface StatWithDate {
//     date: StatTypes[]
// }

// interface StatState {
//     Stats: StatWithDate[]
// }

type propType = {
    province: string
}

const Overall = ({province}: propType) => {

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
                    <BigCard province={province} />
                    <SmallCard province='กาญจนบุรี' number_of_people='34,568' budget='976,000'/>
                    <SmallCard province='กรุงเทพมหานคร' number_of_people='29,568' budget='759,000'/>
                    <SmallCard province='เชียงใหม่' number_of_people='17,568' budget='569,000'/>
                    <SmallCard province='ชลบุรี' number_of_people='10,568' budget='302,000'/>
                    <SmallCard province='ตาก' number_of_people='7,568' budget='140,000'/>
                    <SmallCard province='อยุธยา' number_of_people='1,568' budget='98,000'/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    console.log('stateToProps')
    console.log(state)
    return {
        province: state.StatReducers.province || 'error'
    }
}

export default connect(mapStateToProps)(Overall);