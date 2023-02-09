import {Component} from "react";
import {postService} from "../services";
import {Post} from "./Post";

class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {users:[]}

	}

	componentDidMount() {
		postService.getAll().then(({data})=>this.setState({users:[...data]}))
	}


	render() {
		return (
			<div>
				{this.state.users.map( user => <Post key={user.id} user={user}/> )}
			</div>
		)
	}
}



export {
	Posts
}