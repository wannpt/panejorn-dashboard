import { StatActionInterface, StatActionTypes, StatSelected } from "./statTypes";

//State manager for Stats
const initialState : StatSelected = {
    province: 'ประเทศไทย',
    sum_nop: '102,094',
    sum_budget: '7,193,500',
    provinceDetails: [
        { place: 'กาญจนบุรี', number_of_people: '34,568', budget: '1,976,000' },
        { place: 'กรุงเทพมหานคร', number_of_people: '29,774', budget: '1,838,700' },
        { place: 'เชียงใหม่', number_of_people: '17,667', budget: '1,387,150' },
        { place: 'ชลบุรี', number_of_people: '10,264', budget: '769,700' },
        { place: 'ตาก', number_of_people: '7,931', budget: '669,700' },
        { place: 'อยุธยา', number_of_people: '1,989', budget: '369,700' },
    ]
}

export function StatReducers(state = initialState, action: StatActionInterface): any {
    let result;
    console.log(state)
    switch(action.type){
        case StatActionTypes.SELECT_PROVINCE:
            console.log(action.payload)
            if(action.payload === 'เชียงใหม่')
            {
                result = {
                    province: action.payload,
                    sum_nop: '17,667',
                    sum_budget: '1,387,150',
                    provinceDetails:[
                        { place: 'เวียงกุมกาม', number_of_people: '3,774', budget: '338,700' },
                        { place: 'สวนสัตว์เชียงใหม่', number_of_people: '3,129', budget: '316,450' },
                        { place: 'อุทยานแห่งชาติดอยอินทนนท์', number_of_people: '3,071', budget: '297,420' },
                        { place: 'อุทยานแห่งชาติดอยสุเทพ', number_of_people: '2,861', budget: '167,280' },
                        { place: 'ศูนย์การค้าเมญ่า', number_of_people: '2,511', budget: '160,220' },
                        { place: 'สวนราชพฤกษ์', number_of_people: '2,321', budget: '107,080' },
                    ]
                }
            }
            else
                result = {
                    province: action.payload,
                    sum_nop: state.sum_nop,
                    sum_budget: state.sum_budget,
                    provinceDetails: {...state.provinceDetails}
                };
            
            return result

        default:
            return state
    }
}