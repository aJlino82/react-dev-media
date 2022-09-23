import './App.css';

function App() {
  return (
    <div className="container">
      <header>React JS</header>

      <main>
        <section className="box-titulo">
          <h1>React JS</h1>
          <p>JavaScipt para SPAs</p>
          <a href='https://reactjs.org/' target="_blank" rel="noreferrer" >Site Oficial</a>
        </section>

        <section className="box-requsitos">
          <h2>Requisitos</h2>
          <p>Requisitos mínimos para usar React</p>


          <div className="box-cards">
            <div className="card">
              <h3>HTML</h3>
              <p>Apredender a estuturar as elementos da página com HTML</p>
            </div>
            <div className="card">
              <h3>CSS</h3>
              <p>Aprender a estilizar os elementos da página com CSS</p>
            </div>
            <div className="card">
              <h3>JavaScript</h3>
              <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p className="autor">Curso de introdução de React JS</p>
      </footer>
    </div>
  );
}

export default App;
