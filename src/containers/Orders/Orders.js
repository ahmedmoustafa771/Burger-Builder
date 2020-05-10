import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

import Order from '../../components/order/Order';

class Orders extends Component {

    componentDidMount () {
        this.props.onFetchingOrders(this.props.token, this.props.userId);
    }

    render () {
        let orderState = <Spinner />;
        if (!this.props.loading) {
            orderState = (
                this.props.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price} />
                ))
            );
        }
        return (
            <div>
                {orderState}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.order.loading,
        orders: state.order.orders,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchingOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders, axios));