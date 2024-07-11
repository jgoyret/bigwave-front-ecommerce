import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBarApp from "../components/NavBarApp";
import Confetti from "react-confetti";
import "../styles/OrderGreetings.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function OrderGreetings() {
  const [loggedUser, setLoggedUser] = useState();
  const token = useSelector((state) => state.user.token);
  const [order, setOrder] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios({
          url: `${import.meta.env.VITE_API_URL}/users/my-profile`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setLoggedUser(response.data);
        console.log(loggedUser);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    if (!location.state || !location.state.order) {
      console.log("No state or order found");
      navigate("/");
    } else {
      console.log("State and order found");
      setOrder(location.state.order);
    }
  }, [location, navigate]);

  if (!order) {
    return null;
  }

  return (
    <>
      <NavBarApp />
      {loggedUser && (
        <div className="container">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <div className="container styledDiv">
            <div className="order-info">
              <h1>Thank you for your purchase, {loggedUser.firstname}</h1>
              <p>Order number: {order.id}</p>
            </div>
            <div>
              <iframe
                src="https://i.pinimg.com/originals/88/82/bc/8882bcf327896ab79fb97e85ae63a002.gif"
                className="rickAstley"
                width="500"
                height="400"
                style={{ border: "none" }}
                title="Rick Astley Singing"
              ></iframe>
            </div>
            <p>
              Wait until we confirm your Order on your{" "}
              <Link to={"/my-profile"}> profile </Link> or continue{" "}
              <Link to={"/"}> shopping</Link>.
            </p>
            <p> In the meantime you can Dance with Rick!!</p>
            <div>
              <p className="parrafito">
                Order confirmations can take up to 30 minutes.
              </p>
              <p>
                If you experience any problem or have any questions, please
                contact us at customerservice@bigwave.com
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderGreetings;
