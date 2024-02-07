import { useState } from "react";
import PropTypes from "prop-types";

const Accordion = (props) => {
  console.log(props.children);
  const [accordionActiveState, setAccordionActiveState] = useState(false);

  const toggleAccordion = () => {
    setAccordionActiveState(!accordionActiveState);
  };
  return (
    <div>
      {" "}
      <div
        className="p-5 bg-gray-100 rounded-t font-semibold flex items-center justify-between cursor-pointer hover:bg-gray-200"
        onClick={toggleAccordion}
      >
        <h4>{props.title}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className={accordionActiveState ? "" : "-rotate-90"}
        >
          <path
            fill="currentColor"
            d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
          ></path>
        </svg>
      </div>
      <div
        className={
          "bg-gray-50 p-5 " + (accordionActiveState ? "block" : "hidden")
        }
      >
        {props.children ? props.children : props.desc}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  children: PropTypes.element,
};

export default Accordion;
