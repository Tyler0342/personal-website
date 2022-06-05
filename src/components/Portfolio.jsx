import React from "react";
import marketplace from "../images/maggios-marketplace.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Maggio's Marketplace
  const openPopupboxMarketplace = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={marketplace}
          alt="Maggio's Marketplace"
        />
        <p className={{fontSize: '8px'}}>
          I know what you're thinking, "NFTs are overhyped and cryptocurrencies are a scam".
          But I have a love of learning and I believe that smart contract functionality
          is an important step forward in both the technological and financial spaces.
          This app is still in development.
        </p>
        <b>GitHub:</b>{" Link to repository: "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Tyler0342/sc-marketplace")
          }
        >
         here
        </a>

        <b> Vercel:</b>{" Link to app still in development: "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://sc-marketplace.vercel.app/")
          }
        >
         here
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigMarketplace = {
    titleBar: {
      enable: true,
      text: "Front-End web design and Solidity smart contract project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxMarketplace}>
            <img
              className="portfolio-image"
              src={marketplace}
              alt="Maggio's Marketplace"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigMarketplace} />
    </div>
  );
};

export default Portfolio;
