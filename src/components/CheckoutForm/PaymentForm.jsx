import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';


import Review from './Review';

const PaymentForm = ({ checkoutToken }) => {
    return (
        <>
            <Review checkoutToken={checkoutToken} />
        </>
    )
}

export default PaymentForm;
