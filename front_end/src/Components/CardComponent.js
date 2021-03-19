import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const CardComponent = (props) => {
  return (
    <div class="container col-sm-12  mt-5">
      <Card className="container float-left col-sm-3">
        <CardImg top width="100%" src={props.imgsrc} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>

          <CardText>{props.text}</CardText>
          <Button>Find In {props.title}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;
