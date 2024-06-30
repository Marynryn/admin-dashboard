import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "store/selectors";

export const IsLoggedIn = () => {
  const isLogIn = useSelector(selectIsLoggedIn);

  const user = useSelector(selectUser);

  return {
    isLogIn,
    user,
  };
};
