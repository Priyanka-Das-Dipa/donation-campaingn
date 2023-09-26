import React, { useEffect, useState } from "react";
import { Cell, Label, Legend, Pie, PieChart } from "recharts";

const Statistics = () => {
  const [donations, setDonations] = useState([]);
  const [myDonation, setMyDonation] = useState([]);

  useEffect(() => {
    fetch("/donation.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  useEffect(() => {
    const myDonations = localStorage.getItem("itemDonation");
    console.log(myDonations);
    if (myDonations) {
      const donations = JSON.parse(myDonations);
      setMyDonation(donations);
    }
  }, []);
  console.log(myDonation);
  const data = [
    {
      name: "Total Donation",
      value: donations.length,
    },
    {
      name: "My Donations",
      value: myDonation.length,
    },
  ];
  const COLORS = ["#FF5733", "#3498db"];
  return (
    <div>
      <h2 className="text-3xl text-center font-medium text-blue-300">
        This is a Donation Statistics Page:
      </h2>
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={140}
            fill="#8884d8"
            labelLine={false} 
            label={({ name, percent }) => `${(percent * 100)}%`}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            {/* {data.map((entry, index) => (
              <Label key={index} value={data.value} offset={0} position="inside" />
            ))} */}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
