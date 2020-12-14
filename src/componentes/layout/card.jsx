import React from 'react';

import './card.css';


export default (props) => {
    const estilo = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'

    }
    return (
        <div className='Card' style={estilo}>
            <div className='Title'  > <button className='btn' id='btn'>Reiniciar</button> </div>
            <div className='user'>
                <div className='user_x'>
                    <label for='check_x'>Começar com </label><input type='button' id='check_x' name='escolha' checked value='x'></input></div>
                <div className='user_circle' >
                    <label for='check_circle'>Começar com </label><input type='button' id='check_circle' name='escolha' value='0'></input></div>
                
            </div>
            
            
            <div className='Content'>
                
                {props.children}
            </div>
        </div>
    )
}

