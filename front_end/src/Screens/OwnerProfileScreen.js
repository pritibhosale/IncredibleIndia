import Header from "../Components/Header";
import { Link } from "react-router-dom";

import Profile from "../Components/Profile";
import { useSelector } from "react-redux";

const OwnerProfileScreen = (props) => {
  // const userSignin = useSelector((store) => store.userSignin);
  // const { response } = userSignin;

  return (
    <div>
      <div>
        <Profile
          imgsrc="https://source.unsplash.com/user/erondu/1600x900"
          name="" //{response && response.name}
          email="" //{response && response.email}
          phone="" //{response && response.contactNo}
          address="" //{response && response.address}
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
        <Link
          type="button"
          class="btn btn-outline-primary m-3"
          to="/addproperty"
        >
          Add Property
        </Link>

        <h4 className="title">{props.title}</h4>
      </div>
    </div>
  );
};

OwnerProfileScreen.defaultProps = {
  title: "",
};

export default OwnerProfileScreen;
