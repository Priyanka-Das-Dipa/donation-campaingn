import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const DonationCards = ({ donationCard }) => {
  const {
    id,
    image,
    title,
    category_name,
    description,
    price,
    card_background_color,
    text_color,
    category_bg_color,
  } = donationCard || {};

  const handleAddToDonation = () => {
    const addToDonation = [];
    const donationItem = JSON.parse(localStorage.getItem("itemDonation"));
    if (!donationItem) {
      addToDonation.push(donationCard);
      localStorage.setItem("itemDonation", JSON.stringify(addToDonation));
      swal("Good job!", "Your Donation Added!", "success");
    } else {
      const isExits = donationItem.find((donation) => donation.id === id);
      if (!isExits) {
        addToDonation.push(...donationItem, donationCard);
        localStorage.setItem("itemDonation", JSON.stringify(addToDonation));
        swal("Good job!", "Your Donation Added!", "success");
      } else {
        swal("Error!", "You can't add duplicate!", "error");
      }
    }
  };

  return (
    <div>
      {
        <Link to={`/donationCards/${id}`} onClick={handleAddToDonation}>
          <div
            className="card w-96 shadow-xl"
            style={{ backgroundColor: card_background_color }}
          >
            <figure>
              <img className="w-full h-full" src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div
                className="badge px-5 py-4"
                style={{
                  color: text_color,
                  backgroundColor: category_bg_color,
                }}
              >
                {category_name}
              </div>

              <h2 className="card-title" style={{ color: text_color }}>
                {title}
              </h2>
            </div>
          </div>
        </Link>
      }
    </div>
  );
};

export default DonationCards;
