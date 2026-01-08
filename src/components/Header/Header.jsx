import "./Header.css"
import heart from "/heart.png"
import cart from "/cart.png"

const Header = () => {
  return (
    <nav>
      <ul className="nav-menu">
        <li>services</li>
        <li>products</li>
        <li>about</li>
      </ul>
      <h5 className="nav-name">
        Care4Pets
      </h5>
      <div>
        <ul className="nav-info">
          <li>
            <img src={heart} alt="heart-img" />
          </li>
          <li>
            <img src={cart} alt="cart-img" />
          </li>
        </ul>
        <h5 className="menu">
          menu
        </h5>
      </div>
    </nav>
  )
}

export default Header
