import React, {useEffect, useState} from 'react';

// import {commentsService} from "../../services";
import {postsService} from "../../services/postsService";

const PostsDetails = ({postId}) => {
	const [details, setDetails] = useState(null)



	useEffect(()=>{
		postsService.getById(postId).then(({data})=>setDetails(data))
	},[postId])



	return (
		<div>
			{details &&<>
			<div>UserId:{details.userId}</div>
			<div>id:{details.id}</div>
			<div>title:{details.title}</div>
			<div>Body:{details.body}</div>
			</>}

		</div>
	);
};

export {PostsDetails};