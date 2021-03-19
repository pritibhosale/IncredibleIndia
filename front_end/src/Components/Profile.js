import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const Profile = (props) => {
  return (
    <div class="container col-sm-12 mt-5">
      <Card className="container col-sm-3">
        <CardImg top width="100%" src={props.imgsrc} alt="Card image cap" />
        <CardBody class=" container text-center mt-4 mb-3">
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardText>{props.email}</CardText>

          <CardText>{props.phone}</CardText>
          <CardText>{props.address}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;
