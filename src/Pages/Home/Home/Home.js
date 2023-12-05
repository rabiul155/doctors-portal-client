import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppoint from '../MakeAppoint/MakeAppoint';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className=' mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppoint></MakeAppoint>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;