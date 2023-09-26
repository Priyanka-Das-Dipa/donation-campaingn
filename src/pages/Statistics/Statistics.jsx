import React, { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";

const CustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

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

  const COLORS = ["#FF444A", "#00C49F"];

  return (
    <div>
      <h2 className="text-3xl text-center font-medium text-blue-300">
        This is a Donation Statistics Page:
      </h2>
      <div className="flex justify-center items-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={140}
            fill="#8884d8"
            labelLine={false}
            label={CustomPieLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;