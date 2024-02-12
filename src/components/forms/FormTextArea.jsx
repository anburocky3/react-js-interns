import PropTypes from "prop-types";

const FormTextArea = ({
  name,
  label,
  placeholder,
  register,
  error,
  required,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-1">
        {label}
        {required ? <span className="text-red-500 ml-1">*</span> : ""}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        {...register}
        className="px-4 py-2 rounded bg-gray-200 block w-full outline-none"
      ></textarea>
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
};

FormTextArea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
  required: PropTypes.bool,
};

export default FormTextArea;
