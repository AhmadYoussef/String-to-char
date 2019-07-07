import React from 'react';
import Char from './Char';
import './Characters.scss';

const deleteChar = (index , value, updateState)=>{
    value.splice(index,1);
    value = value.join('');
    updateState(value);
}
const CharList = (props)=>{
    let data = props.CharacterList.split('');
    return(
        <div className="charList">
            {data.map(
                (item,index) => 
                    <Char key={index} click={()=>{deleteChar(index, data, props.update)}} character={item} /> 
            )}
        </div>
    );
}

export default CharList;