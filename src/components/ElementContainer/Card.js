import React from "react";
import deleteSVG from "../../images/delete.png";
import edit from "../../images/edit.png";
export default function Card() {
	return (
		<div className='card' style={{ width: "18rem" }}>
			<div className='card-body'>
				<h5 className='card-title'>Card title</h5>
				<hr style={{ backgroundColor: "grey" }} />
				<p className='card-text'>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>

				<div className='update-delete'>
					<img className='search-img delete--card' src={edit} alt='delete' />
					<img
						className='search-img delete--card'
						src={deleteSVG}
						alt='update'
					/>
				</div>
			</div>
		</div>
	);
}
