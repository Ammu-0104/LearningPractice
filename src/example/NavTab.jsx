import React, { useState } from "react";
import "./Nav.css"; // Import your CSS file

const ButtonContent = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="main">
      <div className="tabs-container">
        <button
          className={activeButton === "button1" ? "active-button" : ""}
          onClick={() => handleButtonClick("button1")}
        >
          Red
        </button>
        <button
          className={activeButton === "button2" ? "active-button" : ""}
          onClick={() => handleButtonClick("button2")}
        >
          Blue
        </button>
        <button
          className={activeButton === "button3" ? "active-button" : ""}
          onClick={() => handleButtonClick("button3")}
        >
          Green
        </button>
        <div className={`active-tab ${activeButton}`}></div>
      </div>

      {activeButton === "button1" && (
        <div className="btn1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perferendis vitae cumque odio exercitationem iusto, accusamus, impedit aspernatur esse voluptatem iste. Saepe minima architecto pariatur, necessitatibus totam deserunt delectus nam!
        </div>
      )}
      {activeButton === "button2" && (
        <div className="btn2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sed corrupti, ipsam animi obcaecati delectus pariatur illo accusantium a ipsa commodi qui harum voluptas ab fuga ad quisquam dignissimos praesentium.
        </div>
      )}
      {activeButton === "button3" && (
        <div className="btn3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit blanditiis dignissimos reprehenderit qui, perferendis voluptatem voluptatum sed earum atque quae saepe sint molestias soluta fugit eum debitis quasi illum rerum!
        </div>
      )}
    </div>
  );
};

export default ButtonContent;
