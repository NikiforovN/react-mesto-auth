import headerLogo from "../images/header__logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="Логотип Место" className="header__logo" />
      <div className="header__container">
        <p className="header__name">email@mail.com</p>
        <a className="header__link">Войти</a>
      </div>
    </header>
  );
}
export default Header;
