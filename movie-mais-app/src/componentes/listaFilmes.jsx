import React from 'react';

const ListaFilmes = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt="movie"></img>
                </div>
            ))}

        </>
    );
};

export default ListaFilmes;