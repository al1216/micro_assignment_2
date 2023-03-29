import React, { useEffect, useState } from "react";
import "./Form.css";

function Form() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [myArr, setArr] = useState([]);
  let [status, setStatus] = useState(false);
  let [para,setPara] = useState("Try it free 7 days then ₹180/mo. thereafter");

  let arr = ["HTML", "CSS", "JS", "REACT"];

  let deleteSkill = (value) => {
    setArr((oldValues) => {
      return oldValues.filter((skill) => skill !== value);
    });
  };

  function changeButtonState() {
    if (
      name.trim().length > 0 &&
      email.trim().length > 0 &&
      password.length > 0 &&
      myArr.length >= 1
    ) {
      setStatus(true);
      console.log(true);
    }
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPassword("");
    setArr([]);
    setStatus(false);
    setPara("You have successfully subscribed to our plan ✓");
  }

  useEffect(() => {
    if (name.length > 0 && email.length > 0 && password.length > 0 && myArr.length >= 1) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [name.length, email.length, password.length, myArr.length]);
  return (
    <>
      <div className="holder">
        <p className="para-right">{para}</p>
      </div>
      <div className="form">
        <div className="input-fields">
          <input
            autoFocus="true"
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
              if (temp.trim().length > 0 && !myArr.includes(temp)) setArr((arr) => [...arr, temp]);
            }}
            
          >
            <option value="" selected>Choose your skills</option>
            {arr.map((skill) => (
              <>
                <option value={skill}>{skill}</option>
              </>
            ))}
          </select>

          <div className="skills-selected">
            {myArr.map((skill) => (
              <>
                <div className="skill">
                  <p key={skill} className="skill-para">
                    {skill}
                  </p>
                  <p className="cross" onClick={() => deleteSkill(skill)}>
                    X
                  </p>
                </div>
              </>
            ))}
          </div>
          <button
            className="btn"
            onChange={changeButtonState}
            disabled={!status}
            onClick={resetForm}
          >
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
