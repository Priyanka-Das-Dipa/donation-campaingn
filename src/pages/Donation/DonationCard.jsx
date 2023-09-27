import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

const DonationCard = ({ donation }) => {
  const { id, image, title, description, price, text_color } = donation || {};
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleDonationClick = () => {
    if (!isButtonClicked) {
      swal("Good job!", "Your Donation Added!", "success");
      setIsButtonClicked(true);
    }
  };

  return (
    <div>
      <div class="relative flex max-w-screen-xl flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img className="w-full" src={image} alt="ui/ux review check" />
          <div className="-mt-12 ml-10">
            <NavLink to="/statistics">
              <button
                className="btn text-white"
                style={{ backgroundColor: text_color }}
                onClick={handleDonationClick}
                disabled={isButtonClicked}
              >
                Donation ${price}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div class="pt-6 mb-10">
        <h4 class="font-bold block font-sans text-black text-2xl leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h4>
        <p class="mt-3 text-base block font-sans font-normal leading-relaxed text-gray-700 antialiased">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DonationCard;
