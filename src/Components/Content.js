import React from 'react';
import './Content.scss'


const Content = (props) =>{
    return(
        <div className="content" >
            <p>{props.charList}</p>
            {props.charList.length > 3 ? <p>the text is good</p> : <p>the text is to <span className='red'> short</span></p>}
            <p>the total of the char is {props.charList.length}</p>
        </div>
    );
}
export default Content;