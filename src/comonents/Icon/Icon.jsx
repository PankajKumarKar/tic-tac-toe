import React from "react";
import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa";
import "./Icon.css";

export default function Icon({ name }) {
  if (name == "circle") {
    return <FaRegCircle className="Icon" />;
  } else if (name === "cross") {
    return <FaTimes className="Icon" />;
  } else {
    return <FaPen className="Icon" />;
  }
}
