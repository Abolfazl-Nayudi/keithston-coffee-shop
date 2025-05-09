import AboutUs from "@/components/about-us";
import ExploreMore from "@/components/explore-more";
import FirstOrderOff from "@/components/first-order-off";
import Header from "@/components/header";
import TopProducts from "@/components/top-products";

export default async function Home() {
  return (
    <>
      <Header />
      <TopProducts />
      <div className="my-30"></div>
      <FirstOrderOff />
      <div className="my-30"></div>
      <ExploreMore />
      <div className="my-30"></div>
      <AboutUs />
    </>
  );
}
