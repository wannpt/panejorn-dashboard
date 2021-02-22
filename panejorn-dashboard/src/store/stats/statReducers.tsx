import { StatActionInterface, StatActionTypes, StatSelected } from "./statTypes";

//State manager for Stats
const initialState : StatSelected = {
    province: 'กรุงเทพมหานคร'
}

export function StatReducers(state = initialState, action: StatActionInterface): any {
    switch(action.type){
        case StatActionTypes.SELECT_PROVINCE:
            console.log('its work')
            return { province: action.payload }

        default:
            return state
    }
}