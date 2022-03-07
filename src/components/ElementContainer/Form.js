import React from "react";
import saveSVG from "../../images/check.png";

export default function Form(props) {
	const [border, setBorder] = React.useState(0);
	return (
		<div className='write--notes-container'>
			<div className='title-section'>
				<input
					className='form--title'
					type='text'
					placeholder='Title'
					name='title'
					value={props.titleVal}
					onChange={props.dataEnteredHandle}
				/>
			</div>
			<textarea
				placeholder='Type Notes...'
				onChange={props.dataEnteredHandle}
				name='textArea'
				value={props.textAreaVal}
			/>
			<div className='form--bottom'>
				<div className='card--color'>
					<div
						className={`${border == 1 ? "add--border" : ""}`}
						onClick={() => setBorder(1)}>
						<div id='1' className='red color' onClick={props.colorClick}></div>
					</div>
					<div
						className={`${border == 2 ? "add--border" : ""}`}
						onClick={() => setBorder(2)}>
						<div id='2' className='blue color' onClick={props.colorClick}></div>
					</div>
					<div
						className={`${border == 3 ? "add--border" : ""}`}
						onClick={() => setBorder(3)}>
						<div
							id='3'
							className='green color'
							onClick={props.colorClick}></div>{" "}
					</div>
					<div
						className={`${border == 4 ? "add--border" : ""}`}
						onClick={() => setBorder(4)}>
						<div
							id='4'
							className='yellow color'
							onClick={props.colorClick}></div>
					</div>
					<div
						className={`${border == 5 ? "add--border" : ""}`}
						onClick={() => setBorder(5)}>
						<div
							id='5'
							className='black color'
							onClick={props.colorClick}></div>
					</div>
				</div>
				<img
					className='title-save'
					src={saveSVG}
					alt='save-png'
					onClick={props.closeFormHandel}
				/>
			</div>
		</div>
	);
}
