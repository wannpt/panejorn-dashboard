import { useState } from 'react';
import Select from 'react-select';
import { Line } from 'react-chartjs-2';
import { getData } from '../../constant/dataLoader';

type optionsType = {
	value: string;
	label: string;
};

type dataType = {
	province: string;
	label: string[];
	datasets: {
		label: string;
		data: number[];
	}[];
};

const provinceOptions: optionsType[] = [
	{ value: 'กรุงเทพมหานคร', label: 'กรุงเทพมหานคร' },
	{ value: 'เชียงราย', label: 'เชียงราย' },
	{ value: 'ภูเก็ต', label: 'ภูเก็ต' },
	{ value: 'ชลบุรี', label: 'ชลบุรี' },
	{ value: 'นครราชสีมา', label: 'นครราชสีมา' },
];

const dateOptions: optionsType[] = [{ value: '3 เดือน', label: '3 เดือน' }];

const LineChartContainer = (props: any) => {
	let lineData = {
		labels: props.selectedData.label[0],
		datasets: [
			{
				label: 'สถิติ',
				fill: false,
				lineTension: 0.3,
				backgroundColor: 'rgba(230,105,115,1)',
				borderColor: 'rgb(243,187,128,1)',
				data: props.selectedData.datasets[0].data,
			},
			{
				label: 'การคาดคะเน',
				fill: false,
				lineTension: 0.3,
				backgroundColor: '#3E5C9A',
				borderColor: '#7D9BDA',
				data: props.selectedData.datasets[1].data,
			},
		],
	};

	return (
		<>
			<Line
				data={lineData}
				height={624}
				options={{
					maintainAspectRatio: false,
					title: {
						display: true,
						text: 'เทรนด์ของ ' + props.selectedOption,
						fontsize: 20,
					},
					legend: {
						display: true,
						position: 'top',
					},
					scales: {
						xAxes: [
							{
								ticks: {
									userCallback: function (index: any) {
										if (index % 6 === 0) {
											return lineData.labels[index];
										}
										return '';
									},
								},
							},
						],
					},
				}}
			/>
		</>
	);
};

const Trends = () => {
	const [selectedOption, setSelectedOption] = useState(provinceOptions[0].value);
	let isLoading = true;
	let rawData: dataType[] = getData('timeseries');
	const [selectData, setSelectData] = useState(rawData[0]);
	const selectHandler = (selectChoice: any) => {
		setSelectedOption(selectChoice.value);
		rawData.map((el) => {
			if (el.province === selectChoice.value) {
				setSelectData({ ...selectData, datasets: el.datasets });
				return true;
			}
			return true;
		});
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
					<Select defaultValue={provinceOptions[0]} onChange={selectHandler} options={provinceOptions} />
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
					{isLoading && <LineChartContainer selectedData={selectData} selectedOption={selectedOption} />}
				</div>
			</div>
		</div>
	);
};

export default Trends;
