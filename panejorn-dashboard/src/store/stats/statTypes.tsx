// export interface StatTypes {
//     date: number,
//     details: ProvinceStats[]
// }

// export interface ProvinceStats {
//     province: string,
//     budget: number,
//     population: number
// }
// export interface StatState {
//     Stats: StatTypes[]
// }

export interface StatSelected {
    province: string
}

export enum StatActionTypes {
    SELECT_PROVINCE = 'SELECT_PROVINCE',
    RESET_PROVINCE = 'RESET_PROVINCE',
    FILTER = 'FILTER',
}

export type StatAction = StatActionTypes;

export interface StatActionInterface{ 
    type: StatActionTypes,
    payload: any
}

