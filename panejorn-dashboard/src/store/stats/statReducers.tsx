import { StatActionInterface, StatActionTypes, StatState } from "./statTypes";

//State manager for Stats
const initialState : StatState = {
    Stats:  []
}

export function StatReducers(state = initialState, action: StatActionInterface): StatState {
    switch(action.type){
        case StatActionTypes.SELECT_PROVINCE:
            console.log('case 1')
    }
}