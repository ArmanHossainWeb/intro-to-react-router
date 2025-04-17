import { StrictMode, Suspense} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/root/Root";
import Home from "./components/home/Home";
import Laptops from "./components/Laptops/Laptops";
import Mobiles from "./components/mobiles/Mobiles";
import Television from "./components/Television/Television";
import Electronics from "./components/Electronics/Electronics";
import Users from "./components/Users/Users";
import Users2 from "./components/Users2/Users2";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/postDetails/PostDetails";

const usersFetch = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true , Component: Home},
      {path:"laptops",Component: Laptops},
      {path:"mobiles", Component: Mobiles},
      {path:"television", Component:Television},
      {path:"electronics", Component: Electronics},
      
      {
        path:"users2",
        element:<Suspense fallback={<h1>data loading...</h1>}>
          <Users2 usersFetch={usersFetch}></Users2>
        </Suspense>
      },
      {
        path:"users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component:Users
      },
      {
        path: "users/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path:"posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component:Posts
      },
      {
        path:"posts/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      }
    ],
  },
  {},
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
