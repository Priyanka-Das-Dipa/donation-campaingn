import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard";


const DonationDescription = () => {
  const [donation, setDonation] = useState({});
  const { id } = useParams();
  const donationDescriptionCard = useLoaderData();
  useEffect(() => {
    const findDonationCard = donationDescriptionCard?.find(
      (donation) => donation.id == id
    );
    setDonation(findDonationCard);
  }, [id, donationDescriptionCard]);

  return (
    <div>
    <DonationCard donation={donation}></DonationCard>
  </div>
  )
 
};

export default DonationDescription;
