import PropTypes from "prop-types";

const FormButton = ({ text }) => {
  return (
    <button className="px-4 py-2 rounded bg-yellow-700 text-white hover:bg-yellow-800">
      {text}
    </button>
  );
};

FormButton.propTypes = {
  text: PropTypes.string,
};

export default FormButton;
