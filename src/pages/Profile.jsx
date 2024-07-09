import NavBarApp from "../components/NavBarApp";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const token = useSelector((state) => state.user.token);
  const [loggedUser, setLoggedUser] = useState();

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
      <NavBarApp />
      <div className="mt-5">
        <h3>
          My profile <span></span>
        </h3>

        {loggedUser && (
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <h4>Personal information</h4>
                <p>
                  <strong>Name:</strong> {loggedUser.firstname}
                </p>
                <p>
                  <strong>Lastname:</strong> {loggedUser.lastname}
                </p>
                <p>
                  <strong>Email:</strong> {loggedUser.email}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
