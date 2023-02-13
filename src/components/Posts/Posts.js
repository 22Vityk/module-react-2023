import React, {useEffect} from 'react';
import {postsService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {postAction} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {

	const dispatch = useDispatch()
	const {posts} = useSelector(state => state.posts)
	useEffect(()=>{
		postsService.getAll().then(({data})=>dispatch(postAction.getAll(data)))
	},[])



	return (
		<div>
			{posts.map(post=><Post key={post.id} post={post}/> )}
		</div>
	);
};

export {Posts};