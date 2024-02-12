import { useState } from "react";
import FormButton from "../components/buttons/FormButton";
import FormInput from "../components/forms/FormInput";
import FormTextArea from "../components/forms/FormTextArea";

const ContactPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    emailAddress: "",
    desc: "",
  });

  const [formError, setFormError] = useState({
    fullName: null,
    emailAddress: null,
    desc: null,
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      // do the fullName validation here.
      if (value.length < 4) {
        setFormError((prev) => ({
          ...prev,
          fullName: "FullName validation failed!",
        }));
      } else {
        setFormError((prev) => ({
          ...prev,
          fullName: "",
        }));
      }
    }

    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submitFormToServer = (e) => {
    e.preventDefault();

    // Do the javascript validations!
    console.log(form);
    alert("Form submitted, successfully!");
  };

  return (
    <div className="m-10">
      <div className="bg-white p-10 rounded">
        <h4 className="font-semibold text-xl">Contact Page!</h4>

        <form action="" onSubmit={submitFormToServer}>
          <div className="space-y-4 my-5">
            <FormInput
              name="fullName"
              label="Full name"
              placeholder="Enter your full name"
              value={form.fullName}
              handleOnChange={handleInputs}
            />
            {formError.fullName ? (
              <small className="text-red-500">{formError.fullName}</small>
            ) : (
              ""
            )}
            <FormInput
              name="emailAddress"
              label="Email Address"
              placeholder="Enter your Email Address"
              value={form.email}
              handleOnChange={handleInputs}
              required
            />
            <FormTextArea
              name="desc"
              label="Contact Description"
              placeholder="Enter your description"
              value={form.desc}
              handleOnChange={handleInputs}
              required
            />
          </div>
          <div>
            <FormButton text={"Save"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
