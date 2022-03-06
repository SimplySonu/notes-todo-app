import React from "react";
import saveSVG from "../../images/check.png";

export default function Form() {
	return (
		<div className='write--notes-container'>
			<div className='title-section'>
				<input className='form--title' type='text' placeholder='Title' />
			</div>
			<textarea placeholder='Type Notes...' />
			<div className='form--bottom'>
				<div className='card--color'>
					<div className='red color'></div>
					<div className='blue color'></div>
					<div className='green color'></div>
					<div className='yellow color'></div>
					<div className='black color'></div>
				</div>
				<img className='title-save' src={saveSVG} alt='save-png' />
			</div>
		</div>
	);
}
