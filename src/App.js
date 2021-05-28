import "./App.css";
import Hero from "./assets/hero.svg";
import location from "./assets/Icon/location.svg";
import Server from "./assets/Icon/Server.svg";
import user from "./assets/Icon/user.svg";
import Header from "./partials/Header";
import Button from "./components/Button";
import Footer from "./partials/Footer";
import Pricing from "./partials/Pricing";
import Testimonials from "./partials/Testimonials";
import Network from "./partials/Network";
import Feature from "./partials/Feature";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="bg-white">
          <div className="container">
            <div className=" flex items-center h-96 py-80">
              <div className="text-left sm:w-full md:w-full lg:w-1/2">
                <h1 className="text-5xl leading-tight font-semibold">
                  Want anything to be easy with
                  <span className="font-bold"> LaslesVPN.</span>
                </h1>
                <p className="my-10 text-gray-800">
                  Provide a network for all your needs with ease and fun using
                  <span className="font-bold"> LaslesVPN</span> discover
                  interesting features from us.
                </p>
                <Button className="bg-red-500 py-4 px-16 text-white rounded-xl font-bold shadow-xl focus:outline-none">
                  Get started
                </Button>
              </div>
              <div className=" xl:w-1/2">
                <img src={Hero} alt="Hero" />
              </div>
            </div>

            <div className="flex shadow-2xl justify-center items-center my-10 py-5 sm:py-3 rounded-lg">
              <div className="lg:flex lg:flex-row sm:flex-col items-center border-r-2 w-1/3 justify-center py-10">
                <img src={user} alt="location" className="mx-auto lg:mx-3" />
                <div className="flex items-start justify-center lg:flex-col sm:flex-row sm:pt-2">
                  <h1 className="font-bold text-left sm:mr-2">90+</h1>
                  <h1>Users</h1>
                </div>
              </div>
              <div className="lg:flex lg:flex-row sm:flex-col sm:items-center border-r-2 w-1/3 justify-center py-10">
                <img
                  src={location}
                  alt="location"
                  className="mx-auto lg:mx-3"
                />
                <div className="flex items-start justify-center lg:flex-col sm:flex-row sm:pt-2">
                  <h1 className="font-bold text-left sm:mr-2">30+</h1>
                  <h1>Locations</h1>
                </div>
              </div>
              <div className="lg:flex lg:flex-row sm:flex-col sm:items-center w-1/3 justify-center py-10">
                <img src={Server} alt="location" className="mx-auto lg:mx-3" />
                <div className="flex items-start justify-center lg:flex-col sm:flex-row sm:pt-2">
                  <h1 className="font-bold text-left sm:mr-2">50+</h1>
                  <h1>Servers</h1>
                </div>
              </div>
            </div>
            <Feature />
          </div>
        </section>
        <Pricing />
        <Network />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
