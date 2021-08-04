import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { usePaystackPayment } from 'react-paystack';


import Review from './Review';

const config = {
    reference: (new Date()).getTime().toString(),
    email: "ammanxabua@gmail.com",
    amount: 2000000,
    publicKey: 'pk_test_687a8ebd710403b4c2f5383c6c027d896bd074dc',
  };

  const onSuccess = (reference) => {
      console.log(reference)
  };

  const onClose = () => {
      console.log('closed')
  }

  
  const PayStackHook = () => {
      const initializePayment = usePaystackPayment(config);
      return (
          <div onClick={() => {
              initializePayment(onSuccess, onClose);
          }}>
              <button>HOoks Implementation</button>
          </div>
      )
  };


const PaymentForm = ({ checkoutToken }) => {

    
    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>Payment Method</Typography>
            <PayStackHook />
        </>
    )
}

export default PaymentForm;
