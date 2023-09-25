import React, { useEffect, useState } from 'react';

const Donations = () => {
   
    const [donationRoute, setDonationRoute] = useState([])
    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem("itemDonation"));
        setDonationRoute(donationItem)
    },[])
    console.log(donationRoute)
    return (
        <div>
            there is donation cards
        </div>
    );
};

export default Donations;