import { gsap, Expo, } from "gsap/all";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Front from "./Components/Front/Front";
import SharedFrontPage from "./Pages/Homepage/SharedFrontPage";
import SharedHomePage from "./Pages/SharedHomePage";
const App = () => {
  let res = gsap.registerPlugin();
  let tl = gsap.timeline(Expo);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedHomePage />}>
          <Route index element={<SharedFrontPage tl={tl} Expo={Expo} />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
