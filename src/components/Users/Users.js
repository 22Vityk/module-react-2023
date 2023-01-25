import {useState, useEffect} from 'react';

import {axiosService} from "../../services/axiosService";
import {User} from "../User/User";

const Users = () => {

	const [users, setUsers] = useState([])
	const [userDetails, setUserDetails] = useState(null)

	useEffect(()=>{
		axiosService.get('/users').then(value=>value.data).then(value => setUsers([ ...value]))
	},[])



		return (
			<div>
				<h1>UserDetails:</h1>
				{userDetails && <div>{userDetails.name}- {userDetails.email}</div>}

				<hr/>

				<h1>Users:</h1>
				{users.map(user=> <User key={user.id} user={user} setUserDetails={setUserDetails}/>)}
			</div>
		);
	}


export {Users};
