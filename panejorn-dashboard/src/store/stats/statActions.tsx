import { StatActionInterface, StatActionTypes, StatSelected } from "./statTypes";

export function selectProvince(provinceName : string): StatActionInterface {
    return {
        type: StatActionTypes.SELECT_PROVINCE,
        payload: provinceName
    }
}
