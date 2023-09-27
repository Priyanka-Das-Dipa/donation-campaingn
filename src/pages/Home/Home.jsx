import React from 'react';
import Banner from '../../components/Header/Banner/Banner';
import Donations from '../../components/Donationes/Donations';
import { useLoaderData } from 'react-router-dom';
import Donation from '../Donation/Donation';

const Home = ({filteredData}) => {
    const donationCards = useLoaderData()
    console.log(donationCards)
    


    return (
        <div>
           <Banner></Banner>
           <Donation donationCards={donationCards}></Donation>
           <div>
            {
               
                
            }
           </div>
        </div>
    );
};

export default Home;