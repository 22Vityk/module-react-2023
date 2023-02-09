import {Component} from "react";

class Comment extends Component{
	render() {
		const {postId, id, name, email,body } = this.props.comment


		return(
			<div>
				<div>postId: {postId}</div>
				<div>Id:{id}</div>
				<div>Name:{name}</div>
				<div>Email:{email}</div>
				<div>Body:{body}</div>
			</div>
		)


	}


}
export {Comment}