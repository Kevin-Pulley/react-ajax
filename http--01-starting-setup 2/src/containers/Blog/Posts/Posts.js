import React, { Component } from "react";
import axios from '../../../axios';
import FullPost from '../FullPost/FullPost';
import {Route} from 'react-router-dom';


import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
  };

  postSelectedHandler = (id) => {
   this.props.history.push({pathname: '/posts/' + id})
  };

  componentDidMount() {
      console.log(this.props)
     axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPost = posts.map((post) => {
          return {
            ...post,
            author: "Max",
          };
        });
        this.setState({ posts: updatedPost });
        //console.log(response)
      })
      .catch((error) => {
        console.log(error);
        //this.setState({ error: true });
      });
  }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
       
            
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
            />
       
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    );
  }
}


export default Posts;