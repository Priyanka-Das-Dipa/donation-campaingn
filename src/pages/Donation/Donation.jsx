import React from 'react';
import DonationCards from './DonationCards';


const Donation = ({donationCards}) => {
    console.log(donationCards)
    return (
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {
                donationCards.map(donationCard => <DonationCards key={donationCard.id} donationCard={donationCard}></DonationCards>)
            }
        </div>
    );
};

export default Donation;