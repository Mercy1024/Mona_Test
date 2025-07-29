import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import testimonialIcon from "../assets/testimonialIcon.png";
const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    termsAccepted: false,
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="registration-container">
        {/* Left Panel with 3D Sphere */}
        <div className="left-panel">
          <div className="logo-container">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>

          {/* <div className="hero_IMAGE">
            <img src={hero} alt="heroimage" />
          </div> */}

          <div className="testimonial-card">
            <div className="testimonial-icon">
              <img src={testimonialIcon} alt="testimonialIcon" />
            </div>
            <p className="testimonial-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,been the industry's standard dummy text ever
              since.
            </p>
            <div className="testimonial-author">
              <strong>John Matthew Alex</strong>
              <span>Engineer, Klear</span>
            </div>
            <div className="testimonial-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>

        {/* Right Panel with Form */}
        <div className="right-panel">
          <div className="form-container">
            <h1 className="title">Welcome back</h1>
            <p className="subtitle">Fill in information below to sign up</p>

            <div className="form">
              <div className="input-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Legal Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Preferred Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              <div className="input-group">
                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Choose Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="password-input"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="password-toggle"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="checkbox-container">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  className="checkbox"
                />
                <label className="checkbox-label">Terms of Service</label>
              </div>

              <button
                onClick={() => navigate("/dashboard")}
                type="button"
                className="submit-button"
              >
                Save and Continue
              </button>

              <div className="divider">
                <span className="divider-text">Or</span>
              </div>

              <button type="button" className="google-button">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="google-icon"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign up with Google
              </button>

              <p className="login-text">
                Have an account?{" "}
                <a href="#" className="login-link">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
