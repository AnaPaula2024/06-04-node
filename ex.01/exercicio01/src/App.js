import React from "react";

const Bemvindo = (props ) => {
  return(
    <div>
      <h1>Bem-vindo(a) {props.nome}!</h1>
      <h3>Você tem {props.idade} anos</h3>
      <hr />
    </div>
  )
}


function App() {
  return (
    <div>
     Olá mundo!
     <h2> Curso de React</h2>

     <Bemvindo nome="Rodolfo" idade="38"/>
     <Bemvindo nome="Ana" idade="19" />
     <Bemvindo nome="Tatiane" idade="75"/>
     <Bemvindo nome="Joquebede" idade="61"/>
    </div>
  );
}

export default App;
