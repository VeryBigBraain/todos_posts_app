import cl from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className={cl.header}>
      <div className={cl.appLogo}>Todos</div>
      <nav className={cl.nav}>
        <ul className={cl.nav__list}>
          <li className={cl.nav__item}>
            <Link className={cl.nav__link} to="/">
              Home
            </Link>
          </li>
          <li className={cl.nav__item}>
            <Link className={cl.nav__link} to="/posts">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
