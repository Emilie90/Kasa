import Banner from "../components/Banner";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <div className="Home">
      <div className="Banner_box">
        <Banner />
      </div>
      <Cards />
    </div>
  );
}
