import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import AdminSidebar from "./components/Admin/AdminSidebar/AdminSidebar";
import ShopRegister from "./pages/ShopRegister/ShopRegister";
import HomePage from "./pages/HomePage/HomePage";
import SingleShop from "./pages/SingelShop/SingleShop";
import UserProfile from "./pages/UserProfile/UserProfile";
import ShopEdit from "./pages/ShopEdit/ShopEdit";
import RecipiePage from "./pages/RecipiePage/RecipiePage";
import Cart from "./pages/Cart/Cart";
import { getShops } from "./redux/features/shopSlice";
import { getCakes } from "./redux/features/cakeSlice";
import AdminShop from "./components/Admin/AdminShop/AdminShop";
import "./style.css";
import GetStarted from "./pages/Admin/GetStarted/GetStarted";
import { fetchCart } from "./redux/features/cartSlice";
import CheckOut from "./components/CheckOut/CheckOut";

const App = () => {
  const dispatch = useDispatch();
  const shops = useSelector((state) => state.shops);
  const cakes = useSelector((state) => state.cakes);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    dispatch(getShops());
    dispatch(getCakes());
    user && dispatch(fetchCart(user.result._id));
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage shops={shops} cakes={cakes} />}
          ></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route
            path="/shopregister"
            element={<ShopRegister user={user} />}
          ></Route>
          <Route path="/user/:id" element={<UserProfile user={user} />}></Route>
          <Route path="/shops/:shopId" element={<SingleShop />}></Route>
          <Route path="/shopedit" element={<ShopEdit />}></Route>
          <Route path="/recipe" element={<RecipiePage user={user} />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<CheckOut user={user} />}></Route>
          {/* admin dashboard */}
          <Route
            path={`/admin/user/${user?.result?._id}/shop/:id`}
            element={
              <div className="df">
                <AdminSidebar id={user?.result?.id} className="admin-sidebar" />
                <AdminShop />
              </div>
            }
          ></Route>
          <Route
            path={`/admin/user/:id`}
            element={
              <div className="df">
                <AdminSidebar id={user?.result?.id} className="admin-sidebar" />
                <GetStarted />
              </div>
            }
          ></Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
};

export default App;
