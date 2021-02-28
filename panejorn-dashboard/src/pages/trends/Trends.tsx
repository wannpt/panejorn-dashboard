import React, { useState } from 'react';
import Select from 'react-select';
import { Line } from 'react-chartjs-2';

type optionsType = {
	value: string;
	label: string;
};

const options: optionsType[] = [
	{ value: 'กรุงเทพมหานคร', label: 'กรุงเทพมหานคร' },
	{ value: 'เชียงใหม่', label: 'เชียงใหม่' },
];

const LineData = {
	labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.'],
	datasets: [
		{
			label: 'จำนวนนักท่องเที่ยว',
			fill: false,
			lineTension: 0.3,
			backgroundColor: 'rgba(230,105,115,1)',
			borderColor: 'rgb(243,187,128,1)',
			data: [65, 59, 80, 81, 56, 122],
		},
	],
};

const Trends = () => {
	const [selectedOption, setSelectedOption] = useState(options[0].value);

	const selectHandler = (selectChoice: any) => {
		setSelectedOption(selectChoice.value);
	};

	return (
		<div>
			<div className='row mb-4'>
				<div className='col'>
					<span className='page-title gradient-text'> เทรนด์ </span>
				</div>
			</div>
			<div className='row justify-content-center'>
				<div className='col-4'>
					<Select defaultValue={options[0]} onChange={selectHandler} options={options} />
				</div>
			</div>
			<div className='row'>
				<div className='col-12'>
					<div className='row'>
						<div className='col-6 text-right'>Date 1</div>
						<div className='col-6'>Date 2</div>
					</div>
				</div>
			</div>
			<div className='row text-center'>
				trends graph {selectedOption}
				<Line
					data={LineData}
					// width={10}
					height={624}
					options={{
						maintainAspectRatio: false,
						title: {
							display: true,
							text: 'เทรนด์ของ ' + selectedOption,
							fontsize: 20,
						},
						legend: {
							display: true,
							position: 'right',
						},
					}}
				/>
			</div>
		</div>
	);
};

export default Trends;
