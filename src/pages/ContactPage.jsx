import { useForm } from "react-hook-form";
import FormInput from "../components/forms/FormInput";
import FormTextArea from "../components/forms/FormTextArea";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "Anbuselvan",
    },
  });

  const sendInfo = (data) => {
    console.log("Sending this info to the server: ", data);
  };

  return (
    <div className="m-10">
      <div className="bg-white p-10 rounded">
        <h4 className="font-semibold text-xl">Contact Page!</h4>
        <form className="my-5 space-y-4" onSubmit={handleSubmit(sendInfo)}>
          <FormInput
            name="fullName"
            label="Full name"
            placeholder="Enter your Full Name!"
            register={register("fullName", {
              required: "This field is required!",
            })}
            error={errors.fullName}
            required
          />

          <FormInput
            name="email"
            label="Email Address"
            placeholder="Enter your Email Address"
            register={register("email", {
              required: "This field is required!",
            })}
            error={errors.email}
            required
          />

          <FormInput
            name="subject"
            label="Subject"
            placeholder="Subject Title"
            register={register("subject", {
              required: "This field is required!",
            })}
            error={errors.subject}
            required
          />

          <FormTextArea
            name="description"
            label="Description"
            placeholder="Write description briefly!"
            register={register("description", {
              required: "This field is required!",
            })}
            error={errors.description}
            required
          />

          <button className="px-4 py-2 rounded bg-yellow-500">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
