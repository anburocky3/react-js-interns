import { useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from "../components/Accordion";

const AboutPage = () => {
  const { name } = useParams();

  return (
    <div className="m-10">
      <h4 className="text-xl font-semibold mb-3">About</h4>
      <div className="bg-white p-10 rounded">
        <h5>Welcome {name ? name : "Guest"}, this is About page!</h5>
      </div>
      <div className="bg-white my-10 p-10 rounded">
        <h4 className="font-semibold text-2xl">FAQs</h4>

        <div className="my-5 space-y-3">
          <Accordion
            title="Is your internship free for all?"
            desc="Yes, it is!"
          />
          <Accordion title={"How are you?"} desc={"Yea, i'm fine!"} />
          <Accordion
            title="What is Props?"
            desc="props is a argument object of the component which contains the properties which we have passed as a parameter to that component"
          />
          <Accordion title="What is Props? (With Children)">
            <p>
              props is a argument object of the component which contains the
              properties which we have passed as a parameter to that component
            </p>
            <input
              type="text"
              className="bg-gray-500 rounded px-10 py-2"
              placeholder="Enter your name"
            />
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
