import React, { useState } from "react";
import Header from "./Header";
import "./AddSubscriber.css";
import { Link, useNavigate } from "react-router-dom";

const AddSubscriber = (props) => {
  const [subscriber, setSubscriber] = useState({
    id: 0,
    name: "",
    phone: "",
  });

  const navigate = useNavigate();

  const inputChangedHandler = (e) => {
    const { name, value } = e.target;
    setSubscriber({ ...subscriber, [name]: value });
  };

  const onFormSubmitted = (e) => {
    e.preventDefault();
    props.addSubscriberHandler(subscriber);
    setSubscriber({ id: 0, name: "", phone: "" });
    navigate("/");
  };

  const { name, phone } = subscriber;

  return (
    <div>
      <Header heading="Add Subscriber" />
      <div className="component-body-container">
        <Link to="/">
          <button className="custom-btn">Back</button>
        </Link>

        <form className="subscriber-form" onSubmit={onFormSubmitted}>
          <label htmlFor="name" className="label-control">
            Name:{" "}
          </label>
          <br />
          <input
            id="name"
            type="text"
            className="input-control"
            name="name"
            onChange={inputChangedHandler}
          />
          <br />
          <br />
          <label htmlFor="phone" className="label-control">
            Phone:{" "}
          </label>
          <br />
          <input
            id="phone"
            type="text"
            className="input-control"
            name="phone"
            onChange={inputChangedHandler}
          />
          <br />
          <br />

          <div className="subscriber-info-container">
            <span className="subscriber-to-add-heading">
              Subscriber to be added:{" "}
            </span>
            <br />
            <span className="subscriber-info">Name: {name}</span>
            <br />
            <span className="subscriber-info">Phone: {phone}</span>
            <br />
          </div>

          <button type="submit" className="custom-btn add-btn">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSubscriber;
