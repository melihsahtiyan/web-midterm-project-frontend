// import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./App.css";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <div>
      <Register />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Login />} />
    //       <Route path="Register" element={<Register />} />
    //       <Route path="*" element={<Home />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
export default App;
