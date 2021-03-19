import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { signin } from "../Actions/UserActions";

import { useDispatch, useSelector } from "react-redux";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((store) => store.userSignin);
  const { loading, error, response } = userSignin;

  const dispatch = useDispatch();

  const OnSignin = () => {
    dispatch(signin(email, password));
  };
  /*
  useEffect(() => {
    let url;
    if (response && response.role == "ADMIN") {
      url = "/adminprofile";
    } else if (response && response.role == "OWNER") {
      url = "/ownerprofile";
    } else if (response && response.role == "SEEKER") {
      url = "/seekerprofile";
    }
  }, [loading, error, response]);*/

  useEffect(() => {
    if (response && response.role == "ADMIN") {
      sessionStorage.setItem("token", response.data.token);
      props.history.push("/adminprofile");
    } else if (response && response.role == "OWNER") {
      sessionStorage.setItem("token", response.data.token);
      props.history.push("/ownerprofile");
    } else if (response && response.role == "SEEKER") {
      sessionStorage.setItem("token", response.data.token);
      props.history.push("/seekerprofile");
    } else if (response && response.status == "error") {
      alert(response.error);
    } else if (error) {
      alert(error);
    }
  }, [loading, error, response]);

  return (
    <div class="text-center mt-5">
      <Header title="Login With Valid Credentials.." />
      <div class="container col-sm-4 mt-5 border border-dark border-5">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button
            onClick={OnSignin}
            type="submit"
            class="btn btn-primary float-left"
          >
            Login
          </button>

          <Link
            type="button"
            class="btn btn-outline-primary float-left ml-4"
            to="/"
          >
            Forgot Password
          </Link>

          <p class="col-sm-auto float-left ml-2 ">New User?</p>

          <Link
            type="button"
            class="btn btn-outline-primary float-right"
            to="/registration"
          >
            Register Here
          </Link>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
