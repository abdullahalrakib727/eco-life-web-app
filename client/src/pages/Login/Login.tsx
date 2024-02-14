import { FC } from "react";
import useAuth from "../../hooks/useAuth";

const Login: FC = (): JSX.Element => {
  const { signInUser, googleSignIn } = useAuth();

  const handleGoogleLogin = () => {
    googleSignIn();
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with google</button>
    </div>
  );
};

export default Login;
