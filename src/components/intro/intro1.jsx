import React, { useState, useEffect } from "react";
import "./inteo.css";
import Form from "../form/Form";

const Intro1 = () => {
  const [step, setStep] = useState(1);
  const [skipClicked, setSkipClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  function handleclick(s) {
    setStep((s) => s + 1);
  }

  function handleSkip() {
    setSkipClicked(true);
  }

  if (skipClicked) {
    return <Form />;
  }

  return (
    <div className="intro1">
      {loading ? (
        <div className="preloader"><img src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1713002893/6596ea9e-03b8-4483-8440-42be27b0a86c.png" alt="img" className="img-fluid"></img>
        <h1>Let's Begin</h1>
        </div>
      ) : (
        <>
          <h1 className="och">
            <a className="ach" href="#" onClick={handleSkip}>
              skip
            </a>
          </h1>
          <div className="s mb-3" onClick={handleclick}>
            {step === 1 ? (
              <div>
                <div className="container d-flex justify-content-center align-items-center">
                  <div className="row ">
                    <img
                      src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1712930345/snapedit_1712930193516_uehgie-removebg-preview_wkqz3b.png"
                      alt="img1"
                      className="img-fluid mt-5"
                    ></img>
                    <div className="text mt-5">
                      <h1 className="my-4">Track Your Goal</h1>
                      <p>
                        Don’t worry if you have trouble determining your goals, We
                        can help you determine your goals and track your goals
                      </p>
                    </div>
                  </div>
                </div>

                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="30" cy="30" r="25" fill="url(#paint0_linear_1_37)" />
                  <mask id="path-2-inside-1_1_37" fill="white">
                    <path d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM1.50482 30C1.50482 45.7375 14.2625 58.4952 30 58.4952C45.7375 58.4952 58.4952 45.7375 58.4952 30C58.4952 14.2625 45.7375 1.50482 30 1.50482C14.2625 1.50482 1.50482 14.2625 1.50482 30Z" />
                  </mask>
                  <path
                    d="M30 0C37.9565 9.48802e-08 45.5871 3.16071 51.2132 8.7868C56.8393 14.4129 60 22.0435 60 30C60 37.9565 56.8393 45.5871 51.2132 51.2132C45.5871 56.8393 37.9565 60 30 60L30 58.4952C37.5574 58.4952 44.8053 55.493 50.1491 50.1491C55.493 44.8053 58.4952 37.5574 58.4952 30C58.4952 22.4426 55.493 15.1947 50.1491 9.85086C44.8053 4.50698 37.5574 1.50482 30 1.50482L30 0Z"
                    stroke="#89A1FF"
                    strokeWidth="2"
                    mask="url(#path-2-inside-1_1_37)"
                  />
                  <path
                    d="M27 36L33 30L27 24"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_37"
                      x1="5"
                      y1="29.1667"
                      x2="55"
                      y2="30"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#DEE5FF" />
                      <stop offset="1" stopColor="#809AFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            ) : (
              <div>
                <div className="container d-flex justify-content-center align-items-center">
                  <div className="row ">
                    <img
                      src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1712934400/image_16_aqq9gm.jpg"
                      alt="img1"
                      className="img-fluid mt-5"
                    ></img>
                    <div className="text mt-5">
                      <h1 className="my-4">Get Burn</h1>
                      <p>
                        Let’s keep burning to achieve your goals, it hurts only
                        temporarily, if you give up now you will be in pain forever
                      </p>
                    </div>
                  </div>
                </div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="30" cy="30" r="25" fill="url(#paint0_linear_1_37)" />
                  <mask id="path-2-inside-1_1_37" fill="white">
                    <path d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM1.50482 30C1.50482 45.7375 14.2625 58.4952 30 58.4952C45.7375 58.4952 58.4952 45.7375 58.4952 30C58.4952 14.2625 45.7375 1.50482 30 1.50482C14.2625 1.50482 1.50482 14.2625 1.50482 30Z" />
                  </mask>
                  <path
                    d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM1.50482 30C1.50482 45.7375 14.2625 58.4952 30 58.4952C45.7375 58.4952 58.4952 45.7375 58.4952 30C58.4952 14.2625 45.7375 1.50482 30 1.50482C14.2625 1.50482 1.50482 14.2625 1.50482 30Z"
                    stroke="#89A1FF"
                    strokeWidth="2"
                    mask="url(#path-2-inside-1_1_37)"
                  />
                  <path
                    d="M27 36L33 30L27 24"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_37"
                      x1="5"
                      y1="29.1667"
                      x2="55"
                      y2="30"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#DEE5FF" />
                      <stop offset="1" stopColor="#809AFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Intro1;
