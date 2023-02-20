import React from 'react';
import {Outlet} from "react-router-dom";
import {LoginPage} from "../pages";

const AuthRequireLayout = () => {
	return (
		<div>
		<Outlet/>
		<LoginPage/>
		</div>
	);
};

export {AuthRequireLayout};