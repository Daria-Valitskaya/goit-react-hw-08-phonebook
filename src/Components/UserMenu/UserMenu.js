import { selectors, operations } from "../../redux/Auth";
import defaultImage from "./default-image.png";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectors.getUsername);
  const avatar = defaultImage;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Exit
      </button>
    </div>
  );
}
