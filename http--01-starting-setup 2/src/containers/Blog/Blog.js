import React, { Component } from "react";
import axios from "axios";
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import {Route, NavLink, Switch} from 'react-router-dom'



import "./Blog.module.css";

class Blog extends Component {






  render() {

 
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  activeClassName="my-active"
                  activeStyle={{
                    color: "fa923f",
                    textDecoration: "underline",
                  }}
                >
               Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
        {/* <Route path='/' exact render={() => <h1>Home</h1>} /> */}
        <Route path="/new-post" exact component={NewPost} />
        <Route path="/" component={Posts} />
        
        </Switch>
      </div>
    );
  }
}

export default Blog;
