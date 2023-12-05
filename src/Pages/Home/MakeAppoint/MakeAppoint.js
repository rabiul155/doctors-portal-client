import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppoint = () => {
    return (
        <section className=' mt-32'
            style={{
                background: `url(${appointment})`
            }}>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className="lg:w-1/2 -mt-32 hidden md:block rounded-lg shadow-2xl" />
                    <div className=' text-white'>
                        <h1 className="text-xl font-bold text-primary">Appointment</h1>
                        <h1 className="text-4xl font-bold">Make an Appointment Tody </h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione similique doloribus pariatur veniam quam labore obcaecati reprehenderit reiciendis facilis asperiores nulla veritatis totam quod, perferendis harum repellendus rem nobis?</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoint;