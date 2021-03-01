
import { getData } from '../../constant/dataLoader';
import { StatActionInterface, StatActionTypes, StatSelected } from './statTypes';

//State manager for Stats
const initialState: StatSelected = {
	province: 'ประเทศไทย',
	sum_nop: 2418110,
	sum_budget: 162152805,
	provinceDetails: [
		{ place: 'กรุงเทพมหานคร', number_of_people: 708562, budget: 55374710 },
		{ place: 'ชลบุรี', number_of_people: 398515, budget: 57870900 },
		{ place: 'ตาก', number_of_people: 275949, budget: 4438435 },
		{ place: 'นครราชสีมา', number_of_people: 338442, budget: 4841340 },
		{ place: 'ภูเก็ต', number_of_people: 349204, budget: 35503930 },
		{ place: 'เชียงราย', number_of_people: 347438, budget: 4123490 },
	],
};

export function StatReducers(state = initialState, action: StatActionInterface): any {
	let data: StatSelected[];
	let result;
	console.log(state);
	switch (action.type) {
		case StatActionTypes.SELECT_PROVINCE:
			console.log(action.payload);
			result = initialState
			data = getData('province')
			console.log(data)
			data.map(province => {
				if(action.payload === province.province){
					console.log(province)
					return result = province
				}
					
			})

			return result

		default:
			return initialState;
	}
}
