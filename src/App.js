import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
];

const labelMapping = {
  email: "Email",
  fullName: "Full Name",
  address1: "Address",
  city: "City",
  province: "Province",
  postalCode: "Postal Code",
};

const App = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address1: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
  };

  return (
    <div>
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address1"
            placeholder="1234 Main St"
            value={formData.address1}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address 2:</label>
          <input
            type="text"
            name="address2"
            placeholder="Address 2"
            value={formData.address2}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Province:</label>
          <select
            name="province"
            value={formData.province}
            onChange={handleInputChange}
          >
            <option value="" disabled selected>
              Choose...
            </option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ alignItems: "left" }}>
          <input
            type="checkbox"
            name="agreeToTerms"
            checked="checked"
            onChange={handleInputChange}
            style={{ marginRight: "5px" }}
          />
          <label style={{ margin: 0, textAlign: "center" }}>
            Agree to Terms and Conditions
          </label>
        </div>
        <div style={{ textAlign: "center", margin: 20 }}>
          <button type="submit">Submit</button>
        </div>
      </form>
      <br />
      <br />

      {submittedData && (
        <table>
          <tbody>
            {Object.entries(submittedData).map(([name, value]) => (
              <tr key={name}>
                <td>{labelMapping[name]}</td>
                <td>{value.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
