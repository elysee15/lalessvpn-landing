import Plan from "../components/Plan";

const Pricing = () => {
  return (
    <section className="container py-16 text-center" id="features">
      <h1 className="text-4xl tracking-wider font-semibold">
        Choose Your Plan
      </h1>
      <p className="my-8 text-gray-600 w-1/2 mx-auto py-5">
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>

      <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2">
        <Plan
          title="Free plan"
          options={[
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "Encrypted Connection",
            "No Traffic Logs",
            "Works on All Devices",
          ]}
        />
        <Plan
          title="Free plan"
          price={9}
          options={[
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "Encrypted Connection",
            "No Traffic Logs",
            "Works on All Devices",
            "Connect Anyware",
          ]}
        />
        <Plan
          title="Standard plan"
          price={12}
          options={[
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "No Traffic Logs",
            "Works on All Devices",
            "Connect Anyware",
            "Get New Features",
          ]}
        />
      </div>
    </section>
  );
};

export default Pricing;
