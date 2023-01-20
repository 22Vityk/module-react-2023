import React from 'react';
import {Character} from "../Character/Character";

const Characters = () => {
	let characters = [
		{
			id: 1,
			name: "Rick Sanchez",
			status: "Alive",
			species: "Human",
			gender: "Male",
			img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"

		},
		{
			id: 2,
			name: "Morty Smith",
			status: "Alive",
			species: "Human",
			gender: "Male",
			img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
		}
	]
	return (
		<div>
			{
				characters.map(characters=><Character key={characters.id} character={characters}/>)
			}
		</div>
	);
};

export {Characters};