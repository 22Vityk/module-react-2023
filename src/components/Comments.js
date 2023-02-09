import {Component} from "react";
import {commentServics} from "../services";

import {Comment} from "./Comment";

class Comments extends Component{
	constructor(props) {
		super(props);
		this.state = {comment: []}


	}

	componentDidMount() {
		commentServics.getAll().then(({data})=>this.setState( {comment:[...data]}))
	}

	render() {
		return(
			<div>
				{this.state.comment.map(comment=><Comment key={comment.id} comment={comment}/>)}
			</div>
		)
	}


}


export {Comments}





