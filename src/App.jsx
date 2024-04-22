import "./App.css";

function App() {
  return (
    <div className="news-website">
      <header className="header">
        <h1>News Website</h1>
      </header>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">World</a>
          </li>
          <li>
            <a href="#">Politics</a>
          </li>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">Technology</a>
          </li>
          <li>
            <a href="#">Science</a>
          </li>
          <li>
            <a href="#">Sports</a>
          </li>
        </ul>
      </nav>
      <div className="side-column left">
        <h2>Trending</h2>
        {/* Content for the left side column */}
      </div>
      <main className="main-content">
        <h2>Latest Articles</h2>
        <article className="article">
          <header>
            <h1 className="article-title">Lorem Ipsum Dolor Sit Amet</h1>
            <p className="article-meta">Published on April 22, 2024</p>
          </header>
          <div className="article-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consequat quam vel consequat finibus. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Phasellus tristique placerat massa ut accumsan.
            </p>
            <p>
              Integer nec ultrices velit, et eleifend arcu. Duis non libero ac
              nunc pharetra convallis. Mauris eget massa ex. Fusce vel eros sit
              amet ex dictum lacinia. Nulla facilisi. Cras ultricies odio id
              mauris tincidunt, non tempus lacus pharetra.
            </p>
            <p>
              Duis consequat auctor tortor non tincidunt. Nullam eleifend
              vehicula odio, vel convallis odio placerat non. Sed elementum nunc
              eget nulla efficitur luctus. Suspendisse potenti.
            </p>
          </div>
        </article>
        {/* Additional articles can be added here */}
      </main>
      <div className="side-column right">
        <h2>Advertisements</h2>
        {/* Content for the right side column */}
      </div>
      <footer className="footer">
        <p>&copy; 2024 News Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
