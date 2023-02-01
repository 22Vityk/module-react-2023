import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
	const {postId, id, name, email, body} = comment

	console.log(postId)
	return (
		<div>
			<div>PostId:{postId}</div>
			<div>Id:{id}</div>
			<div>Name:{name}</div>
			<div>Email:{email}</div>
			<div>Body:{body}</div>
			<Link to={postId.toString()}>details</Link>
		</div>
	);
};

export {Comment};