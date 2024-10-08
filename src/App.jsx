import { useContador } from "./hooks/useContador"

function App() {

  const contador1 = useContador(0);
  const contador2 = useContador(10);

  return (
    <div className="container my-3">
      <h1>Custom Hooks</h1>

      <div className="my-4">

        <h2>Contador 01</h2>

        <h4>{contador1.contador}</h4>
        <button className="btn btn-danger" onClick={contador1.disminuir}>-</button>
        <button className="btn btn-success ms-2" onClick={contador1.aumentar}>+</button>
      </div>

      <div className="my-4">

        <h2>Contador 02</h2>

        <h4>{contador2.contador}</h4>
        <button className="btn btn-danger" onClick={contador2.disminuir}>-</button>
        <button className="btn btn-success ms-2" onClick={contador2.aumentar}>+</button>
      </div>

    </div>
  )
}

export default App