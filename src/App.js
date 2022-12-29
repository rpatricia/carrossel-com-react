import './App.css';
import {motion} from "framer-motion"
function App() {
  return (
    <div className="App">
      <motion.h1 animate={{
        x: 200, y: 200
      }}> Renata Pausini</motion.h1>
    </div>
  );
}

export default App;
