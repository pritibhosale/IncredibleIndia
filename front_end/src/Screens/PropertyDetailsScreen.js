const PropertyDetailsScreen = (props) => {
  return (
    <div>
      <h1>This property details page</h1>
      <h4 className="title">{props.title}</h4>
    </div>
  );
};

PropertyDetailsScreen.defaultProps = {
  title: "",
};

export default PropertyDetailsScreen;
