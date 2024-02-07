import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText } = useRouteError();

  return (
    <div className="m-10 rounded text-white bg-blue-500 max-w-xl mx-auto p-10">
      <h4 className="text-2xl">
        #{status} Oops! {statusText}
      </h4>
      <p>
        Sorry, something went wrong!{" "}
        <Link to="/" className="underline">
          You can go back here
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
