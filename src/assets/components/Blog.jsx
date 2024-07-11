import React from "react";

const Blog = () => {
  return (
    <>
      <article className="blog" data-page="blog">
        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="letterboxd-section">
          <a
            href="https://letterboxd.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="letterboxd-link"
          >
            <div className="letterboxd-content">
              <h3 className="letterboxd-title">
                🎥 Embracing Cinema: Old & New 📽️
              </h3>
              <p className="letterboxd-text">
                Explore my thoughts on timeless classics and the latest
                releases.
              </p>
              <button className="letterboxd-cta">
                Discover My Film Reviews
              </button>
            </div>
          </a>
        </section>

        <section className="featured-image-section">
          <img
            src="https://lwlies.com/wp-content/uploads/2018/05/truman.jpg"
            alt="The Truman Show"
            className="featured-image"
          />
        </section>
      </article>
    </>
  );
};

export default Blog;
