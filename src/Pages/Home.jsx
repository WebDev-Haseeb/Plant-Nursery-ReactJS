import Navbar from "../Components/Navbar";
import CategoryItem from "../Components/CategoryItem";
import "../Styling/HomeStyles.css";
import { useNavigate } from "react-router";

export default function Home() {
    const navigate = useNavigate();

  return (
    <div className="root">
      <Navbar />

      <main className="homeContainer">

        <div className="content-wrapper">
          <h1 className="title">Welcome To Nursery Store</h1>
          <p className="subtitle">Bringing Nature&apos;s beauty to your doorstep</p>

          <ul className="categories">
            <CategoryItem logo={"Leaf"} title={"Indoor Plants"} subtitle={"Purify the air and elevate your space with our low-maintenance indoor plants."} />

            <CategoryItem logo={"Sun"} title={"Outdoor Plants"} subtitle={"Transform your garden with our vibrant flowers, shrubs, and trees."} />

            <CategoryItem logo={"Droplets"} title={"Succulents"} subtitle={"Discover the perfect addition to your home decor with our unique succulent collection."} />

          </ul>

          <button onClick={() => navigate("/Products")} className="cta-button">
            Shop Now!
            <span className="button-leaf">🌿</span>
          </button>
        </div>
      </main>
    </div>
  );
}