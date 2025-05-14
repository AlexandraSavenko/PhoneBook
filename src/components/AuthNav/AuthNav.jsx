import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
}
