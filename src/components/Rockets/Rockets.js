import React, {useEffect, useState} from 'react';
import {axiosService} from "../../services/axiosService";
import {Rocket} from "../Rocket/Rocket";

const Rockets = () => {

	const [rocket, setRocket] = useState([])

	useEffect(()=>{
		axiosService.get('/launches').then(resp=> resp.data).then(resp=>setRocket([...resp]))
	},[])


	return (
		<div>
			<h1>Launches</h1>


			<hr/>

			{rocket.filter(rocket=>rocket.launch_year !== '2020').map(rocket=><Rocket key={rocket.flight_number} rocket={rocket}/>)}

		</div>
	);
};

export {Rockets};