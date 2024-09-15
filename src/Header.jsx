

const Header = () => {

  return (
    <header className="flex items-center justify-between px-[50px] py-12">
      <div className="logo">
        <img src="../src/assets/Logo.png" alt="Logo" />
      </div>
      <nav className="flex items-center gap-16" >
        <ul className="header__pages-links flex gap-8">
          <li><a className="page-link" href="">Home</a></li>
          <li><a className="page-link" href="">Destinations</a></li>
          <li><a className="page-link" href="">Motorcycles</a></li>
          <li><a className="page-link" href="">Rentals</a></li>
          <li><a className="page-link" href="">Blog</a></li>
          <li><a className="page-link" href="">Contact</a></li>
        </ul>
        <ul className="header__social-links flex items-center gap-5">
          <li className="hover:scale-125 duration-200"><a href=""><img src="../src/assets/facebook.png" alt="facebook" /></a></li>
          <li className="hover:scale-125 duration-200"><a href=""><img src="../src/assets/google.png" alt="google" /></a></li>
          <li className="hover:scale-125 duration-200"><a href=""><img src="../src/assets/noname.png" alt="noname" /></a></li>
          <li className="hover:scale-125 duration-200"><a href=""><img src="../src/assets/youtube.png" alt="youtube" /></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
