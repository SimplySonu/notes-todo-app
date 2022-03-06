import React from "react";
import notesSvg from "../images/notes.svg";
import todoSvg from "../images/todo.svg";
import { Link } from "react-router-dom";
// git config --global user.email "you@example.com"
//   git config --global user.name "Your Name"
export default function SideBar() {
	return (
		<div className='sidebar-container'>
			<h3 className='app--name'>EverNote</h3>
			<hr />
			<Link to='/' className='category--button'>
				<img className='icons' src={notesSvg} alt='notes' />
				<div>Notes</div>
			</Link>
			<Link to='/todo' className='category--button'>
				<img className='icons' src={todoSvg} alt='todo' />
				<div>Todo</div>
			</Link>
		</div>
	);
}
