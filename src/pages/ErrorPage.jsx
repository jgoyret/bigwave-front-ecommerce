import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="container flex-column d-flex justify-content-center align-items-center">
        <img
          className="img-fluid"
          src="https://static.vecteezy.com/system/resources/previews/004/435/751/original/404-error-page-with-black-cat-illustrations-not-found-system-updates-uploading-operation-computing-installation-programs-vector.jpg"
        />
        <Link to="/" className="btn btn-primary mt-4">
          Back home
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
