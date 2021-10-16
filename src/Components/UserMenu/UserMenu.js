import { selectors, operations } from "../../redux/Auth";
import defaultImage from "./default-image.png";
import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectors.getUsername);
  const avatar = defaultImage;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.defaultImg} />
      <span className={s.userName}>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Exit
      </button>
    </div>
  );
}
