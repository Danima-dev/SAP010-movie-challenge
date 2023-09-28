import React from 'react';

const CaixaPesquisa = (props) => {
    return (
        <div className='input'>
            <input className='input-texto'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='pesquisa seu filme'></input>
        </div>
    )
}

export default CaixaPesquisa