import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { PaystackConsumer, usePaystackConsumer } from 'react-paystack';


import Review from './Review';



  
 


const PaymentForm = ({ shippingData, checkoutToken, nextStep, backstep, onCaptureCheckout }) => {

    console.log(checkoutToken)
    console.log(shippingData)


    const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
            firstname: shippingData.firstName,
            lastname: shippingData.lastname,
            email: shippingData.email
        },
        shipping: { 
            name: 'Primary', 
            street: shippingData.address1, 
            town_city: shippingData.city,
            state: shippingData.shippingSubdivision,
            postal_zip_code: shippingData.zip,
            country: shippingData.shippingCountry
        },

        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
            gateway: 'paystack',
        }
    
    }
    
    

    const config = {
        reference: (new Date()).getTime().toString(),
        name: orderData.customer.firstName + " " + orderData.customer.lastName,
        email: "ammanabua@gmail.com",
        amount: checkoutToken.live.total.raw * 100,
        publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY
    };
    
    const handleSuccess = (reference) => {
        console.log(reference);
        onCaptureCheckout(checkoutToken.id, orderData);
        nextStep()
    };
    
    const handleClose = () => {
        console.log('closed')
    }
      
    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handleSuccess(reference),
        onClose: handleClose
    };
    
    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>Payment Method</Typography>
            <PaystackConsumer {...componentProps} >
                {({ initializePayment }) => <Button variant="contained" onClick={() => initializePayment(handleSuccess, handleClose)}>Pay {checkoutToken.live.subtotal.formatted_with_symbol}</Button>}
            </PaystackConsumer>
        </>
    )
}

export default PaymentForm;
