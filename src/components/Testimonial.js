import PropTypes from 'prop-types';
import star from "../assets/star.svg";

const Testimonial = ({ avatar, author, location, message, rate }) => {
  return (
    <div className="rounded-lg border-2 p-6 hover:border-red-500 transition delay-150 duration-300 ease-in-out cursor-pointer min-h-full">
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <div>
            <img src={avatar} alt="avatar 1" />
          </div>
          <div className="text-left ml-4">
            <h3 className="font-bold text-lg">{author}</h3>
            <h6 className="text-sm text-gray-600">{location}</h6>
          </div>
        </div>
        <div className="flex items-center">
          <span>{rate}</span>
          <img src={star} alt="star" className="ml-2" />
        </div>
      </div>
      <div className="">
        <p className="text-left">{message}</p>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired
}

export default Testimonial;
