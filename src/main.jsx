import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/root/Root";
import Home from "./components/home/Home";
import Mobiles from "./components/mobiles/Mobiles";
import Laptops from "./components/Laptops/Laptops";
import Television from "./components/Television/Television";
import Users from "./components/Users/Users";
import Electronics from "./components/Electronics/Electronics";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      { path: "television", Component: Television },
      {path: "electronics" , Component: Electronics},
      { 
        path: "users", 
        loader:() => fetch("https://jsonplaceholder.typicode.com/users"),  
        Component: Users 
      },
    ],
  },
  {},
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
