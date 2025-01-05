import React from "react";
import Navbar from "./Navbar";
import Article1 from "./Article1";
import ArticleResume from "./ArticleResume";
import ArticlePortfolio from "./ArticlePortfolio";
import Blog from "./Blog";
import Contact from "./Contact";
const MainContent = () => {
  return (
    <div className="main-content">
      <Navbar></Navbar>
      <Article1></Article1>
      <ArticleResume></ArticleResume>
      <ArticlePortfolio></ArticlePortfolio>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
};

export default MainContent;
