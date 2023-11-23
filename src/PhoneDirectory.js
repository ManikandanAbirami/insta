import React, { useState } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PhoneDirectory = () => {
  const [subscribersList, setSubscribersList] = useState([
    {
      id: 1,
      name: "Shilpa Bhat",
      phone: "9999999999",
    },
    {
      id: 2,
      name: "Srishti Gupta",
      phone: "8888888888",
    },
  ]);

  const deleteSubscriberHandler = (subscriberId) => {
    const newSubscribers = subscribersList.filter(
      (subscriber) => subscriber.id !== subscriberId
    );
    setSubscribersList(newSubscribers);
  };

  const addSubscriberHandler = (newSubscriber) => {
    newSubscriber.id =
      subscribersList.length > 0
        ? subscribersList[subscribersList.length - 1].id + 1
        : 1;
    setSubscribersList([...subscribersList, newSubscriber]);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ShowSubscribers
              subscribersList={subscribersList}
              deleteSubscriberHandler={deleteSubscriberHandler}
            />
          }
        />
        <Route
          exact
          path="/add"
          element={
            <AddSubscriber addSubscriberHandler={addSubscriberHandler} />
          }
        />
      </Routes>
    </Router>
  );
};

export default PhoneDirectory;
