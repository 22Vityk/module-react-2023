import {Component} from "react";

class Post extends Component{

	render() {
		const {userId, id, title, body} = this.props.user

		return(
			<div>
				<div>userId:{userId}</div>
				<div>Id:{id}</div>
				<div>Title:{title}</div>
				<div>Body:{body}</div>
			</div>

		)
	}

}

export {
	Post
}