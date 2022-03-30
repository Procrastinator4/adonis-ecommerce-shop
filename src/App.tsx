import Collection from "./components/collection/Collection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Products from "./components/products/Products";

const App = () => {
  return (
    <>
      {/* header component  */}
      <Header />
      {/* collections component  */}
      <Collection />
      {/* products component  */}
      <Products />
      {/* footer component  */}
      <Footer />
    </>
  );
};
export default App;
