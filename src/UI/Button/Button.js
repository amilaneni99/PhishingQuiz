import React from 'react';

import classes from './Button.css';

const button = (props) => (
    <button
        className={classes.Button}
        style={{backgroundColor:'#000000'}}
        onClick={props.clicked}>{props.children}</button>
);

export default button;