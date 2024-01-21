import React from 'react';
import './YourComponent.css'; // Make sure to import your CSS file

const YourComponent = () => {
  return (
    <div className="pyad">
      <h1 align="center">నిసాRGA</h1>

      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>SIGN-UP FORM</h2>
          </div>
          <div className="row clearfix">
            <div>
              <form>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input type="text" name="userame" placeholder="Username" required />
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input type="password" name="password" placeholder="Password" required />
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input type="text" name="phn" placeholder="Phone Number" required />
                </div>

                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input type="text" name="name" placeholder="Door Number" />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input type="text" name="name" placeholder="Pincode" required />
                    </div>
                  </div>

                  <div className="input_field">
                    <span>
                      <i aria-hidden="true" className="fa fa-lock"></i>
                    </span>
                    <input type="text" name="phn" placeholder="Landmark" required />
                  </div>
                </div>

                <input className="button" type="submit" value="Login" color="black" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="credit">Developed by ALMOST GAWDS</p>
    </div>
  );
};

export default YourComponent;