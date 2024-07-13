import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
      {loggedUser && (
        <div className="container thanks-container">
          {/* <Confetti width={window.innerWidth} height={window.innerHeight} /> */}
          <div className="row d-flex flex-column">
            <div className="gracias">
              <h3>Thank you for your purchase, {loggedUser.firstname}</h3>
              <p>Your order number is: #{order.id}</p>
            </div>
            <div className="col ">
              <div className="styledDiv">
                <div className="order-info">
                  <div class="card">
                    {/* <button class="dismiss" type="button"></button> */}
                    <div class="header">
                      <div class="div_image_v">
                        <div class="image">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M20 7L9.00004 18L3.99994 13"
                                stroke="#fff"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>{" "}
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div class="content">
                        <span class="title">Order confirmed</span>
                        <p class="message">
                          Your package will be delivered within 15-60 minutes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col text-center">
            <p>
              Go back to{" "}
              <Link to={"/products"} className="text-dark fw-bold">
                continue shopping
              </Link>{" "}
              or to your{" "}
              <Link to={"/my-profile"} className="text-dark fw-bold">
                profile
              </Link>
              .
            </p>
            {/* <p>In the meantime you can Dance with Rick!!</p>
            <p>Order confirmations can take up to 30 minutes.</p> */}
            <p className="">
              Contact us at <strong>customerservice@bigwave.com</strong> if you
              experience
              <br></br>
              problems or have questions about your purchase.
            </p>
            {/* <div>
                <iframe
                  src="https://i.pinimg.com/originals/88/82/bc/8882bcf327896ab79fb97e85ae63a002.gif"
                  className="rickAstley shadow-lg "
                  width="500"
                  height="367"
                  style={{ border: "none" }}
                  title="Rick Astley Singing"
                ></iframe>
              </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default OrderGreetings;
