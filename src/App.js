import ProductsList from "./components/ProductsList";
import ScrollToTop from "react-scroll-to-top";
import { ArrowSmUpIcon } from "@heroicons/react/outline";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Scroll to top component */}
      <ScrollToTop
        smooth
        component={
          <ArrowSmUpIcon className="text-dark-teal dark:text-white dark:bg-dark-teal" />
        }
      />
      <div className="bg-white dark:bg-dark-teal transition-all">
        {/* Page Title */}
        <h1 className="text-center font-GildaDisplay text-dark-teal text-7xl pt-40 pb-16 dark:text-white lg:text-7xl lg:pb-36 lg:pt-40">
          PRODUCTS
        </h1>

        {/* Product List */}
        <div className="bg-light-gray dark:bg-dark-teal">
          <ProductsList />
        </div>
      </div>
    </div>
  );
}

export default App;
