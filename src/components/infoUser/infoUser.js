import React, {useEffect, useState} from 'react';
import {userService} from "../../services/userService";

const InfoUser = () => {
	const [user, setUser] = useState(null)

	useEffect(()=>{
		userService.getById(`id`).then(value => value.data).then(value => setUser(value))
	})

	return (
		<div>

		</div>
	);
};

export {InfoUser};