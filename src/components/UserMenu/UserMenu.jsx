import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Welcome {user.name}</p>
      <button onClick={() => dispatch(logOut())} type="button">
        Logout
      </button>
    </div>
  );
}
