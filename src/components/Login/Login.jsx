import React from "react";

const Login = ({ setShowLogin }) => {
  const handleClose = () => {
    setShowLogin(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Login</h2>
        {/* Your login form JSX here */}
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;


