import Navbar from "./Navbar" 
import Card from "./Card"
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <Card
        {...item}
        />
    )
  })
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
