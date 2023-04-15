import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="hd mw">
      <h1 className="logo">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
        </Link>
      </h1>
      <nav className="gnb">
        <Link to="/Shop">Shop</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/OurStory">Our Story</Link>
      </nav>
      <div className="individual">
        <Link>
          <i className="fa-solid fa-magnifying-glass"></i>
        </Link>
        <Link>
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <Link>
          <i className="fa-regular fa-user"></i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
