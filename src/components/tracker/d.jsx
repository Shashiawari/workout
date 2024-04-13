import React, { useState } from 'react';

const D = (props) => {
    const [login, setLogin] = useState(false);

    const handleLoginClick = () => {
        setLogin((prevLoginState) => !prevLoginState);
    };

    return (
        <div>
            <div className={`dat mx-2 ${login ? 'active' : ''}`} onClick={handleLoginClick}>
                <p className='w'>{props.week}</p>
                <p className='d'>{props.date}</p>
            </div>
        </div>
    );
};

export default D;
