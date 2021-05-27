import netflix from "../assets/netflix.svg";
import reddit from "../assets/reddit.svg";
import spotify from "../assets/spotify.svg";
import discord from "../assets/discord.svg";
import Slider from "react-slick";
import './Slider.css'

const ReactSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    speed: 2000,
  };

  return (
    <Slider {...settings}>
      <div className="flex items-center justify-center">
        <img src={netflix} alt="netflix" />
      </div>
      <div className="flex items-center justify-center">
        <img src={reddit} alt="reddit" />
      </div>
      <div className="flex items-center justify-center">
        <img src={discord} alt="discord" />
      </div>
      <div className="flex items-center justify-center">
        <img src={spotify} alt="spotify" />
      </div>
      <div className="flex items-center justify-center">
        <img src={spotify} alt="spotify" />
      </div>
      <div className="flex items-center justify-center">
        <img src={netflix} alt="netflix" />
      </div>
      <div className="flex items-center justify-center">
        <img src={reddit} alt="reddit" />
      </div>
      <div className="flex items-center justify-center">
        <img src={discord} alt="discord" />
      </div>
      <div className="flex items-center justify-center">
        <img src={spotify} alt="spotify" />
      </div>
      <div className="flex items-center justify-center">
        <img src={spotify} alt="spotify" />
      </div>
      <div className="flex items-center justify-center">
        <img src={spotify} alt="spotify" />
      </div>
      <div className="flex items-center justify-center">
        <img src={spotify} alt="spotify" />
      </div>
      <div className="flex items-center justify-center">
        <img src={netflix} alt="netflix" />
      </div>
      <div className="flex items-center justify-center">
        <img src={reddit} alt="reddit" />
      </div>
      <div className="flex items-center justify-center">
        <img src={discord} alt="discord" />
      </div>
      <div className="flex items-center justify-center">
        <img src={spotify} alt="spotify" />
      </div>
      <div className="flex items-center justify-center">
        <img src={spotify} alt="spotify" />
      </div>
      <div className="flex items-center justify-center">
        <img src={spotify} alt="spotify" />
      </div>
      <div className="flex items-center justify-center">
        <img src={spotify} alt="spotify" />
      </div>
      <div className="flex items-center justify-center">
        <img src={netflix} alt="netflix" />
      </div>
      <div className="flex items-center justify-center">
        <img src={reddit} alt="reddit" />
      </div>
      <div className="flex items-center justify-center">
        <img src={discord} alt="discord" />
      </div>
      <div className="flex items-center justify-center">
        <img src={spotify} alt="spotify" />
      </div>
      <div className="flex items-center justify-center">
        <img src={spotify} alt="spotify" />
      </div>
    </Slider>
  );
};

export default ReactSlider;
