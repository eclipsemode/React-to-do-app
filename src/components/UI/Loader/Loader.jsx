import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {
    return (
        <div className={classes.loader}>
            <div className={classes.loader__circle}>
            </div>
            <h2 className={classes.loader__text}>Loading...</h2>
        </div>
    );
};

export default Loader;