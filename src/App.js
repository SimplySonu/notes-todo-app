import React from "react";
import SideBar from "./components/SideBar";
import Notes from "./components/Notes";
import Todo from "./components/Todo";

import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
	return (
		<div className='app-container'>
			<SideBar />
			<Switch>
				<Route path='/' component={Notes} exact />
				<Route path='/todo' component={Todo} exact />
			</Switch>
		</div>
	);
}
