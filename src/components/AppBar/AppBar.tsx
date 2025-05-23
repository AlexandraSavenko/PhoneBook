import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      <ThemeSwitcher/>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
