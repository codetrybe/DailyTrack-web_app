import React, { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiArrowDropDownLine} from "react-icons/ri";
import { Label } from "./styled";
// import "../../screens/css/responsivelogin.css";

function Input({ 
      label, 
      placeholder, 
      icon, 
      id, 
      type = "text", 
      gender, 
      password, 
      value, 
      onChanged, 
      name }) {
  const [showPassword, setShowPassword] = useState(false);
  const [selectGender, setSelectGender] = useState("");
  const passwordRef = useRef();
  const handleChangeProp = (e) => {
    onChanged(e)


  }

  const handleClick = () => {
    if (!showPassword) {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
    setShowPassword(prev => !prev);
    console.log(passwordRef.current.type);
  };

  return (
    <div className="form-group">
      <Label className="label" htmlFor={id}>{label}</Label>
      <div className="input-container ">
      
      <div className="text-2xl">{icon}</div> 
      {!gender ? (
        <input
          className="input" 
          ref={password ? passwordRef : null}
          type={type}
          placeholder={placeholder}
          id={id}
          value ={value}
          name={name}
          onChange={handleChangeProp}
          required
          autoComplete="off"
        />
      ) : (
        <div className="select-group " style={{display:"flex", alignItems:"center", width:"100%"}}>
          <select required defaultValue style={{flex:"1"}}>
            <option className="option-gender"  value="" disabled >
              Select your gender
            </option>
            <option className="option-gender" value="male">Male</option>
            <option className="option-gender" value="female">Female</option>
            <option className="option-gender" value="others">Prefer not to say</option>
          </select>

          <span className="dropdown icon">
            <RiArrowDropDownLine size="40" fill="gray" />
          </span>
        </div>
      )}

      {password ? (
        showPassword ? (
          <span className="show " onClick={handleClick} title="Hide Password">
            <AiOutlineEye size="20" fill="gray" />
          </span>
        ) : (
          <span className="hide " onClick={handleClick} title="Show Password">
            <AiOutlineEyeInvisible size="20" fill="gray" />
          </span>
        )
      ) : null}
       
    
      </div>
    </div>
  );
}

export default Input;