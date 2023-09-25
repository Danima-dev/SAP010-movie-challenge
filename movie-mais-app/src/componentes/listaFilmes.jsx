import React from 'react';

const ListaFilmes = (props) => {
    return (
        <>
            {props.movies.map((movie) => (
                <div className='romance'>
                    <img src={movie.Poster} alt="movie"></img>
                </div>
            ))}

            {props.comedy.map((comedys) => (
                <div className='comedy'>
                    <img src={comedys.Poster} alt="movie" />
                </div>
            ))}

        </>
    );
};

export default ListaFilmes;