import Cards from "./components/Cards";
import "./App.css";
import Timer from "./components/Timer";
import { useRef, useState } from "react";
import Ranking from "./components/Ranking";

import { supabase } from "./helpers/supabaseClient";

function App() {
  const [start, setStart] = useState(false);
  const [save, setSave] = useState(false);
  const [nombre, setNombre] = useState("");
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);
  const score = useRef(0);

  const handleSave = async () => {
    if (nombre !== "") {
      const error = await supabase
        .from("ranking")
        .insert({ nombre: nombre, puntos: score.current });
      //console.log(name);
      error.status === 409 ? setError(true) : location.reload();
      console.log(error);
      setWarning(false);
    } else {
      setWarning(true);
    }
  };

  return (
    <div className="App">
      <h1>Juego de Memoria</h1>
      <Timer start={start} setStart={setStart} setSave={setSave} />
      <div className="buttons">
        {!start && !save ? (
          <button onClick={() => setStart(true)}>Iniciar</button>
        ) : (
          <button onClick={() => location.reload()}>Reiniciar</button>
        )}
        {save && (
          <>
            <input
              type="text"
              onChange={(e) => setNombre(e.target.value)}
              className={`${warning ? "warning" : ""}`}
            />
            <button onClick={handleSave}>Guardar</button>
          </>
        )}
        {error && <p className="error">El nombre ya existe</p>}
      </div>
      <div className="ranking">
        <Ranking />
      </div>
      <Cards start={start} score={score} />
    </div>
  );
}

export default App;
