import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

const DonationCard = ({ donation }) => {
  const { id, image, title, description, price, text_color } = donation || {};
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [donationsClicked, setDonationsClicked] = useState([]);

  const handleDonationClick = () => {
    if (!isButtonClicked) {
      swal("Good job!", "Your Donation Added!", "success");
      setIsButtonClicked(true);
      setDonationsClicked([...donationsClicked, id]);
    } else {
      const isExists = donationsClicked.includes(id);
      if (!isExists) {
        swal("Good job!", "Your Donation Added!", "success");
        setDonationsClicked([...donationsClicked, id]);
      } else {
        swal("Error!", "You've already donated to this category!", "error");
      }
    }
  };

  return (
    <div>
      <div class="relative flex max-w-screen-xl flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            className="w-full relative"
            src={image}
            alt="ui/ux review check"
          />
          <div
            className="-mt-12 w-full -p-10 absolute bg-[#0B0B0B80]"
            style={{ background: "rgba(11, 11, 11, 0.50)" }}
          >
            <NavLink to="/statistics">
              <button
                className="btn text-white ml-5"
                style={{ backgroundColor: text_color }}
                onClick={handleDonationClick}
              >
                Donation ${price}
              </button>
            </NavLink>
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
   </div> 
  );
};

export default DonationCard;
