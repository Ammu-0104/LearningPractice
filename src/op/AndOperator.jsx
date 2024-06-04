import React, { useState } from "react";

const AndOperator = () => {
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [address, setAddress] = useState("");

  const handleUser = (e) => {
    e.preventDefault();
    setuserName(e.target.value);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setemail(e.target.value);
  };
  const handleAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-12 col-md-4 mb-2">
        <input
          onChange={handleUser}
          type="username"
          name="username"
          value={userName}
        />
      </div>
      <div className="col-12 col-md-4 mb-2">
        <input 
        onChange={handleEmail} 
        type="email" 
        name="email" 
        value={email} />
      </div>
      <div className="col-12 col-md-4 mb-2">
        <input
          onChange={handleAddress}
          type="address"
          name="address"
          value={address}
        />
      </div>

      {(userName || email || address) && (
        <div>
          <p>my name is:{userName}</p>
          <p>and my email is:{email}</p>
          <p>and my address is:{address}</p>
        </div>
      )}
    </div>
  );
};
export default AndOperator;
