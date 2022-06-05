import React from "react";
import maggiosmarketplace from "../images/maggios-marketplace.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Maggio's Marketplace
  const openPopupboxMaggiosMarketplace = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={maggiosmarketplace}
          alt="Maggio's Marketplace"
        />
        <p>
          I know what you're thinking, "NFTs are overhyped and cryptocurrencies are a scam".
          But I have a love of learning and I believe that smart contract functionality
          is an important step forward in both the technological and financial spaces.
          So I wanted to create an app that can communicate with the blockchain using
          Solidity that also has a beautiful frontend using Next.js and Tailwind CSS.
          This app is still in development.
        </p>
        <b>GitHub:</b>{"https://github.com/Tyler0342/sc-marketplace"}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://sc-marketplace.vercel.app/")
          }
        >
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigMaggiosMarketplace = {
    titleBar: {
      enable: true,
      text: "Front-End web design and Solidity smart contract project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Portfolio Projects",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxMaggiosMarketplace}>
            <img
              className="portfolio-image"
              src={maggiosmarketplace}
              alt="Maggio's Marketplace"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxTaskManager}
          >
        </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigMaggiosMarketplace} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  );
};

export default Portfolio;
