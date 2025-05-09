import Button from "./button";

const AboutUs = () => {
  return (
    <section className="bg-[url(../public/about-us-banner.png)] bg-no-repeat bg-cover w-full h-110 flex justify-center items-center">
      <div className="flex flex-col gap-6">
        <h2 className="text-5xl text-ui-primary font-sansita-swashed text-center">
          About us
        </h2>
        <p className="text-[#B9B9B9] font-inter text-2xl text-center max-w-lg">
          Our story is baked into every loaf. Discover our commitment to quality
          and the art of bread making.
        </p>
        <Button text="Read More" className="px-5 self-center" />
      </div>
    </section>
  );
};

export default AboutUs;
