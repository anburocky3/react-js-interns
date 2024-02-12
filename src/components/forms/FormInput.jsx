import PropTypes from "prop-types";

const FormInput = ({
  name,
  type = "text",
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
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register}
        className="px-4 py-2 rounded bg-gray-200 block w-full outline-none"
      />
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
  register: PropTypes.object,
  error: PropTypes.object,
  required: PropTypes.bool,
};

export default FormInput;
