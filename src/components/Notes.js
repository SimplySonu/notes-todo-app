import React from "react";
import Search from "./ElementContainer/Search";
import Form from "./ElementContainer/Form";
import Card from "./ElementContainer/Card";
import plus from "../images/plus.png";

export default function Notes() {
	return (
		<div className='notes-parent'>
			<div className='notes--container'>
				<Search />
				<Form />
				<div className='card-grid'>
					<Card />
					<Card />
					<Card />
					<img
						className='title-save delete--card add--notes'
						src={plus}
						alt='Add'
					/>
				</div>
			</div>
		</div>
	);
}
