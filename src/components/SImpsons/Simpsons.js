import React from 'react';
import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
	let simpsons = [
		{
			id: 1,
			name:'Homer',
			status:'Alive',
			species:'Humen',
			gender:'Male',
			img:'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
		},
		{
			id: 2,
			name:'Marge',
			status:'Alive',
			species:'Humen',
			gender:'Female',
			img:'https://www.gannett-cdn.com/-mm-/d95634d8cf722215fec6d500c36ba36ee15a4c48/c=0-634-1644-1559/local/-/media/2016/01/23/USATODAY/usatsports/marge.jpg?width=1200&disable=upscale&format=pjpg&auto=webp'
		},
		{
			id: 3,
			name:'Bart',
			status:'Alive',
			species:'Humen',
			gender:'Male',
			img:'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'
		}
	]

	return (
		<div>
			{
				simpsons.map(simpsons=><Simpson key={simpsons.id} simpson={simpsons}/>)


			}
		</div>
	);
};

export {Simpsons};