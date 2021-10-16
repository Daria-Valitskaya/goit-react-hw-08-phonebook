import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { selectors } from "../redux/Auth";
import s from "./Components.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
