import {User} from "../User/User";
import {useState, useEffect} from 'react';
import {axiosService} from "../../services/axiosService";

const Users = () => {
	const {users, setUsers} = useState([])

	useEffect(()=>{
		axiosService.get('/users').then(value=>console.log(value))
	},[])



		return (
			<div>
				{users.map(user=> <Users key={user.id} user={user}/>)}
			</div>
		);
	}


export {Users};
