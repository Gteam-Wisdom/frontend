import { useAppStore } from "../store/store";

export const SignUp = () => {
  const [, dispatch] = useAppStore();

  dispatch({ type: "SIGN_UP" });
  return <></>;
};
