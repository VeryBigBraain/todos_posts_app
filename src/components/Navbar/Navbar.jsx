import cl from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className={cl.header}>
      <div className={cl.appLogo}>Todo</div>
      <nav className={cl.nav}>
        <ul className={cl.navList}>
          <li className={cl.navItem}>
            <Link className={cl.navLink} to="/">Home</Link>
          </li>
          <li className={cl.navItem}>
            <Link className={cl.navLink} to="/posts">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
