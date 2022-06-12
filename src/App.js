import ProductItems from "./components/ProductItems";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg-white">
        {/* Page Title */}
        <h1 className="text-center font-GildaDisplay text-dark-teal text-7xl pt-4 pb-16 lg:text-8xl lg:pb-36 lg:pt-8">
          OFFERS
        </h1>

        {/* Product List */}
        <div className="bg-light-gray">
          <ProductItems />
        </div>
      </div>
    </div>
  );
}

export default App;
