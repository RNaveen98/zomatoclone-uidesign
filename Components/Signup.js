import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import Button from '@mui/material/Button';
import CloseButton from "react-bootstrap/CloseButton";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isAgreed, setIsAgreed] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", api: "" });

  const handleLoginClick = () => {
    navigate("/");
  };

  const clickButton = () => {
    navigate("/Login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error messages when user types
  };

  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAgreed) {
      alert("You must agree to the terms.");
      return;
    }

    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:3000/Signup", formData);
        console.log("User added:", response.data);
        navigate("/"); // Navigate after successful signup
      } catch (error) {
        console.error("Error during signup:", error);
        setErrors({ ...errors, api: "Failed to sign up. Please try again." });
      }

      // Clear form data
      setFormData({ name: "", email: "" });
      setIsAgreed(false);
    }
  };

  return (
    <div className="page-container">
      <h1 className="up">Sign up</h1>
      <CloseButton className="cross-icons" title="Close" onClick={handleLoginClick} />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Full Name"
            className="input-box"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ borderColor: errors.name ? 'red' : '' }}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="input-email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ borderColor: errors.email ? 'red' : '' }}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
          {errors.api && <span className="error-message">{errors.api}</span>}

          <div className='check mt-2'>
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={handleCheckboxChange}
            />
            <div className="term mt-2">
              <span>
                I agree to Zomato's Terms of Service, Privacy Policy, and
              </span>
            </div>
            <div className="content mt-2">
              <span>Content Policies.</span>
            </div>
          </div>

          <div className="account">
            <Button variant="danger" type="submit" className="submit-button">
              Create account
            </Button>
          </div>

          <div className="line">
            <span className="hrline">or</span>
          </div>

          <div className="google">
            <FcGoogle className="fc-icons" />
            <span>Sign in with Google</span>
          </div>

          <div>
            <p className="already">Already have an account?</p>
            <span className="login-page" onClick={clickButton}>
              Login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
