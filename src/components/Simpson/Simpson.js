import React from 'react';

const Simpson = ({simpson}) => {
	const {id,name,status,species,gender,img} = simpson
	return (
		<div>
			<div>id:{id}</div>
			<div>Name:{name}</div>
			<div>Status:{status}</div>
			<div>Species:{species}</div>
			<div>Gender:{gender}</div>
			<img src={img} alt={name}/>
		</div>
	);
};

export  {Simpson};