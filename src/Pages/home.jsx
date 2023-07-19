// import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://ammundhe.github.io/twitter_api/db.json"
    );
    setPosts(response.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  
 return posts.map((post) => {
  console.log(post)
  return (
    <>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <div className="card">
              <img src={post.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{post.userName}</h5>
                <p className="card-text">{post.userName}
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                    
                </p>

                <Link to="/sample" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
)};

export default home;
