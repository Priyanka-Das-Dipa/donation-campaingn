import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Donations from "../components/Donationes/Donations";
import DonationDescription from "../pages/Donation/DonationDescription";

const myCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/donation.json')
            },
            {
                path: "/donationCards/:id",
                element: <DonationDescription></DonationDescription>,
                loader: () => fetch('/donation.json')
            },
            {
                path: "statistics",
                element: <Statistics></Statistics>
            },
        ]
    }
])


export default myCreatedRouter;