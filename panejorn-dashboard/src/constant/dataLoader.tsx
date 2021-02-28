import countryJson from './mock-data-by-country.json'
import provinceJson from './mock-data-by-province.json'
import selectOptionsJson from './mock-data-model-analysis-searching-system.json'

export const getData = (type: string) => {

    if(type === 'country')
	    return JSON.parse(JSON.stringify(countryJson))
    
    if(type === 'province'){
        return JSON.parse(JSON.stringify(provinceJson))
    }
	    
    if(type === 'selectOption')
	    return JSON.parse(JSON.stringify(selectOptionsJson))    
};
