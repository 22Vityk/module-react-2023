import React from 'react';

const Rocket = ({rocket}) => {
	const {flight_number, launch_year} = rocket


	return (
		<div>
			<div>number:{flight_number}</div>
			<div>year:{launch_year}</div>
		</div>
	);
};

export {Rocket};