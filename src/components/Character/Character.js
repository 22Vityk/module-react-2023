import React from 'react';

const Character = ({character}) => {
	const {id,name,status,species,gender,img} = character

	return (
		<div>
			<div>Id:{id}</div>
			<div>Name:{name}</div>
			<div>Status:{status}</div>
			<div>Species:{species}</div>
			<div>Gender:{gender}</div>
			<img src={img} alt={name}/>

		</div>
	);
};

export {Character};