import React from "react";
import Search from "./ElementContainer/Search";
import Form from "./ElementContainer/Form";
import Card from "./ElementContainer/Card";
import plus from "../images/plus.png";
import { nanoid } from "nanoid";

export default function Notes() {
	const [openFormToAdd, setOpenFormToAdd] = React.useState(false);
	const [notesData, setNotesData] = React.useState({
		id: "",
		title: "",
		textArea: "",
	});
	const [allNotesData, setAllNotesData] = React.useState([]);

	console.log(notesData);

	function openForm() {
		setNotesData({
			id: nanoid(),
			title: "",
			textArea: "",
		});
		setOpenFormToAdd(true);
	}

	function closeForm() {
		// setAllNotesData((preVal) => preVal.map((obj) => (obj.id !== notesData.id ?
		// 	[...preVal, notesData] :
		// )));

		setAllNotesData((tempArr) => {
			let preVal = tempArr;
			if (preVal.length === 0) {
				return [...preVal, notesData];
			}
			let flagUpdate = true;
			const newArr = [];
			for (let i = 0; i < preVal.length; i++) {
				if (preVal[i].id !== notesData.id) {
					newArr.push(preVal[i]);
				} else {
					preVal.splice(i, 1);
					console.log(preVal[i]);
					newArr.unshift({
						id: notesData.id,
						title: notesData.title,
						textArea: notesData.textArea,
					});
					flagUpdate = false;
				}
				if (flagUpdate) {
					return [...preVal, notesData];
				} else {
					return newArr;
				}
			}
		});

		setOpenFormToAdd(false);
	}
	function handleForm(event) {
		setNotesData({
			...notesData,
			[event.target.name]: event.target.value,
		});
	}

	function updateNote(id) {
		setOpenFormToAdd(true);
		setNotesData(() => allNotesData.filter((obj) => obj.id === id)[0]);
	}
	function deleteNote(id) {}

	const card = allNotesData.map((data) => (
		<Card
			key={data.id}
			title={data.title}
			description={data.textArea.split("\n")[0]}
			handleUpdate={() => updateNote(data.id)}
			handleDelete={() => deleteNote(data.id)}
		/>
	));

	return (
		<div className='notes-parent'>
			<div className='notes--container'>
				<Search />
				{openFormToAdd && (
					<Form
						titleVal={notesData.title}
						textAreaVal={notesData.textArea}
						closeFormHandel={closeForm}
						dataEnteredHandle={handleForm}
					/>
				)}
				<div className='card-grid'>
					{card}
					<Card title='dummy' description='Dummy Text' />
					<img
						className='title-save delete--card add--notes'
						src={plus}
						alt='Add'
						onClick={openForm}
					/>
				</div>
			</div>
		</div>
	);
}
