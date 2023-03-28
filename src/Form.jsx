import React from 'react'
import './Form.css';

function Form() {
  return (
    <>
    <div className="form">
        <div className="input-fields">
            <input type="text" className="name" placeholder='Your Name'/>
            <input type="email" className="email" placeholder='Email Address'/>
            <input type="password" className="password" placeholder='Password'/>
            <select name="skills" className="skills">
            <option value="" disabled selected>Choose your skills</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JS">JS</option>
                <option value="REACT">REACT</option>
            </select>
            <div className="skills-selected">
                {/* the skills will come here */}
            </div>
            <button disabled="disabled" className="btn">CLAIM YOUR FREE TRIAL</button>
        </div>
        <p className="tAndc">By clicking the button you are agreeing to our <span className="para-tc"> Terms and Services</span></p>
    </div>
    </>
  )
}

export default Form;