import { CSSProperties, useState } from 'react';
import Select from 'react-select';
import { Radar } from 'react-chartjs-2';
import { groupedOptions } from '../../constant/places'

type optionsType = {
	value: string;
	label: string;
};


const dateOptions: optionsType[] = [{ value: '3 เดือน', label: '3 เดือน' }];

const LineData = {
	labels: ['ธรรมชาติ', 'วัฒนธรรม', 'ประวัติศาสตร์', 'นันทนาการ', 'ศิลปะ'],
	datasets: [
		{
			label: 'โมเดล',
			fill: false,
			lineTension: 0,
			backgroundColor: 'rgba(230,105,115,1)',
			borderColor: 'rgb(243,187,128,1)',
			data: [65, 59, 80, 81, 56],
		},
		{
			label: 'ของจริง',
			fill: false,
			lineTension: 0,
			backgroundColor: '#3E5C9A',
			borderColor: '#7D9BDA',
			data: [66, 60, 89, 81, 60],
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
	const [selectedOption, setSelectedOption] = useState(groupedOptions[0].options[0].value);
	// wait data from pleum
	//const [selectedDateOption, setSelectedDateOption] = useState(dateOptions[0].value);

	const selectHandler = (selectChoice: any) => {
		setSelectedOption(selectChoice.value);
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
						defaultValue={ groupedOptions[0].options[0]}
						onChange={selectHandler}
						options={groupedOptions}
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
						data={LineData}
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
                                    suggestedMax: 100
                                }
                            }
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ModelAnalysis;
