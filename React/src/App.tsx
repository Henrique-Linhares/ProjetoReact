import "./App.css";
import { FoodData } from "../src/interface/FoodData";
import { Card } from "../src/components/card/card";

function App() {
  const data: FoodData[] = [];

  return (
    <div className="container">
      <h1>Cardapio</h1>
      <div className="card-grid">
        {data.map((foodData) => (
          <Card
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
