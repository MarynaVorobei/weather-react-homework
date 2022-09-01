import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <h1 className="mt-5 mb-5">Weather App</h1>
      <Search />
      <Footer />
    </div>
  );
}
