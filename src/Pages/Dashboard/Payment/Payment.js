import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const data = useLoaderData();
    const { treatment, price, bookingDate, slot } = data;

    return (
        <div>
            <h2 className='text-bold text-xl'>Payment for treatment {treatment}</h2>
            <p> Please pay {price} for your appointment on {bookingDate} at {slot}</p>
            <div className=' w-96 my-16'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={data}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;