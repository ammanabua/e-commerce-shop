import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { PaystackConsumer, usePaystackConsumer } from 'react-paystack';


import Review from './Review';



  
 


const PaymentForm = ({ checkoutToken }) => {

    console.log(checkoutToken)
    const config = {
        reference: (new Date()).getTime().toString(),
        name: "Amman Jordan",
        email: "ammanxabua@gmail.com",
        amount: checkoutToken.live.total.raw,
        publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY
      };
    
      const handleSuccess = (reference) => {
          console.log(reference)
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
