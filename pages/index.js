import HomeLayout from "../layouts/home";
import Hero from "../components/home/hero";
import Features from "../components/home/features";
import TaxFilling from "../components/home/taxFilling";
import AdminDashboard from "../components/home/admin_dashboard";
import Panel from "../components/home/panel";
import Gst from "../components/home/gst";
import Support from "../components/home/support";

const Home = () => {
    return (
        <>
            <Hero/>
            <Features/>
            <TaxFilling/>
            <Panel/>
            <AdminDashboard/>
            <Support/>
            <Gst/>
        </>
    )
}

Home.layout = HomeLayout
export default Home