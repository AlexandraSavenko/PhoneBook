import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={css.usermenu}>
      <button onClick={() => dispatch(logOut())} type="button">
        Logout
      </button>
      <p>Welcome {user.name}</p>
    </div>
  );
}
