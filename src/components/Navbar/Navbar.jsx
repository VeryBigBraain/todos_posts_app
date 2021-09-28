import cl from './Navbar.module.css';

function Navbar() {
  return (
    <header className={cl.header}>
      <div className={cl.appLogo}>Todo</div>
    </header>
  );
}

export default Navbar;