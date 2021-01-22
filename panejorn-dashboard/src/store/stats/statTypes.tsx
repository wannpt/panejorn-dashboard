export interface StatTypes {
    province: string,
    budget: number,
    population: number,
    isSelected: boolean
}

export interface StatState {
    Stats: StatTypes[]
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

