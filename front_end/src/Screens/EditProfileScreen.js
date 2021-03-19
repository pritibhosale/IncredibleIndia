import Header from "../Components/Header";
import { Link } from "react-router-dom";

const EditProfile = (props) => {
  return (
    <div class="text-center mt-5">
      <Header title="Edit Profile.." />

      <div class="container col-sm-4 mt-5 border border-dark border-5">
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-6">
            <label for="validationCustomUsername" class="form-label">
              First Name
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose First Name.</div>
            </div>
          </div>{" "}
          <div class="col-md-6">
            <label for="validationCustomUsername" class="form-label">
              Last Name
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose Last Name.</div>
            </div>
          </div>
          <div class="col-md-12 mt-3">
            <label for="validationCustomUsername" class="form-label">
              Email
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose Email.</div>
            </div>
          </div>
          <div class="col-md-12 mt-3">
            <label for="validationCustomUsername" class="form-label">
              Password
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose a Password.</div>
            </div>
          </div>
          <div class="col-md-4 mt-3">
            <label for="validationCustomUsername" class="form-label">
              City
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose City.</div>
            </div>
          </div>
          <div class="col-md-4 mt-3">
            <label for="validationCustom04" class="form-label">
              State
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option>Choose..</option>
              <option>Maharashtra</option>
              <option>Telangana</option>
              <option>Madhya Pradesh</option>
              <option>...</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-4 mt-3">
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
              class="btn btn-outline-primary float-center"
              to="/ownerprofile"
            >
              Save
            </Link>
          </div>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
};

EditProfile.defaultProps = {
  title: "",
};

export default EditProfile;
