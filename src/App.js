import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from './layouts/index'
import {AlbumsPage, CommentsPage, TodosPage, HomePage} from "./pages";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {PostDetailPage} from "./pages/PostDetailPage/PostDetailPage";




const App = () => {
	return (
		<div>

			<Routes>
				<Route path={'/'} element={<MainLayout/>}>
					<Route index element={<HomePage/>}/>
					<Route path={'albums'} element={<AlbumsPage/>}/>
					<Route path={'comments'} element={<CommentsPage/>}/>
					<Route path={'comments/:postId'} element={<PostDetailPage/>}/>

					<Route path={'todos'} element={<TodosPage/>}/>
					<Route path={'*'} element={<NotFoundPage/>}/>
				</Route>
		</Routes></div>
	);
};

export {App};