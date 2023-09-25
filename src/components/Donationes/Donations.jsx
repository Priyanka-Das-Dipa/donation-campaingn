import React, { useEffect, useState } from 'react';
import DonationRouteCard from './DonationRouteCard';

const Donations = () => {
   
    const [donationRoute, setDonationRoute] = useState([])
    const [noData, setNodata] = useState("")
    const [isShow, setIsShow]= useState(false)

    useEffect(()=>{

        const donationItem = JSON.parse(localStorage.getItem("itemDonation"))

        if(donationItem){
            setDonationRoute(donationItem)
        }
        else{
            setNodata("NO DATA FOUND")
        }


    },[])
    console.log(donationRoute)

    return <div>
       
            {
                noData ? <p className='text-3xl font-semibold flex justify-center items-center h-[70vh]'>{noData}</p> : <div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 py-10'>
                        {
                            isShow ? donationRoute.map((donation) =>( <DonationRouteCard key={donation.id} donation={donation}></DonationRouteCard>)) :
                            donationRoute.slice(0,4).map((donation) =>( <DonationRouteCard key={donation.id} donation={donation}></DonationRouteCard>)) 
                        }
                    </div>
                    <button onClick={() => setIsShow(!isShow)} className='btn btn-success block mx-auto'>
                        {isShow ? "Show Less" : "Show More"}
                    </button>

                </div>
            }
        </div>
};

export default Donations;