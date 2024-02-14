import { FC } from "react";
import RfContainer from "../../components/Containers/RfContainer";
import { Link } from "react-router-dom";

const Register: FC = (): JSX.Element => {
  return (
    <RfContainer>
      <div>
        <div>
          <h1>Signup</h1>
          <form>
            <div>
              <input type="email" name="" id="" />
              <label htmlFor="">Your Email</label>
            </div>
            <div>
              <input type="email" name="" id="" />
              <label htmlFor="">Your Email</label>
            </div>
            <div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="Remember Me"></label>
              </div>
              <span>Forgot Password?</span>
            </div>
            <button type="submit">Login</button>
            <div>
              <span>
                New Here? <Link to="/signup">Create an account</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </RfContainer>
  );
};

export default Register;
