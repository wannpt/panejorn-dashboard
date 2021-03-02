import React from 'react';
import './Card.css';
import { ReplayOutlined } from '@material-ui/icons';

export const BigCard = (props: any) => {
	const ResetHandler = () => {
		window.location.reload();
		return true;
	};

	return (
		<div className='card px-4 text-center'>
			<div className='row my-2 align-items-center'>
				<div className='col-12'>
					<span className='topic-title gradient-text'>
						{props.province} <ReplayOutlined fontSize={'large'} onClick={ResetHandler} />
					</span>
				</div>
			</div>
			<div className='row mb-4'>
				<div className='col-6 border-right'>
					<span>จำนวนนักท่องเที่ยว</span>
					<br />
					<span className='page-title gradient-text'>{props.number_of_people}</span>
					<span className='gradient-text pl-2'>คน</span>
				</div>
				<div className='col-6'>
					<span>จำนวนรายได้*</span>
					<br />
					<span className='page-title gradient-text'>{props.budget}</span>
					<span className='gradient-text pl-2'>บาท</span>
				</div>
			</div>
			<div className='row'>
				<div className='col-12 py-2'>อัพเดทครั้งล่าสุดเมื่อวันที่ 28/01/2564</div>
			</div>
		</div>
	);
};

export default BigCard;
