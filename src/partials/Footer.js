import Facebook from "../assets/Socmed/Facebook.svg";
import Instagram from "../assets/Socmed/Instagram.svg";
import Twitter from "../assets/Socmed/Twitter.svg";
import Logo from "../assets/Logo.svg";
import Button from "../components/Button";

const Footer = () => {
  return (
    <footer className="container py-10 bg-gray-100" id="about">
      <div className="flex lg:flex-wrap justify-between items-center sm:py-5 lg:py-7 shadow-2xl rounded-xl sm:px-10 lg:px-16">
        <div className="text-left leading-4">
          <h1 className="sm:text-2xl lg:text-4xl leading-normal font-semibold sm:w-2/3 lg:w-2/3">
            Subscribe Now for Get Special Features!
          </h1>
          <p className="pt-2">Let's subscribe with us and find the fun.</p>
        </div>
        <div>
          <Button className="bg-red-500 text-white rounded-3xl px-10 py-2 lg:ml-4 font-semibold focus:outline-none">
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
        <div className="w-1/6 text-left leading-10">
          <h1 className=" font-bold">Earn Money</h1>
          <ul>
            <li>Affiliate</li>
            <li>Become Partner</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
