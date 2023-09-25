import { useState } from 'react';
import './App.css';
import imagemDeFundo from './img/imagemDeFundo.jpg';
import ListaFilmes from './componentes/listaFilmes';

function App() {
  const [movies, setMovies] = useState([

  {
      "Title": "50 First Dates",
      "Year": "2004",
      "imdbID": "tt0343660",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwMzc4MDgxNF5BMl5BanBnXkFtZTYwNjUwMzE3._V1_SX300.jpg"
  },
  {
      "Title": "When Harry Met Sally...",
      "Year": "1989",
      "imdbID": "tt0098635",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@._V1_SX300.jpg"
  },
  {
    "Title": "Love Actually",
    "Year": "2003",
    "imdbID": "tt0314331",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNThkNjgxNGQtOTIxMy00ZTFmLWIwMDItYzE5YzM3ZDMzNDE3XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_SX300.jpg"
  },
  {
    "Title": "500 Days of Summer",
    "Year": "2009",
    "imdbID": "tt1022603",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk5MjM4OTU1OV5BMl5BanBnXkFtZTcwODkzNDIzMw@@._V1_SX300.jpg"
  },
  {
    "Title": "Crazy, Stupid, Love.",
    "Year": "2011",
    "imdbID": "tt1570728",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Pride and Prejudice",
    "Year": "1995",
    "imdbID": "tt0112130",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Crazy Rich Asians",
    "Year": "2018",
    "imdbID": "tt3104988",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_SX300.jpg"
  },
  {
    "Title": "Titanic",
    "Year": "1997",
    "imdbID": "tt0120338",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
  },
  {
    "Title": "Dirty Dancing",
    "Year": "1987",
    "imdbID": "tt0092890",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc3MDY3ODQ2OV5BMl5BanBnXkFtZTgwOTQ2NTYxMTE@._V1_SX300.jpg"
  },
  {
    "Title": "Notting Hill",
    "Year": "1999",
    "imdbID": "tt0125439",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTE5OTkwYzYtNDhlNC00MzljLTk1YTktY2IxZjliZmNjMjUzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  
]);
  const [comedy, setComedy] = useState([
    {
      "Title": "Notting Hill: 21st Century Carnival",
      "Year": "2013",
      "imdbID": "tt4523706",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2Q4YTBjOTktODZmOC00YmRmLTg4ZTItYTFmNDMwZTMwY2MzXkEyXkFqcGdeQXVyMjMwNDE3MTM@._V1_SX300.jpg"
  },
  ]);

  // const solicitarFilme = async() => {
  //   const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=79bf9410';

  //   const response = await fetch(url);
  //   const responseJson = response.json();

  //   console.log(responseJson)
  // }

  return  (
    <>
      <body style={{
        backgroundImage: `url(${imagemDeFundo})`

      }}>
        
        <div className='caixa-cabeçalho'></div>
        
        
       <div className='lista-de-filmes'>
          <div className='poster'>
            <div>
              <ListaFilmes movies = {movies} categoria="romance"/> 
              <ListaFilmes movies = {moviesComedy} categoria="comedia"/> 
            </div>

          <p>Ano{movies.year}</p>
          </div>
        

       </div>
      
        
      </body>
    </>
  )
}

export default App
