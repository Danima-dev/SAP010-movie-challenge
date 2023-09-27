import  { useState, useEffect } from 'react';
import './App.css';
import imagemDeFundo from './img/imagemDeFundo.jpg';
import ListaFilmes from './componentes/ListaFilmes';
import ListaHeader  from './componentes/listaheader';
import CaixaPesquisa from './componentes/caixapesquisa';

function App() {
  const [movies, setMovies] = useState([

  
  
]);

  const [searchValue, setSearchValue] = useState('');

  const solicitarFilme = async() => {
    const url = 'http://www.omdbapi.com/?s=avengers&apikey=79bf9410';

    const response = await fetch(url);
    const responseJson = response.json();
    // setMovies(responseJson.Search);

    console.log(responseJson)
  };

  

  useEffect(() => {
    solicitarFilme();
  }, []);

  return  (
    <>
      <body >
        
        <div className='caixa-cabeçalho'></div>
        
        
       <div className='lista-de-filmes'>
        
          <ListaHeader header = 'Movies'/>
          <CaixaPesquisa />
        
          <div className='poster'>
            <div>
              <ListaFilmes movies = {movies} /> 
            </div>
          </div>
        

       </div>
       
        
      </body>
    </>
  )
}

export default App
