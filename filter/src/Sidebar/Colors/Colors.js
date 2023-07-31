import React from "react";
import Input from "../../components/Input";
import "./Colors.css";
function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" name="test3" value="" />
        <span className="checkmark all"></span>All
      </label>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" name="test3" value="white" />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
      <Input
        handleChange={handleChange}
        value=""
        title="Black"
        name="test3"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value=""
        title="Blue"
        name="test3"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value=""
        title="Red"
        name="test3"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value=""
        title="Green"
        name="test3"
        color="green"
      />
      <Input
        handleChange={handleChange}
        value=""
        title="White"
        name="test3"
        color="white"
      />
    </div>
  );
}

export default Colors;
