import Logo from '../assets/logo.png'

function Header() {
  return (
    <header>
      <nav>
          <img src={Logo} className='logo-img'></img>
          <a href="#">SECTION</a>
          <a href="#">NOSOTROS</a>
          <a href="#">CONTACT US</a>
      </nav>
    </header>
  );
}

export default Header;
