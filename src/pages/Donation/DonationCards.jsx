import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  // const [pinkclr, setPinkclr] = useState()
  return (
    <div>
      {
        <Link to={`/donationCards/${id}`}>
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
