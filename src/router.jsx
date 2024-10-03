import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DetailProduct from "./pages/DetailProduct";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";




export const myRouter = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children: [
           {
            path: "/",
            element: <Home/>,
           },
           {
            path: "about",
            element: <About/>
           },
           {
            path: "register",
            element: <Signup/>
           },
           {
            path: "contact",
            element: <Contact/>
           },
           {
            path:"login",
            element: <Login/>
           },
           {
            path:"product/:id",
            element: <DetailProduct/>
           },
           {
            path:"wishlist",
            element: <Wishlist/>
           },
           {
            path:"cart",
            element: <Cart/>
           },
           {
            path:"check-out",
            element: <CheckOut/>
           }
        ],
    },
]);


