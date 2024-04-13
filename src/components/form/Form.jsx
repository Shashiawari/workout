import React, { useState } from "react";
import Input from "./Input";
import "./Form.css";
import Main from "../main/Main";
const Form = () => {
  const [login, setLogin] = useState(true);
  const [skipClicked, setSkipClicked] = useState(false);
  const handleLoginClick = () => {
    setLogin((prevLoginState) => !prevLoginState);
  };
  function handleSkip() {
    setSkipClicked(true);
  }

  if (skipClicked) {
    return <Main />;
  }

  return (
    <div className="Form">
      <div className="text-form mx-4 my-5 ">
        {login ? "Create an account" : "Welcome Back"}
      </div>
      {login ? (
        <div className="input1">
          <Input placeholder="First Name" type="text" />
          <Input placeholder="Last Name" type="text" />
          <Input placeholder="Email" type="Email" />
          <Input placeholder="Password" type="Password" />
          <input type="checkbox" className="ms-4 check"></input>
          <label className="mx-3 lab">
            {" "}
            By proceeding, I agree to all T&C and Privacy Policy
          </label>
        </div>
      ) : (
        <div className="input2">
          <Input placeholder="Email" type="Email" />
          <Input placeholder="Password" type="Password" />
        </div>
      )}
      <div >
      <div className="create text-center my-5 mx-4">
        <button className="my-5 button"  onClick={handleSkip}>
          {login ? "Create account" : "Sign in"}
        </button>
      </div>
      <div className="t my-0">
        <svg
          width="343"
          height="10"
          viewBox="0 0 343 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="-2.18557e-08"
            y1="5.75"
            x2="155"
            y2="5.74999"
            stroke="#7F7F7F"
            stroke-width="0.5"
          />
          <line
            x1="186"
            y1="5.75"
            x2="343"
            y2="5.75001"
            stroke="#7F7F7F"
            stroke-width="0.5"
          />
          <path
            d="M170.052 9.096C169.412 9.096 168.816 8.988 168.264 8.772C167.72 8.556 167.248 8.256 166.848 7.872C166.448 7.48 166.136 7.024 165.912 6.504C165.688 5.984 165.576 5.416 165.576 4.8C165.576 4.184 165.688 3.616 165.912 3.096C166.136 2.576 166.448 2.124 166.848 1.74C167.248 1.348 167.72 1.044 168.264 0.827999C168.808 0.612 169.404 0.504 170.052 0.504C170.692 0.504 171.28 0.612 171.816 0.827999C172.36 1.036 172.832 1.336 173.232 1.728C173.64 2.112 173.952 2.564 174.168 3.084C174.392 3.604 174.504 4.176 174.504 4.8C174.504 5.424 174.392 5.996 174.168 6.516C173.952 7.036 173.64 7.492 173.232 7.884C172.832 8.268 172.36 8.568 171.816 8.784C171.28 8.992 170.692 9.096 170.052 9.096ZM170.052 8.028C170.516 8.028 170.944 7.948 171.336 7.788C171.736 7.628 172.08 7.404 172.368 7.116C172.664 6.82 172.892 6.476 173.052 6.084C173.22 5.692 173.304 5.264 173.304 4.8C173.304 4.336 173.22 3.908 173.052 3.516C172.892 3.124 172.664 2.784 172.368 2.496C172.08 2.2 171.736 1.972 171.336 1.812C170.944 1.652 170.516 1.572 170.052 1.572C169.58 1.572 169.144 1.652 168.744 1.812C168.352 1.972 168.008 2.2 167.712 2.496C167.416 2.784 167.184 3.124 167.016 3.516C166.856 3.908 166.776 4.336 166.776 4.8C166.776 5.264 166.856 5.692 167.016 6.084C167.184 6.476 167.416 6.82 167.712 7.116C168.008 7.404 168.352 7.628 168.744 7.788C169.144 7.948 169.58 8.028 170.052 8.028ZM176.17 9V2.64H177.274V4.368L177.166 3.936C177.342 3.496 177.638 3.16 178.054 2.928C178.47 2.696 178.982 2.58 179.59 2.58V3.696C179.542 3.688 179.494 3.684 179.446 3.684C179.406 3.684 179.366 3.684 179.326 3.684C178.71 3.684 178.222 3.868 177.862 4.236C177.502 4.604 177.322 5.136 177.322 5.832V9H176.17Z"
            fill="#2C2B2B"
          />
        </svg>
      </div>
      <div className="social">
        <div className="social">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="7.5"
              stroke="#7F7F7F"
            />
            <path
              d="M29.3541 20.5311H28.75V20.5H22V23.5H26.2386C25.6203 25.2464 23.9586 26.5 22 26.5C19.5149 26.5 17.5 24.4851 17.5 22C17.5 19.5149 19.5149 17.5 22 17.5C23.1471 17.5 24.1908 17.9327 24.9854 18.6396L27.1068 16.5182C25.7673 15.2699 23.9755 14.5 22 14.5C17.8581 14.5 14.5 17.8581 14.5 22C14.5 26.1419 17.8581 29.5 22 29.5C26.1419 29.5 29.5 26.1419 29.5 22C29.5 21.4971 29.4482 21.0062 29.3541 20.5311Z"
              fill="#FFC107"
            />
            <path
              d="M15.3647 18.5091L17.8289 20.3162C18.4956 18.6655 20.1104 17.5 22 17.5C23.1471 17.5 24.1907 17.9327 24.9854 18.6396L27.1067 16.5182C25.7672 15.2699 23.9755 14.5 22 14.5C19.1192 14.5 16.621 16.1264 15.3647 18.5091Z"
              fill="#FF3D00"
            />
            <path
              d="M22 29.5C23.9372 29.5 25.6975 28.7586 27.0284 27.553L24.7071 25.5887C23.9288 26.1806 22.9778 26.5008 22 26.5C20.0492 26.5 18.3929 25.2561 17.7689 23.5202L15.3231 25.4046C16.5644 27.8335 19.0851 29.5 22 29.5Z"
              fill="#4CAF50"
            />
            <path
              d="M29.3541 20.5311H28.75V20.5H22V23.5H26.2386C25.9428 24.3312 25.41 25.0574 24.706 25.5891L24.7071 25.5884L27.0284 27.5526C26.8641 27.7019 29.5 25.75 29.5 22C29.5 21.4971 29.4482 21.0063 29.3541 20.5311Z"
              fill="#1976D2"
            />
          </svg>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="7.5"
              stroke="#7F7F7F"
            />
            <path
              d="M23.95 22.775H26.075L26.925 19.375H23.95V17.675C23.95 16.7995 23.95 15.975 25.65 15.975H26.925V13.119C26.6479 13.0825 25.6015 13 24.4965 13C22.1888 13 20.55 14.4084 20.55 16.995V19.375H18V22.775H20.55V30H23.95V22.775Z"
              fill="#1A7AEB"
            />
          </svg>
        </div>
      </div>
      <div className="log text-center mt-5">
        <p>
          Already have an account?{" "}
          <a href="#" onClick={handleLoginClick}>
            Login
          </a>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Form;
