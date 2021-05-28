import Testimonial from "../components/Testimonial";
import avatar1 from "../assets/avatar1.svg";
import avatar2 from "../assets/avatar2.svg";
import avatar3 from "../assets/avatar3.svg";


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h1 className="text-4xl leading-normal tracking-wider font-semibold lg:w-1/3 mx-auto text-center">
        Trusted by Thousands of Happy Customer
      </h1>
      <p className="mt-10 mx-auto w-2/3 lg:w-1/3 text-center">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>
      <div className="container grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
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
  );
};

export default Testimonials;
