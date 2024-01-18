import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import SomeWork from "./components/SomeWork";
import IAm from "./components/IAm";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="https://giolaghetto.netlify.app/"
          element={<Home />}
        />
        <Route
          path="https://giolaghetto.netlify.app/somework"
          element={<SomeWork />}
        />
        <Route
          path="https://giolaghetto.netlify.app/iam"
          element={<IAm />}
        />
        <Route
          path="https://giolaghetto.netlify.app/contact"
          element={<Contact />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
