import Header from "../Components/Header";
import { Link } from "react-router-dom";

import Profile from "../Components/Profile";

const SeekerProfileScreen = (props) => {
  return (
    <div>
      <div>
        <Profile
          imgsrc="https://source.unsplash.com/user/erondu/1600x900"
          name="xyz"
          email="sujit@gmail.com"
          phone="12345678"
          address="ahvfbvvibi,aibvfbvi"
        />
      </div>
      <div className=" container col-sm-3">
        <Link
          type="button"
          class="btn btn-outline-primary m-3"
          to="/editprofile"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

SeekerProfileScreen.defaultProps = {
  title: "",
};

export default SeekerProfileScreen;
