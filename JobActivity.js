import React, { useState } from "react";
import "../Profile/JobActivity.css";
import JobA1 from "../../assets/images/A1.svg";
import JobA2 from "../../assets/images/A2.svg";
import JobA3 from "../../assets/images/A1.svg";
import { RxCross2 } from "react-icons/rx";
import { PiDotOutlineFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

const JobActivity = () => {
  const [products, setProducts] = useState([
    {
      name: "Tata Nexon EV",
      category: "Vehicle",
      price: "₹10.35 Lakh",
      features: ["Petrol", "Manual"],
      location: "Chennai",
      date: "18th March 2024",
      image: "path/to/auto/image1.jpg",
      isFavorited: false,
    },
   
  ]);

  const [vehicles, setVehicles] = useState([
    {
      name: "Toyota Corolla",
      category: "property",
      owner: "Anushya",
      location: "Chennai",
      date: "24th October 2024",
      image: "path/to/auto/image1.jpg",
      isSold: false,
    },
    
  ]);

  const handleChange = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].isFavorited = !updatedProducts[index].isFavorited;
    setProducts(updatedProducts);
  };

  const handleChanges = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].isFavorited = !updatedProducts[index].isFavorited;
    setVehicles(updatedProducts);
  };

  return (
    <div className="activity">
      <div className="card">
        <div className="d-flex justify-content-between">
          <h6>My Activity</h6>
          <div className="d-flex align-items-center">
            <p style={{ cursor: "pointer" }}>
              <i
                className="fi fi-rr-settings-sliders me-2"
                style={{ color: "#2196F3" }}
              ></i>
              Filter
            </p>
            <p style={{ cursor: "pointer" }} className="mx-3">
              <i
                className="fi fi-rr-calendar me-2"
                style={{ color: "#2196F3" }}
              ></i>
              Date
            </p>
            <p
              style={{
                color: "#2196F3",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              ClearAll
            </p>
          </div>
        </div>
        <div className="tabs-activity mt-3">
          <ul
            className="nav nav-pills justify-content-between mb-3"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <i className="fi fi-sr-eye me-2"></i>Viewed
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <i className="fi fi-sr-phone-call me-2"></i> Contacted
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <i className="fi fi-rs-heart me-2"></i> Saved
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-search-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-search"
                type="button"
                role="tab"
                aria-controls="pills-search"
                aria-selected="false"
              >
                <i className="fi fi-br-search me-2"></i> Recent Search
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <button
                className="h6 mb-0"
                style={{
                  borderBottom: "1px solid black",
                  marginTop: "0.5rem",
                  background: "#f1f1f1b3",
                  border: "none",
                  color: "#8B8B8B",
                  padding: "5px 10px",
                  borderRadius: "6px",
                }}
              >
                Today
              </button>
              <div className="row">
                {products.map((product, index) => (
                  <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <div
                      className="card p-2 mt-3"
                      style={{ borderRadius: "8px" }}
                    >
                      <div className="d-flex">
                        <div className="img" style={{ position: "relative" }}>
                          <img
                            src={JobA1}
                            alt=""
                            style={{
                              width: "125px",
                              height: "125px",
                              borderRadius: "8px",
                            }}
                          />
                          <button
                            onClick={() => handleChange(index)}
                            className="heart"
                            style={{
                              position: "absolute",
                              top: "4px",
                              right: "4px",
                              padding: "0px 5px",
                            }}
                          >
                            {product.isFavorited ? (
                              <i
                                className="fi fi-sr-heart"
                                style={{ color: "red", fontSize: "13px" }}
                              ></i>
                            ) : (
                              <i
                                className="fi fi-rr-heart"
                                style={{ color: "#8B8B8B", fontSize: "13px" }}
                              ></i>
                            )}
                          </button>
                        </div>
                        <div className="card-left w-100 ms-2">
                          <div className="d-flex justify-content-between align-items-start">
                            <div className="d-flex">
                              <p
                                className="cate"
                                style={{
                                  color: "#BBB9B9",
                                  fontWeight: 500,
                                  fontSize: "14px",
                                  // borderRight: "2px solid #E6E6E6",
                                  paddingRight: "6px",
                                }}
                              >
                                Category :
                                <span
                                  className="title ms-1"
                                  style={{
                                    color: "#2824DF",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                  }}
                                >
                                  {product.category}
                                </span>
                              </p>
                              <button className="ms-2 buy">Buy</button>
                            </div>
                            <div className="">
                              {/* <button className=""> */}
                              {/* <i className="fi fi-rr-trash"></i> */}
                              {/* </button> */}
                              {/* <i
                                class="fi fi-sr-cross-small"
                                style={{ color: "#8B8B8B", fontSize: "18px" }}
                              ></i> */}
                              <RxCross2
                                style={{ color: "#8B8B8B", fontSize: "18px" }}
                              />
                            </div>
                          </div>
                          <p
                            style={{
                              color: "#4A4A4A",
                              fontWeight: 700,
                              fontSize: "16px",
                            }}
                          >
                            {product.name}
                          </p>

                          <div class="d-flex">
                            <div class="cate2">
                              <p
                                className=""
                                style={{
                                  color: "#8B8B8B",
                                  fontWeight: 400,
                                  fontSize: "13px",
                                  // borderRight: "2px solid #E6E6E6",
                                  paddingRight: "6px",
                                }}
                              >
                                12,000 Kms
                              </p>
                            </div>
                            <p
                              className="ms-2"
                              style={{
                                color: "#8B8B8B",
                                fontWeight: 400,
                                fontSize: "13px",
                              }}
                            >
                              Electric charging
                            </p>
                          </div>
                          <p
                            style={{
                              fontWeight: 700,
                              fontSize: "14px",
                              color: "#4A4A4A",
                            }}
                            className="mb-1"
                          >
                            {product.price}
                          </p>

                          <div
                            className="d-flex justify-content-between "
                            style={{ borderTop: "1px solid #E6E6E6" }}
                          >
                            <p
                              className="dot mt-1"
                              style={{
                                fontWeight: 400,
                                fontSize: "12px",
                                color: "#8B8B8B",
                              }}
                            >
                              <i
                                className="fi fi-rr-marker"
                                style={{
                                  fontSize: "12px",
                                  color: "#8B8B8B",
                                  marginRight: "4px",
                                }}
                              ></i>
                              {product.location}
                            </p>
                            <p
                              className="dot ms-2 mt-1"
                              style={{
                                fontWeight: 400,
                                fontSize: "12px",
                                color: "#8B8B8B",
                              }}
                            >
                              <i
                                className="fi fi-rr-calendar"
                                style={{
                                  fontSize: "12px",
                                  color: "#8B8B8B",
                                  marginRight: "4px",
                                }}
                              ></i>
                              {product.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <button
                className="h6 mb-0"
                style={{
                  borderBottom: "1px solid black",
                  marginTop: "0.5rem",
                  background: "#f1f1f1b3",
                  border: "none",
                  color: "#8B8B8B",
                  padding: "5px 10px",
                  borderRadius: "6px",
                }}
              >
                Today
              </button>
              <div className="row">
                {vehicles.map((vehicle, index) => (
                  <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <div
                      className="card p-2 mt-3"
                      style={{ borderRadius: "8px" }}
                    >
                      <div className="d-flex">
                        <div className="img" style={{ position: "relative" }}>
                          <img
                            src={JobA2} // Assuming vehicle object has an 'image' property
                            alt={vehicle.name}
                            style={{
                              width: "125px",
                              height: "125px",
                              borderRadius: "8px",
                            }}
                          />
                          <button
                            onClick={() => handleChanges(index)}
                            className="heart"
                            style={{
                              position: "absolute",
                              top: "3px",
                              right: "4px",
                              padding: "0px 5px",
                            }}
                          >
                            <i
                              className={
                                vehicle.isSold
                                  ? "fi fi-sr-heart"
                                  : "fi fi-rr-heart"
                              }
                              style={{
                                color: vehicle.isSold ? "red" : "#8B8B8B",
                                fontSize: "13px",
                              }}
                            ></i>
                          </button>
                        </div>
                        <div className="card-left w-100 ms-2">
                          <div className="d-flex justify-content-between align-items-start">
                            <div className="d-flex">
                              <p
                                className="cate"
                                style={{
                                  color: "#BBB9B9",
                                  fontWeight: 500,
                                  fontSize: "14px",
                                  // borderRight: "2px solid #E6E6E6",
                                  paddingRight: "6px",
                                }}
                              >
                                Category :
                                <span
                                  className="title ms-1"
                                  style={{
                                    color: "#2824DF",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                  }}
                                >
                                  Vehicle
                                </span>
                              </p>
                              <button className="ms-2 buy">Buy</button>
                            </div>
                            <div className="">
                              <RxCross2
                                style={{ color: "#8B8B8B", fontSize: "18px" }}
                              />
                            </div>
                          </div>
                          <p
                            style={{
                              color: "#4A4A4A",
                              fontWeight: 700,
                              fontSize: "16px",
                            }}
                          >
                            {vehicle.name}
                          </p>

                          <div class="d-flex">
                            <div class="">
                              <p
                                className=""
                                style={{
                                  color: "#8B8B8B",
                                  fontWeight: 400,
                                  fontSize: "13px",
                                }}
                              >
                                Owner - {vehicle.owner}
                              </p>
                            </div>
                          </div>

                          {vehicle.isSold ? (
                            <div className="d-flex ">
                              <p>
                                <i
                                  className="fi fi-rr-phone-call me-1"
                                  style={{ color: "#2196F3", fontSize: "12px" }}
                                ></i>
                                <span
                                  style={{ color: "#2196F3", fontSize: "12px" }}
                                >
                                  9001234567
                                </span>
                              </p>

                              <p className="ms-3">
                                <i
                                  className="fi fi-rr-comment-dots me-1"
                                  style={{ color: "#2196F3", fontSize: "12px" }}
                                ></i>
                                <span
                                  style={{ color: "#2196F3", fontSize: "12px" }}
                                >
                                  Message
                                </span>
                              </p>
                            </div>
                          ) : (
                            <button
                              className=""
                              style={{
                                color: "#8B8B8B",
                                backgroundColor: "#E6E6E6",
                                borderRadius: "4px",
                                border: "none",
                                fontSize: "12px",
                                marginBottom: "6px",
                              }}
                            >
                              <i className="fi fi-rs-ban"></i>
                              <span className="ms-1">Rented out</span>
                            </button>
                          )}

                          <div
                            className="d-flex justify-content-between "
                            style={{ borderTop: "1px solid #E6E6E6" }}
                          >
                            <p
                              className="dot mt-1"
                              style={{
                                fontWeight: 400,
                                fontSize: "12px",
                                color: "#8B8B8B",
                              }}
                            >
                              <i
                                className="fi fi-rr-marker"
                                style={{
                                  fontSize: "12px",
                                  color: "#8B8B8B",
                                  marginRight: "4px",
                                }}
                              ></i>
                              {vehicle.location}
                            </p>
                            <p
                              className="dot ms-2 mt-1"
                              style={{
                                fontWeight: 400,
                                fontSize: "12px",
                                color: "#8B8B8B",
                              }}
                            >
                              <i
                                className="fi fi-rr-calendar"
                                style={{
                                  fontSize: "12px",
                                  color: "#8B8B8B",
                                  marginRight: "4px",
                                }}
                              ></i>
                              {vehicle.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="row">
                {products.map((product, index) => (
                  <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <div
                      className="card p-2 mt-3"
                      style={{ borderRadius: "8px" }}
                    >
                      <div className="d-flex">
                        <div className="img" style={{ position: "relative" }}>
                          <img
                            src={JobA3}
                            alt=""
                            style={{
                              width: "125px",
                              height: "125px",
                              borderRadius: "8px",
                            }}
                          />
                          <button
                            onClick={() => handleChange(index)}
                            className="heart"
                            style={{
                              position: "absolute",
                              top: "3px",
                              right: "4px",
                              padding: "0px 5px",
                            }}
                          >
                            {product.isFavorited ? (
                              <i
                                className="fi fi-sr-heart"
                                style={{ color: "red", fontSize: "13px" }}
                              ></i>
                            ) : (
                              <i
                                className="fi fi-rr-heart"
                                style={{ color: "#8B8B8B", fontSize: "13px" }}
                              ></i>
                            )}
                          </button>
                        </div>
                        <div className="card-left w-100 ms-2">
                          <div className="d-flex justify-content-between align-items-start">
                            <div className="d-flex">
                              <p
                                className="cate"
                                style={{
                                  color: "#BBB9B9",
                                  fontWeight: 500,
                                  fontSize: "14px",
                                  // borderRight: "2px solid #E6E6E6",
                                  paddingRight: "6px",
                                }}
                              >
                                Category :
                                <span
                                  className="title ms-1"
                                  style={{
                                    color: "#2824DF",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                  }}
                                >
                                  {product.category}
                                </span>
                              </p>
                              <button className="ms-2 buy">Buy</button>
                            </div>
                            <div className="">
                              {/* <button className=""> */}
                              {/* <i className="fi fi-rr-trash"></i> */}
                              {/* </button> */}
                              {/* <i
                                class="fi fi-sr-cross-small"
                                style={{ color: "#8B8B8B", fontSize: "18px" }}
                              ></i> */}
                              <RxCross2
                                style={{ color: "#8B8B8B", fontSize: "18px" }}
                              />
                            </div>
                          </div>
                          <p
                            style={{
                              color: "#4A4A4A",
                              fontWeight: 700,
                              fontSize: "16px",
                            }}
                          >
                            {product.name}
                          </p>

                          <div class="d-flex">
                            <div class="">
                              <p
                                className=""
                                style={{
                                  color: "#8B8B8B",
                                  fontWeight: 400,
                                  fontSize: "13px",
                                  borderRight: "2px solid #E6E6E6",
                                  paddingRight: "6px",
                                }}
                              >
                                12,000 Kms
                              </p>
                            </div>
                            <p
                              className="ms-2"
                              style={{
                                color: "#8B8B8B",
                                fontWeight: 400,
                                fontSize: "13px",
                              }}
                            >
                              Electric charging
                            </p>
                          </div>
                          <p
                            style={{
                              fontWeight: 700,
                              fontSize: "14px",
                              color: "#4A4A4A",
                            }}
                            className="mb-1"
                          >
                            {product.price}
                          </p>

                          <div
                            className="d-flex justify-content-between "
                            style={{ borderTop: "1px solid #E6E6E6" }}
                          >
                            <p
                              className="dot mt-1"
                              style={{
                                fontWeight: 400,
                                fontSize: "12px",
                                color: "#8B8B8B",
                              }}
                            >
                              <i
                                className="fi fi-rr-marker"
                                style={{
                                  fontSize: "12px",
                                  color: "#8B8B8B",
                                  marginRight: "4px",
                                }}
                              ></i>
                              {product.location}
                            </p>
                            <p
                              className="dot ms-2 mt-1"
                              style={{
                                fontWeight: 400,
                                fontSize: "12px",
                                color: "#8B8B8B",
                              }}
                            >
                              <i
                                className="fi fi-rr-calendar"
                                style={{
                                  fontSize: "12px",
                                  color: "#8B8B8B",
                                  marginRight: "4px",
                                }}
                              ></i>
                              {product.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-search"
              role="tabpanel"
              aria-labelledby="pills-search-tab"
            >
              {/* Recent search content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobActivity;
