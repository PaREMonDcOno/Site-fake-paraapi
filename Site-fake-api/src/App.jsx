import {useState,useEffect} from "react"
import './App.css'


function App() {
  const [Cursos, setCursos] = useState([]);
  const url_cursos = "https://my-json-server.typicode.com/PaREMonDcOno/fake-api/cursos";
  const carregarCursos = async () => {
    try {
      const resposta = await fetch(url_cursos);
      const dados = await resposta.json();
      setCursos(dados);
      console.log("oi função");
    }catch (error) {
      console.error("Erro ao carregar os dados dos cursos:", error);
    }
  }

  useEffect(() => {
    carregarCursos();
  },[]);
  return (
      <div className="container">
        <h1>Lista de Cursos</h1>
        {Cursos.map((curso)=>(
          <div className="card">
            <h2>{curso.nome}</h2>
            <p><strong>{curso.id}</strong></p>
            <p>carga horaria: {curso["carga-horaria"]} h</p>
            
            <div className="disciplinas">
              {curso.disciplinas.map((dis) => (
                <span className="disciplinas">{dis} </span>
              ))}

            </div>
          </div>
        ))}
      </div>
  )
}
export default App;