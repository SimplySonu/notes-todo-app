import React from "react";
import Search from "./ElementContainer/Search";
import Form from "./ElementContainer/Form";
import Card from "./ElementContainer/Card";
import plus from "../images/plus.png";
import { nanoid } from "nanoid";
import emptyNotes from "../images/emptyNotes.svg";

export default function Notes() {
	let myStorage = window.localStorage;

	const [openFormToAdd, setOpenFormToAdd] = React.useState(false);
	const [notesData, setNotesData] = React.useState({
		id: "",
		title: "",
		textArea: "",
		update: false,
		color: "white",
	});

	const [search, setSearch] = React.useState({
		searchText: "",
		searchOn: false,
	});

	const [searchData, setSearchData] = React.useState([]);
	console.log(search.searchText.length, search.searchText);

	const [allNotesData, setAllNotesData] = React.useState(
		JSON.parse(myStorage.getItem("notes")) || []
	);

	React.useEffect(() => {
		myStorage.setItem("notes", JSON.stringify(allNotesData));
		// myStorage.removeItem("notes");
		// myStorage.clear();
	}, [allNotesData]);

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

		if (notesData.update) {
			setAllNotesData((tempArr) => {
				return tempArr.map((obj) =>
					obj.id === notesData.id ? { ...notesData, update: false } : obj
				);
			});
		} else {
			setAllNotesData((preVal) => [notesData, ...preVal]);
		}
		setOpenFormToAdd(false);
		// let preVal = tempArr;
		// if (preVal.length === 0) {
		// 	return [...preVal, notesData];
		// }
		// let flagUpdate = true;
		// const newArr = [];
		// for (let i = 0; i < preVal.length; i++) {
		// 	if (preVal[i].id !== notesDataid) {
		// 		newArr.push(preVal[i]);.
		// 	} else {
		// 		// preVal.splice(i, 1);
		// 		console.log(preVal[i]);
		// 		newArr.unshift({
		// 			id: notesData.id,
		// 			title: notesData.title,
		// 			textArea: notesData.textArea,
		// 		});
		// 		flagUpdate = false;
		// 	}
		// }
		// if (flagUpdate) {
		// 	return [...preVal, notesData];
		// } else {
		// 	return newArr;
		// }
	}
	function handleForm(event) {
		setNotesData({
			...notesData,
			[event.target.name]: event.target.value,
		});
	}

	function updateNote(id) {
		setOpenFormToAdd(true);
		setNotesData(() => {
			let obj = allNotesData.filter((obj) => obj.id === id)[0];
			return { ...obj, update: true };
		});
	}

	function deleteNote(id) {
		setAllNotesData((tempArr) => {
			return tempArr.filter((obj) => obj.id !== id);
		});
	}

	function colorUpdate(event) {
		if (event.target.id === "1") {
			setNotesData((obj) => ({
				...obj,
				color: "white",
			}));
		} else if (event.target.id === "2") {
			setNotesData((obj) => ({
				...obj,
				color: "#1b98f5",
			}));
		} else if (event.target.id === "3") {
			setNotesData((obj) => ({
				...obj,
				color: "#1faa59",
			}));
		} else if (event.target.id === "4") {
			setNotesData((obj) => ({
				...obj,
				color: "#ddd101",
			}));
		} else if (event.target.id === "5") {
			setNotesData((obj) => ({
				...obj,
				color: "#242b2e",
			}));
		}
	}

	function searchHandle(event) {
		setSearch(() => ({
			[event.target.name]: event.target.value,
			serachOn: true,
		}));

		if (search.searchText.length - 1 > 0) {
			setSearchData(() =>
				allNotesData.filter((obj) =>
					obj.title.toLowerCase().includes(search.searchText.toLowerCase())
				)
			);
		} else {
			setSearch(() => ({
				[event.target.name]: event.target.value,
				searchOn: false,
			}));
		}
	}

	const card = allNotesData.map((data) => (
		<Card
			key={data.id}
			title={data.title}
			color={data.color}
			colorSet={data.colorSet}
			description={data.textArea.split("\n")[0]}
			handleUpdate={() => updateNote(data.id)}
			handleDelete={() => deleteNote(data.id)}
		/>
	));

	return (
		<div className='notes-parent'>
			<div className='notes--container'>
				<Search handleChange={searchHandle} searchTextVal={search.searchText} />
				{openFormToAdd && (
					<Form
						titleVal={notesData.title}
						textAreaVal={notesData.textArea}
						closeFormHandel={closeForm}
						dataEnteredHandle={handleForm}
						colorClick={colorUpdate}
					/>
				)}
				<div
					className={`${
						allNotesData.length !== 0 ? "card-grid" : "emptyNote"
					}`}>
					{allNotesData.length !== 0 ? (
						search.serachOn ? (
							searchData.length !== 0 ? (
								searchData.map((data) => (
									<Card
										key={data.id}
										title={data.title}
										color={data.color}
										colorSet={data.colorSet}
										description={data.textArea.split("\n")[0]}
										handleUpdate={() => updateNote(data.id)}
										handleDelete={() => deleteNote(data.id)}
									/>
								))
							) : (
								<>
									<img
										src={emptyNotes}
										alt='emptyNotes'
										className='emptyNote'
									/>
									<h2 className='empty--notes-title'>No data found</h2>
								</>
							)
						) : (
							card
						)
					) : (
						<>
							<img src={emptyNotes} alt='emptyNotes' className='emptyNote' />
							<h2 className='empty--notes-title'>Start taking notes!</h2>
						</>
					)}
					{/* <Card title='dummy' description='Dummy Text' /> */}
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
