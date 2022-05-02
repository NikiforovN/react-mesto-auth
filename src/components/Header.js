import { Link, useLocation } from "react-router-dom";
import headerLogo from "../images/header__logo.svg";

function Header(props) {
  let location = useLocation();

  return (
    <header className="header">
      <img src={headerLogo} alt="Логотип Место" className="header__logo" />
      <div className="header__container">
        {props.isLoggedIn ? (
          <>
            <p className="header__name">{props.userEmail}</p>
            <button
              className="header__link buttons-hover"
              onClick={props.handleSignOut}
            >
              Выйти
            </button>
          </>
        ) : (
          <>
            {location.pathname === "/login" ? (
              <Link to="register" className="header__link buttons-hover">
                Регистрация
              </Link>
            ) : (
              <Link to="login" className="header__link buttons-hover">
                Войти
              </Link>
            )}
          </>
        )}
      </div>
    </header>
  );
}
export default Header;

//<Link to="login" className="header__link buttons-hover">Войти</Link>
