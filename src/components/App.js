import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header blogname = {blogData.name}/>
      <About link = {blogData.image} aboutText = {blogData.about}/>
      <ArticleList arr = {blogData.posts}/>
    </div>
  );
}

export default App;
