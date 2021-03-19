import Slider from "../Components/Slider";
import CardComponent from "../Components/CardComponent";
import { Link } from "react-router-dom";

const HomeScreen = (props) => {
  return (
    <div class="container col-sm-10 mt-5">
      <Slider />
      <div className="mt-5 float-center">
        <Link
          type="button"
          class="btn btn-outline-primary mb-3"
          to="/propertydetails"
        >
          property
        </Link>
      </div>
      <CardComponent
        imgsrc="https://source.unsplash.com/user/erondu/1600x900"
        title="Mumbai"
        text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
      />
      <CardComponent
        imgsrc="https://source.unsplash.com/user/erondu/1600x900"
        title="Pune"
        text="Some quick example text to build on the card title and make up the
           bulk of the card's content."
      />
      <CardComponent
        imgsrc="https://source.unsplash.com/user/erondu/1600x900"
        title="Delhi"
        text="Some quick example text to build on the card title and make up the
           bulk of the card's content."
      />
      <CardComponent
        imgsrc="https://source.unsplash.com/user/erondu/1600x900"
        title="Hyderabad"
        text="Some quick example text to build on the card title and make up the
           bulk of the card's content."
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default HomeScreen;
