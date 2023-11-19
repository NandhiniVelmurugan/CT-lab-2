import React, { useState } from "react";
import { Link } from "react-router-dom";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [landmark, setLandmark] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          address,
          country,
          mobileNumber,
          pinCode,
          landmark,
        }),
      });

      if (response.ok) {
        console.log("User details saved successfully!");
        alert('Submit successful!'); // Updated alert message
        // You can redirect the user to a different page after successful registration
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="form-box">
          <h1 className="text-center">Shipping Details</h1>
          <hr />
          <div className="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="my-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="my-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder=""
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="country">Country/Region</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder=""
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNumber"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="pinCode">Pin Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pinCode"
                    placeholder=""
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="landmark">Landmark</label>
                  <input
                    type="text"
                    className="form-control"
                    id="landmark"
                    placeholder=" "
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button
                    className="my-2 mx-auto btn btn-dark"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
                <div><Link to="/PaymentPage" ><center><button >Payment</button></center></Link></div>
              </form>
            </div>
              
           
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
