import Header from "../Components/Header";
import { Link } from "react-router-dom";

import Profile from "../Components/Profile";

const AdminProfileScreen = (props) => {
  return (
    <div>
      <div>
        <Profile
          imgsrc="https://source.unsplash.com/user/erondu/1600x900"
          name="Sujit Barbole"
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
        <Link type="button" class="btn btn-outline-primary m-3" to="/viewusers">
          View User Report
        </Link>
        <Link
          type="button"
          class="btn btn-outline-primary m-3"
          to="/viewproperty"
        >
          View Property Report
        </Link>

        <h4 className="title">{props.title}</h4>
      </div>
    </div>
  );
};

AdminProfileScreen.defaultProps = {
  title: "",
};

export default AdminProfileScreen;
