import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Base from "./components/Base";
import Header from "./components/Header";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Order from "./components/Order";
import Toppings from "./components/Toppings";

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.key}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route
              path="base"
              element={<Base addBase={addBase} pizza={pizza} />}
            />
            <Route
              path="toppings"
              element={<Toppings addTopping={addTopping} pizza={pizza} />}
            />
            <Route
              path="order"
              element={<Order pizza={pizza} setShowModal={setShowModal} />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
