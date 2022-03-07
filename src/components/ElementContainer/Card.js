import React from "react";
import deleteSVG from "../../images/delete.png";
import edit from "../../images/edit.png";
export default function Card(props) {
	return (
		<div
			className='card'
			style={{
				width: "18rem",
				backgroundColor: `${props.color}`,
				color: `${props.color !== "white" ? "white" : "black"}`,
			}}>
			<div className='card-body'>
				<h5 className='card-title'>{props.title}</h5>
				<hr style={{ backgroundColor: "grey" }} />
				<p className='card-text'>{props.description}</p>
				<div className='update-delete'>
					<img
						className='search-img delete--card'
						src={edit}
						alt='delete'
						onClick={props.handleUpdate}
					/>
					<img
						className='search-img delete--card'
						src={deleteSVG}
						alt='update'
						onClick={props.handleDelete}
					/>
				</div>
			</div>
		</div>
	);
}
