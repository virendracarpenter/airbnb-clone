import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data/data";

function App() {
  const cardElement = data.map((cards) => <Card key={cards.id} {...cards} />);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="App-card">{cardElement}</section>
    </div>
  );
}

export default App;
