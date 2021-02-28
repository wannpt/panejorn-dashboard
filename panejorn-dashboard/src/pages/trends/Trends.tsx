import { useState } from 'react';
import Select from 'react-select';
import { Line } from 'react-chartjs-2';

type optionsType = {
	value: string;
	label: string;
};

const provinceOptions: optionsType[] = [
	{ value: 'กรุงเทพมหานคร', label: 'กรุงเทพมหานคร' },
	{ value: 'เชียงใหม่', label: 'เชียงใหม่' },
];

const dateOptions: optionsType[] = [{ value: '3 เดือน', label: '3 เดือน' }];

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
	const [selectedOption, setSelectedOption] = useState(provinceOptions[0].value);
	// wait data from pleum
    //const [selectedDateOption, setSelectedDateOption] = useState(dateOptions[0].value);

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
			<div className='row justify-content-center align-items-center mb-2'>
				<div className='col-2 text-right'>จังหวัด :</div>
				<div className='col-4'>
					<Select defaultValue={[provinceOptions][0]} onChange={selectHandler} options={provinceOptions} />
				</div>
			</div>
			<div className='row justify-content-center align-items-center mb-2'>
				<div className='col-2 text-right'>ช่วงเวลา :</div>
				<div className='col-4'>
					<Select defaultValue={dateOptions[0]} onChange={selectHandler} options={dateOptions} />
				</div>
			</div>
			<div className='row text-center'>
				<div className='col-12'>
					<Line
						data={LineData}
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
								position: 'top',
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Trends;
