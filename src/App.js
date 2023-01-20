import React from 'react';
import {Simpsons} from "./components/SImpsons/Simpsons";
import {Characters} from "./components/Characters/Characters";

const App = () => {
	return (
		<div>
		<Simpsons/>
		<Characters/>
		</div>
	);
};

export {App};