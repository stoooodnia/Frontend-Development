import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Events,
  Products,
  Whoops404,
  Us,
  Pl,
  De,
} from "./components/PlaceHolders";
import { Kalkulator, Add, Sub, Mul, Div } from "./components/Kalkulator";
// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />}>
//           <Route path="us" element={<Us />} />
//           <Route path="pl" element={<Pl />} />
//           <Route path="de" element={<De />} />
//         </Route>
//         <Route path="events" element={<Events />} />
//         <Route path="products" element={<Products />} />
//         <Route path="*" element={<Whoops404 />} />
//       </Routes>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Kalkulator />} />
        <Route path="add" element={<Add />} />
        <Route path="sub" element={<Sub />} />
        <Route path="mul" element={<Mul />} />
        <Route path="div" element={<Div />} />
      </Routes>
    </div>
  );
}

export default App;
