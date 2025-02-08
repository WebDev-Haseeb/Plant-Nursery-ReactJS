import "../Styling/ProductsStyles.css"
import Navbar from "../Components/Navbar"
import Product from "../Components/Product";

export default function Products() {
  return (
    <div>
      <Navbar />

      <div className="productsContainer">
        <Product source={"src/Assets/rose.svg"} title={"Rose Flower"} description={"This is a beautiful, timeless flower symbolizing love and romance, commonly found in gardens across Pakistan"} price={25} />

        <Product source={"src/Assets/jasmine.svg"} title={"Jasmine Flower"} description={"This fragrant, star-shaped flower is native to the Himalayan region and is widely cultivated in Pakistan."} price={20}/>

        <Product source={"src/Assets/sun-flower.svg"} title={"Sun Flower"} description={"This bright and cheerful flower is native to North America but is widely cultivated in Pakistan."} price={30}/>

        <Product source={"src/Assets/lotus.svg"} title={"Lotus Flower"} description={"This sacred, aquatic flower is native to tropical Asia and is widely cultivated in Pakistan for its beautiful, symbolic blooms"} price={28}/>

        <Product source={"src/Assets/lily.svg"} title={"Lily Flower"} description={"This elegant, trumpet-shaped flower is native to the Northern Hemisphere and is widely cultivated in Pakistan."} price={22}/>
      </div>
    </div>
  )
}