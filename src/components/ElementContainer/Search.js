import React from "react";
import searchSvg from "../../images/search.svg";

export default function () {
	return (
		<div className='serach-container'>
			<label htmlFor='searchClick'>
				<img className='search-img' src={searchSvg} alt='search-img' />
			</label>
			<input id='searchClick' className='search-input' type='text' />
		</div>
	);
}
