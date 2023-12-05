import React from 'react';
import fluorite from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import tratment from '../../../assets/images/treatment.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluorite Treatment',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, architecto!',
            icon: fluorite
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, architecto!',
            icon: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, architecto!',
            icon: whitening
        }
    ]
    return (
        <div className=' mt-16'>
            <div className=' text-center m-6'>
                <h3 className=' text-primary font-bold uppercase text-xl'>Our services </h3>
                <h2 className=' text-3xl font-bold'>Service we provide </h2>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className=' mt-8'>
                <div className="hero  bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={tratment} className="sm:max-w-md rounded-lg shadow-2xl" alt='' />
                        <div className=' mx-8'>
                            <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care On Your Terms</h1>
                            <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veniam labore impedit tempore, sunt consectetur mollitia eos porro, eum quos, atque officiis reiciendis cum dolores? Adipisci reprehenderit ea, iste unde esse nemo harum eius exercitationem, tenetur quos enim similique. Tempore quod dignissimos voluptates </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Services;