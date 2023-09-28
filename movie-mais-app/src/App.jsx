import { useState, useEffect } from 'react';
import './App.css';
import ListaFilmes from './componentes/ListaFilmes';
import ListaHeader from './componentes/listaheader';
import CaixaPesquisa from './componentes/caixapesquisa';

function App() {
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  const solicitarFilme = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=79bf9410`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }

  };

  useEffect(() => {
    solicitarFilme(searchValue);
  }, [searchValue]);

  return (
    <>
      <body >

        <div className='caixa-cabeçalho'>
          <ListaHeader header='+Movie' />
          <CaixaPesquisa searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>


        <div className='lista-de-filmes'>



          <div className='poster'>
            <div className='caixa-imagem'>
              <ListaFilmes movies={movies} />
            </div>
          </div>


        </div>


      </body>
    </>
  )
}

export default App
