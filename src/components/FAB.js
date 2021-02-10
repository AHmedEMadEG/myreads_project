import React , {Component} from "react"
import {Link} from "react-router-dom";

export default class FAB extends Component {
    render() {
        return ( <div className="open-search">
            <Link className="open-search-link" to={"/search"}>Add a book</Link>
        </div>)
    }
}