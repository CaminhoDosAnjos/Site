import CarouselApp from "./sections/carousel";
import Newsletter from "./sections/newsletter";
import Products from "./sections/products";
import Services from "./sections/services";
import Videos from "./sections/videos";

export default function Home() {
  return (
    <div>
      <CarouselApp />
      <Services />
      <Videos />
      <Products />
      <Newsletter />
    </div>
  );
}
