import React, { useState } from "react";
import "./Form.css";

function Form() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [myArr, setArr] = useState([]);
  return (
    <>
      <div className="form">
        <div className="input-fields">
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select
            name="skills"
            className="skills"
            onChange={(e) => {
              let temp = e.target.value;
              if (!myArr.includes(temp)) setArr((arr) => [...arr, temp]);
            }}
          >
            <option value="" selected disabled>
              Choose your skills
            </option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JS">JS</option>
            <option value="REACT">REACT</option>
          </select>
          <div className="skills-selected">
            <div className="skill">
              <p className="skill-para">HTML</p>
              <p className="cross">X</p>
            </div>
            <div className="skill">
              <p className="skill-para">HTML</p>
              <p className="cross">X</p>
            </div>
          </div>
          <button disabled="disabled" className="btn">
            CLAIM YOUR FREE TRIAL
          </button>
        </div>
        <p className="tAndc">
          By clicking the button you are agreeing to our{" "}
          <span className="para-tc"> Terms and Services</span>
        </p>
      </div>
    </>
  );
}

export default Form;
