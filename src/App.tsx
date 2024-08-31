import "./App.css";
import axios from "axios";

function App() {
  const reset = () => {
    axios.post("https://qr-backend-sage.vercel.app/reset");
  };
  return (
    <div style={{ fontSize: "50px", textAlign: "center" }}>
      <button onClick={reset}>Reset ALL</button>
    </div>
  );
}

export default App;
