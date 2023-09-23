import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./components/Base";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";
import Toppings from "./components/Toppings";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

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
      <BrowserRouter>
        <Routes>
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
            <Route path="order" element={<Order pizza={pizza} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
