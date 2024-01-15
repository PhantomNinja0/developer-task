import WineList from "./components/WineList";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["nothing", "niks", "vokkol", "nada", "null"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertV, setAlertV] = useState(false);

  return (
    <div>
      <WineList items={items} heading="Wines" onSelectItem={handleSelectItem} />
      {alertV && <Alert onClose={() => setAlertV(false)}>Hello</Alert>}
      <Button onClick={() => setAlertV(true)} color="secondary">
        My Button
      </Button>
    </div>
  );
}

export default App;
