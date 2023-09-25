import React from 'react';

const ListaFilmes = (props) => {
    return (
        <>
            {props.movies.map((movie) => (
                <div className='romance'>
                    <img src={movie.Poster} alt="movie"></img>
                </div>
            ))}

        </>
    );
};

export default ListaFilmes;