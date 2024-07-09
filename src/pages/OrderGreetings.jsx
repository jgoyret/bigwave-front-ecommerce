import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function OrderGreetings() {
  const [loggedUser, setLoggedUser] = useState();
  const token = useSelector((state) => state.user.token);

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
        console.log(response.data);
        setLoggedUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <div>
        <h1>Thanks for your purchase</h1>
        <p>
          Order number: {loggedUser?.Orders[loggedUser.Orders.length - 1].id}{" "}
        </p>
      </div>
      <div>
        <iframe
          src="https://i.pinimg.com/originals/88/82/bc/8882bcf327896ab79fb97e85ae63a002.gif"
          width="600"
          height="400"
          style={{ border: "none" }}
          title="Rick Astley Singing"
        ></iframe>
      </div>
    </>
  );
}

export default OrderGreetings;
