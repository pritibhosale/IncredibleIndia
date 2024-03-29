import { Link } from "react-router-dom";

import CardComponent from "../Components/CardComponent";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProperty } from "../Actions/UserActions";

const PropertyDetailsScreen = (props) => {
  const dispatch = useDispatch();
  const fetchProperty = useSelector((store) => store.fetchProperty);
  const { error, response, loading } = fetchProperty;

  useEffect(() => {
    dispatch(getProperty());
  }, []);

  return (
    <div className="container col-sm-10 mt-5">
      <div className="mt-5 float-center"></div>
      {response &&
        response &&
        response.length > 0 &&
        response.map((fetchProperty) => {
          return (
            <CardComponent
              imgsrc="https://source.unsplash.com/user/erondu/1600x900"
              title={fetchProperty.city}
              text={fetchProperty.address}
              rent={fetchProperty.rent}
              status={fetchProperty.status}
              propertyType={fetchProperty.propertyType}
            />
          );
        })}

      <Link
        type="button"
        class="col-sm-12 btn btn-primary float-center m-3"
        to="/viewproperty"
      >
        View All Properties
      </Link>
    </div>
  );
};

export default PropertyDetailsScreen;
