import React from "react";

function Footer() {
  return (
    <>
      <footer className="mt-5 bg-dark text-white">
        <div className="d-flex align-items-center position-relative">
          <div className="position-absolute" id="curva-footer"></div>
        </div>
        <div className="d-flex text-center mt-5 justify-content-around div-curva">
          <div>
            <h5>About</h5>
            <ul className="list-group">
              <li className="li-footer">aaaaaaaa</li>
              <li className="li-footer">aaaaaaa</li>
              <li className="li-footer">sssssssss</li>
              <li className="li-footer">sssssss</li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul className="list-group">
              <li className="li-footer">ssss</li>
              <li className="li-footer">ssss</li>
              <li className="li-footer">sssss</li>
              <li className="li-footer">ssssss</li>
            </ul>
          </div>
          <div>
            <h5>SUBSCRIBE TO OUR MAILING LIST</h5>
            <form className="">
              <input className="form-control"></input>
              <button className="btn btn-primary">Sign Up</button>
            </form>
          </div>
        </div>
        <hr />
        <div className="d-flex container border justify-content-between">
          <div>
            <span className="text-white">Returns</span>
            <span className="ms-3">Privacy Policy</span>
            <span className="ms-3">Terms and Conditions</span>
          </div>
          <div>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook ms-3"></i>
            <i className="bi bi-tiktok ms-3"></i>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
