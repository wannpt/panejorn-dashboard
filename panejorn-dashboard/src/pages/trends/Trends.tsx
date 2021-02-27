import React, { useState } from 'react';
import Select from 'react-select'

type optionsType = {
    value: string,
    label: string
}

const options:optionsType[] = [
    {value: 'กรุงเทพมหานคร', label: 'กรุงเทพมหานคร'},
    {value: 'เชียงใหม่', label: 'เชียงใหม่'}
]



const Trends = () => {

    
    const [selectedOption, setSelectedOption] = useState(options[0].value)
    
    const selectHandler = (selectChoice: any) => {
        setSelectedOption(selectChoice.value)
    }

	return (
		<div>
			<div className='row mb-4'>
				<div className='col'>
					<span className='page-title gradient-text'> เทรนด์ </span>
				</div>
			</div>
            <div className='row justify-content-center'>
                <div className='col-4'>
                    <Select defaultValue={options[0]} onChange={selectHandler} options={options}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-6 text-right'>
                            Date 1
                        </div>
                        <div className='col-6'>
                            Date 2
                        </div>
                    </div>
                </div>
            </div>
            <div className='row text-center'>
                trends graph { selectedOption }
            </div>
		</div>
	);
};

export default Trends;
