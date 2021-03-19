import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Checkbox from "../Components/Checkbox";

const AddPropertyScreen = (props) => {
  return (
    <div class="text-center mt-5">
      <Header title="Add Property With Valid Details.." />

      <div class="container col-sm-4 mt-5 border border-dark border-5">
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4 mt-3">
            <label for="validationCustom04" class="form-label">
              Property Type
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option>1Bhk</option>
              <option>2Bhk</option>
              <option>3Bhk</option>
              <option>4Bhk</option>
              <option>...</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid Property type.
            </div>
          </div>
          <div class="col-md-4 mt-3 ">
            <label for="validationCustom04" class="form-label">
              State
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option>Karnataka</option>
              <option>Maharashtra</option>
              <option>Telangana</option>
              <option>M P</option>
              <option>...</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>

          <div class="col-md-12 mt-3">
            <label for="validationCustom05 " class="form-label float-left">
              Complete Address
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom05"
              required
            />

            <div class="invalid-feedback">Please provide a valid Address.</div>
          </div>

          <div class="col-md-6 mt-3 ">
            <label for="validationCustom04" class="form-label">
              City
            </label>
            <br></br>
            <select class="form-select" id="validationCustom04" required>
              <option>Pune</option>
              <option>Mumbai</option>
              <option>Nagpur</option>
              <option>Nashik</option>
              <option>...</option>
            </select>
            <div class="invalid-feedback">Please select a valid city.</div>
          </div>

          <div class="col-md-6 mt-3">
            <label for="validationCustom05" class="form-label">
              Pincode
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom05"
              required
            />

            <div class="invalid-feedback">Please provide a valid zip.</div>
          </div>

          <div class="input-group mb-3 mt-3 mr-3 ml-3">
            <input type="file" class="form-control" id="inputGroupFile02" />
            <label class="input-group-text" for="inputGroupFile02">
              Upload Photo
            </label>
          </div>

          <div class="input-group mt-3 mr-3 ml-5">
            <label for="validationCustom04" class="form-label col-md-12 ">
              Facilities Provided
            </label>

            <Checkbox title="Ac" />
            <Checkbox title="wifi" />
            <Checkbox title="gym" />

            <Checkbox title="Ac" />
            <Checkbox title="wifi" />
            <Checkbox title="gym" />
          </div>
          <div class="col-md-4 mt-3">
            <label for="validationCustom05 " class="form-label float-left">
              Rent
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom05"
              required
            />

            <div class="invalid-feedback">Please provide a valid Amount.</div>
          </div>

          <div class="col-12">
            <div class="form-check my-3 float-left">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="col-12">
            <Link
              type="button"
              class="btn btn-outline-primary float-left"
              to="/payment"
            >
              Pay And Add
            </Link>

            <Link
              type="button"
              class="btn btn-outline-primary float-right"
              to="/ownerprofile"
            >
              Cancle
            </Link>
            <input
              type="reset"
              value="Reset"
              class="btn btn-outline-primary"
            ></input>
          </div>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyScreen;
