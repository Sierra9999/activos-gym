import React from "react";
import PricingCard from "../Components/PricingCard";

const Pricing = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-center my-10">
        Revitalize with monthly fitness 🔥 conquer your goals today!
      </h1>
      <section
        className="
        flex
        justify-center
        flex-wrap
        align-center
        my-10"
      >
        <PricingCard price={0} title="Week Trial"></PricingCard>
        <PricingCard price={20} title="Welcome Pack"></PricingCard>
        <PricingCard price={50} title="Dance Classes"></PricingCard>
      </section>
      <section id="join" className="flex justify-between mt-20 pt-20">
        <iframe
        className="border-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.853815552904!2d-75.59155302562341!3d6.28294009370596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44293106e0ad23%3A0x4919eeb0f4f2fdd2!2sActivos%20Gym!5e0!3m2!1sen!2sco!4v1709748751133!5m2!1sen!2sco"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <section className="m-12">
        <h1 className="text-4xl mb-10">Don&apos;t hesitate <br /> to join us!</h1>
        <p>
          <a href="mailto:purchases@activosfitness.com">purchases@activosfitness.com</a></p>
        <p>

        </p>
        </section>

      </section>
    </div>
  );
};

export default Pricing;
