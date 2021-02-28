import React from 'react'
import BigCard from '../../components/Card/BigCard'
import SmallCard from '../../components/Card/SmallCard'
import MapComp from '../../components/Map/Map' 
import { connect } from 'react-redux'
import { getData } from '../../constant/dataLoader'



// interface StatWithDate {
//     date: StatTypes[]
// }

// interface StatState {
//     Stats: StatWithDate[]
// }

type propType = {
    province: string,
    sum_nop: Number,
    sum_budget: Number,
    provinceDetails: {
        place: string,
        number_of_people: Number,
        budget: Number
    }[]
}

const Overall = (params: any) => {
    let res:propType = params.res
    let data = getData('country')
    console.log(data)

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
                    <BigCard province={res.province} number_of_people={res.sum_nop} budget={res.sum_budget} />
                    <div className='p-0 card-container'>
                        {
                            res.provinceDetails.map(el => {
                                return <SmallCard province={el.place} number_of_people={el.number_of_people} budget={el.budget}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    console.log(state.StatReducers)
    return {
        res: state.StatReducers || 'error'
    }
}

export default connect(mapStateToProps)(Overall);