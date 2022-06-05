import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_HuBbRRLsRc6XljQJrSuFg";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (
    serviceID,
    templateID,
    userID,
    name,
    phone,
    email,
    subject,
    description
  ) => {
    emailjs
      .send(
        serviceID,
        templateID,
        userID,
        name,
        phone,
        email,
        subject,
        description
      )
      .then(() => {
        setSuccessMessage(
          "Form Submitted. I will respond as soon as possible."
        );
      })
      .catch((err) => console.error(`Something went wrong, ${err}`));
  };

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>
          Please fill out the form and describe in your project needs and I'll
          contact you as soon as possible.
        </p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/*Name Input*/}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register("message", {
                    required: true,
                    maxLength: {
                      value: 20,
                      message:
                        "Please enter a name with fewer than 20 characters",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/*Phone Input*/}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone
              Number"
                  name="phone"
                  {...register("message", {
                    required: true,
                    maxLength: {
                      value: 10,
                      message: "Please enter a number with 10 characters",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/*Email Input*/}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  name="email"
                  {...register("message", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid Email",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/*Subject Input*/}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register("message", {
                    required: true,
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/*Description*/}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please give a brief description of your project"
                  name="description"
                  {...register("message", {
                    required: true,
                  })}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
