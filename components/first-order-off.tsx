import Button from "./button";

const FirstOrderOff = () => {
  return (
    <section className="bg-[url(../public/off-banner.png)] bg-no-repeat bg-cover w-full h-110 flex justify-center items-center">
      <div className="flex flex-col gap-6">
        <h2 className="text-5xl text-ui-brown font-sansita-swashed text-center">
          20% Off Your <br /> First Order
        </h2>
        <p className="text-ui-gray font-inter text-2xl text-center max-w-lg">
          Taste the tradition. Explore our delicious range of baked breads
        </p>
        <Button text="Learn More" className="px-5 self-center" />
      </div>
    </section>
  );
};

export default FirstOrderOff;
