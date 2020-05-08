import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

import Order from '../../components/order/Order';

class Orders extends Component {

    componentDidMount () {
        this.props.onFetchingOrders();
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
        orders: state.order.orders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchingOrders: () => dispatch(actions.fetchOrders())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders, axios));