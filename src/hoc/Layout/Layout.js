import React, { useState } from 'react';
import {connect} from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

const layout = props => {
    const [sideDrawerOn, setSideDrawerOn] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerOn(false);
    };

    const sideDrawerToggleHandler = () => {
        setSideDrawerOn(!sideDrawerOn);
    };

    
        return (
            <Aux>
                <Toolbar 
                isAuth={props.isAuthenticated}
                toggle= {sideDrawerToggleHandler} />
                <Sidedrawer 
                    isAuth={props.isAuthenticated}
                    open={sideDrawerOn}
                    closed={sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Aux>
        );
    
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(layout);