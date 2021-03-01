import { CSSProperties, useEffect, useState } from 'react';
import Select from 'react-select';
import { Radar } from 'react-chartjs-2';
import { getData } from '../../constant/dataLoader';

type optionsType = {
	value: string;
	label: string;
};

type modelAnalysisType = {
	datasets: { label: string, data: number[]}[]
	labels: string[],
	location: string,
	province: string
}

const dateOptions: optionsType[] = [{ value: '3 เดือน', label: '3 เดือน' }];

var lineData = {
	labels: ['ธรรมชาติ', 'วัฒนธรรม', 'ประวัติศาสตร์', 'นันทนาการ', 'ศิลปะ'],
	datasets: [
		{
			label: 'โมเดล',
			fill: false,
			lineTension: 0,
			backgroundColor: 'rgba(230,105,115,1)',
			borderColor: 'rgb(243,187,128,1)',
			data: [0, 0.2, 0.4, 0.2, 0.2],
		},
		{
			label: 'ของจริง',
			fill: false,
			lineTension: 0,
			backgroundColor: '#3E5C9A',
			borderColor: '#7D9BDA',
			data: [0.2, 0.2, 0.2, 0.2, 0.2],
		},
	],
};

const groupStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
};

const groupBadgeStyles = {
	backgroundColor: '#EBECF0',
	borderRadius: '2em',
	color: '#172B4D',
	display: 'inline-block',
	fontSize: 12,
	fontWeight: 'normal',
	lineHeight: '1',
	minWidth: 1,
	padding: '0.16666666666667em 0.5em',
	textAlign: 'center',
} as CSSProperties;

const formatGroupLabel = (data: any) => (
	<div style={groupStyles}>
		<span>{data.label}</span>
		<span style={groupBadgeStyles}>{data.options.length}</span>
	</div>
);


const ModelAnalysis = () => {
	let options = getData('selectOption');
	let data: modelAnalysisType[] = getData('modelAnalysis');
	
	let result: modelAnalysisType;

	console.log(data)
	const [selectedOption, setSelectedOption] = useState(options[0].options[0].value);

	const selectHandler = (selectChoice: any) => {
		setSelectedOption(selectChoice.value);
		data.map(el => {
			if(selectChoice.value === el.location)
				return result = el;
		})
		console.log(result)
		//model
		lineData.datasets[0].data = result.datasets[0].data;
		//real
		lineData.datasets[1].data = result.datasets[1].data;

	};


	return (
		<div>
			<div className='row mb-4'>
				<div className='col'>
					<span className='page-title gradient-text'> ประสิทธิภาพโมเดล </span>
				</div>
			</div>
			<div className='row justify-content-center align-items-center mb-2'>
				<div className='col-2 text-right'>สถานที่ :</div>
				<div className='col-4'>
					<Select
						defaultValue={options[0].options[0]}
						onChange={selectHandler}
						options={options}
						formatGroupLabel={formatGroupLabel}
					/>
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
					<Radar
						data={ lineData }
						height={624}
						options={{
							maintainAspectRatio: false,
							title: {
								display: true,
								text: 'ประสิทธิภาพโมเดล ' + selectedOption,
								fontsize: 20,
							},
							legend: {
								display: true,
								position: 'top',
							},
							scale: {
								ticks: {
									suggestedMin: 0,
									suggestedMax: 0.5,
								},
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ModelAnalysis;
