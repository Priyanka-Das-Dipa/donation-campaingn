import React, { useEffect, useState } from "react";
import DonationRouteCard from "./DonationRouteCard";
import { NavLink } from "react-router-dom";

const Donations = () => {
  const [donationRoute, setDonationRoute] = useState([]);
  const [noData, setNodata] = useState("");
  const [isShow, setIsShow] = useState(false);
  // const [totalDonation, setTotalDonation] = useState(0)

  useEffect(() => {
    const donationItem = JSON.parse(localStorage.getItem("itemDonation"));

    if (donationItem) {
      setDonationRoute(donationItem);
      // const total = donationItem.reduce((preValue, currentItem)=> preValue + currentItem.price,0)
      // setTotalDonation(total)
    } else {
      setNodata("NO DATA FOUND");
    }
  }, []);
  console.log(donationRoute);

  return (
    <div>
      {noData ? (
        <p className="text-3xl font-semibold flex justify-center items-center h-[70vh]">
          {noData}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
            {isShow
              ? donationRoute.map((donation) => (
                  <DonationRouteCard
                    key={donation.id}
                    donation={donation}
                  ></DonationRouteCard>
                ))
              : donationRoute
                  .slice(0, 4)
                  .map((donation) => (
                    <DonationRouteCard
                      key={donation.id}
                      donation={donation}
                    ></DonationRouteCard>
                  ))}
          </div>
          {donationRoute.length > 4 && (
              <button
                onClick={() => setIsShow(!isShow)}
                className="btn btn-success block mx-auto"
              >
                {isShow ? "Show Less" : "Show More"}
              </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donations;
