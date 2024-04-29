import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Attributes from "./components/Attributes";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Payment from "./components/Payment";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

export default function Layout() {
    return (
        <main>
            <Navigation />
            <Hero />
            <Attributes />
            <Services />
            <AboutUs />
            <ContactUs />
            <Payment />
            <Footer />
            <Outlet />
        </main>
    )
};