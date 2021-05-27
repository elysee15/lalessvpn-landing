import "./App.css";
import Logo from "./assets/Logo.svg";
import Hero from "./assets/hero.svg";
import styled from "styled-components";
import location from "./assets/Icon/location.svg";
import Server from "./assets/Icon/Server.svg";
import user from "./assets/Icon/user.svg";
import feature from "./assets/feature.svg";
import check from "./assets/checkbox.svg";
import checked from "./assets/checked.svg";
import standard from "./assets/Illustration/Standard.svg";
import hugeGlobal from "./assets/HugeGlobal.svg";
import ReactSlider from "./components/Slider";
import Testimonial from "./components/Testimonial";
import avatar1 from "./assets/avatar1.svg";
import avatar2 from "./assets/avatar2.svg";
import avatar3 from "./assets/avatar3.svg";
import Facebook from "./assets/Socmed/Facebook.svg";
import Instagram from "./assets/Socmed/Instagram.svg";
import Twitter from "./assets/Socmed/Twitter.svg";

const Button = styled.button`
  box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.4),
    0 4px 6px -2px rgba(239, 68, 68, 0.4);
  outline: none;
`;

function App() {
  return (
    <div className="App">
      <nav className="bg-white">
        <div className="container flex justify-between items-center pt-4">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <ul className="list-none flex border-red-600 border-solid">
            <li>
              <a href="/#" className=" text-gray-800">
                About
              </a>
            </li>
            <li>
              <a href="/#" className="px-4 text-gray-800">
                Features
              </a>
            </li>
            <li>
              <a href="/#" className="px-4 text-gray-800">
                Pricing
              </a>
            </li>
            <li>
              <a href="/#" className="px-4 text-gray-800">
                Testimonial
              </a>
            </li>
            <li>
              <a href="/#" className="text-gray-800">
                Help
              </a>
            </li>
          </ul>
          <div className="flex">
            <button className="focus:outline-none">Sign in</button>
            <button className="border-red-600 border rounded-3xl px-10 py-2 ml-4 font-semibold text-red-500 focus:outline-none">
              Sign up
            </button>
          </div>
        </div>
      </nav>
      <main className="">
        <section className="bg-white">
          <div className="container">
            <div className=" flex items-center h-96 py-72">
              <div className="text-left w-1/2">
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
              <div className="w-1/2">
                <img src={Hero} alt="Hero" />
              </div>
            </div>

            <div className=" flex shadow-2xl items-center my-10 py-5">
              <div className="flex border-r-2 w-1/3 justify-center py-10">
                <img src={user} alt="location" className="mr-5" />
                <div className="flex items-start justify-center flex-col">
                  <h1 className="font-bold text-left">90+</h1>
                  <h1>Users</h1>
                </div>
              </div>
              <div className="flex border-r-2 w-1/3 justify-center py-10">
                <img src={location} alt="location" className="mr-5" />
                <div className="flex items-start justify-center flex-col">
                  <h1 className="font-bold text-left">30+</h1>
                  <h1>Locations</h1>
                </div>
              </div>
              <div className="flex w-1/3 justify-center py-10">
                <img src={Server} alt="location" className="mr-5" />
                <div className="flex items-start justify-center flex-col">
                  <h1 className="font-bold text-left">50+</h1>
                  <h1>Servers</h1>
                </div>
              </div>
            </div>

            <div className=" flex items-center text-left lg:py-20">
              <div className="w-1/2">
                <img src={feature} alt="feature" />
              </div>
              <div className="w-1/2 ">
                <h1 className="text-2xl font-bold">
                  We Provide Many Features You Can Use
                </h1>
                <p className="py-5 text-gray-700">
                  You can explore the features that we provide with fun and have
                  their own functions each feature.
                </p>
                <ul className="">
                  <li className="flex items-center pb-4 text-gray-700">
                    <img src={check} alt="checkbox" />
                    <span className="pl-2 text-sm">
                      Powerfull online protection.
                    </span>
                  </li>
                  <li className="flex items-center pb-4 text-gray-700">
                    <img src={check} alt="checkbox" />
                    <span className="pl-2 text-sm">
                      Internet without borders.
                    </span>
                  </li>
                  <li className="flex items-center pb-4 text-gray-700">
                    <img src={check} alt="checkbox" />{" "}
                    <span className="pl-2 text-sm">Supercharged VPN</span>
                  </li>
                  <li className="flex items-center pb-4 text-gray-700">
                    <img src={check} alt="checkbox" />
                    <span className="pl-2 text-sm">
                      No specific time limits.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* features section */}
        </section>

        <section className="container py-16">
          <h1 className="text-4xl tracking-wider font-semibold">
            Choose Your Plan
          </h1>
          <p className="my-8 block text-gray-600 w-1/2 mx-auto">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>

          <div className="flex justify-around">
            <div className="flex flex-col p-16 items-center border-2 rounded-xl border-gray-300">
              <div>
                <img src={standard} alt="checked" />
              </div>
              <h1 className="py-6 text-lg font-bold">Free plan</h1>
              <ul>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> Unlimited Bandwitch
                </li>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> Encrypted Connection
                </li>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> No Traffic Logs
                </li>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> Works on All Devices
                </li>
              </ul>
              <div className="mt-auto">
                <h2 className="font-bold text-2xl pt-10">Free</h2>
                <button className="border-red-600 border-2 rounded-3xl px-16 mt-5 py-2 ml-4 font-semibold text-red-500 focus:outline-none">
                  Select
                </button>
              </div>
            </div>
            <div className="flex flex-col p-16 items-center border-2 rounded-xl border-gray-300">
              <div>
                <img src={standard} alt="checked" />
              </div>
              <h1 className="py-6 text-lg font-bold">Standard plan</h1>
              <ul>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> Unlimited Bandwitch
                </li>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> Encrypted Connection
                </li>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> No Traffic Logs
                </li>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> Works on All Devices
                </li>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> Connect Anyware
                </li>
              </ul>
              <div className="mt-auto">
                <h2 className="text-2xl pt-10 text-gray-600">
                  <span className="font-bold text-black"> $9 </span> / mo
                </h2>
                <button className="border-red-600 border-2 rounded-3xl px-16 mt-5 py-2 ml-4 font-semibold text-red-500 focus:outline-none">
                  Select
                </button>
              </div>
            </div>
            <div className="flex flex-col p-16 items-center border-2 rounded-xl border-red-500">
              <div>
                <img src={standard} alt="checked" />
              </div>
              <h1 className="py-6 text-lg font-bold">Premium plan</h1>
              <ul>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> Unlimited Bandwitch
                </li>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> Encrypted Connection
                </li>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> No Traffic Logs
                </li>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> Works on All Devices
                </li>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> Connect Anyware
                </li>
                <li className="flex py-2 text-sm items-center">
                  <img src={checked} alt="checked"></img> Get New Features
                </li>
              </ul>
              <div className="mt-auto">
                <h2 className="text-2xl pt-10 text-gray-600">
                  <span className="font-bold text-black"> $12</span> / mo
                </h2>
                <Button className="border-red-500 bg-red-500 text-white border-2 mt-5 rounded-3xl px-16 py-2 ml-4 font-semibold shadow-2xl focus:outline-none">
                  Select
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <h1 className="text-4xl leading-normal tracking-wider font-semibold w-1/2 mx-auto">
            Huge Global Network of Fast VPN
          </h1>
          <p className="mt-10">
            See <span>LaslesVPN</span> everywhere to make it easier for you when
            you move locations.
          </p>
          <div className="h-screen my-auto flex  justify-center items-center">
            <img src={hugeGlobal} alt="Tagged Map" />
          </div>
          <ReactSlider />
        </section>
        <section>
          <h1 className="text-4xl leading-normal tracking-wider font-semibold w-1/3 mx-auto">
            Trusted by Thousands of Happy Customer
          </h1>
          <p className="mt-10 mx-auto w-1/3">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
          <div className="container grid gap-10 grid-cols-3 py-10">
            <Testimonial
              avatar={avatar1}
              rate={4.5}
              author="Viezh Robert"
              location="Warsaw, Poland"
              message="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
            />

            <Testimonial
              avatar={avatar2}
              rate={4.5}
              author="Yessica Christy"
              location="Shanxi, China"
              message="“I like it because I like to travel far and still can connect with high speed.”."
            />

            <Testimonial
              avatar={avatar3}
              rate={4.5}
              author="Kim Young Jou"
              location="Seoul, South Korea"
              message="“This is very unusual for my business that currently requires a virtual private network that has high security.”."
            />
          </div>
        </section>
      </main>
      <footer className="container py-10 bg-gray-100">
        <div className="flex justify-between items-center py-7 shadow-2xl rounded-xl px-16">
          <div className="text-left leading-4">
            <h1 className="text-4xl leading-normal font-semibold w-2/3">
              Subscribe Now for Get Special Features!
            </h1>
            <p className="pt-2">Let's subscribe with us and find the fun.</p>
          </div>
          <div>
            <Button className="bg-red-500 text-white rounded-3xl px-10 py-2 ml-4 font-semibold focus:outline-none">
              Subscribe Now
            </Button>
          </div>
        </div>

        <div className="flex pt-10">
          <div className="w-3/6 text-left">
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            <p className="py-5 text-gray-600 w-80">
              <span className="font-bold">LaslesVPN</span> is a private virtual
              network that has unique features and has high security.
            </p>
            <div className="flex">
              <div>
                <img src={Facebook} alt="Facebook" />
              </div>
              <div>
                <img src={Twitter} alt="Twitter" />
              </div>
              <div>
                <img src={Instagram} alt="Instragram" />
              </div>
            </div>
            <p className="text-gray-300">
              &copy;2020Lasles<span>VPN</span>
            </p>
          </div>
          <div className="w-1/6 text-left leading-10	">
            <h1 className=" font-bold">Product</h1>
            <ul>
              <li>Download</li>
              <li>Pricing</li>
              <li>Locations</li>
              <li>Server</li>
              <li>Countries</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="w-1/6 text-left leading-10">
            <h1 className=" font-bold">Engage</h1>
            <ul>
              <li>LaslesVPN ?</li>
              <li>FAQ</li>
              <li>Tutorials</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="w-1/6 text-left leading-10	">
            <h1 className=" font-bold">Earn Money</h1>
            <ul>
              <li>Affiliate</li>
              <li>Become Partner</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
