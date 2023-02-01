import React from 'react';
import {PostsDetails} from "../../components/PostsDetails/PostsDetails";
import {useParams} from "react-router-dom";


const PostDetailPage = () => {
 const {postId} = 	useParams()


	return (
		<div>
			<PostsDetails postId={postId}/>
		</div>
	);
};

export {PostDetailPage};