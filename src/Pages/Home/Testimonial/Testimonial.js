import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'William Felo',
            review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, fuga. Corrupti dolores exercitationem enim officia illum expedita iure perspiciatis temporibus repellat esse labore, numquam quae adipisci laborum earum nulla maxime quis. Vitae, dicta unde? ',
            picture: people1,
            location: " California"

        },
        {
            _id: 2,
            name: 'William Felo',
            review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, fuga. Corrupti dolores exercitationem enim officia illum expedita iure perspiciatis temporibus repellat esse labore, numquam quae adipisci laborum earum nulla maxime quis. Vitae, dicta unde? ',
            picture: people2,
            location: " California"
        },
        {
            _id: 3,
            name: 'William Felo',
            review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, fuga. Corrupti dolores exercitationem enim officia illum expedita iure perspiciatis temporibus repellat esse labore, numquam quae adipisci laborum earum nulla maxime quis. Vitae, dicta unde? ',
            picture: people3,
            location: " California"
        },
    ]
    return (
        <section className=' my-16'>
            <div className=' flex justify-between'>
                <div >
                    <h4 className="text-primary font-bold text-xl">Testimonial</h4>
                    <h2 className=' text-4xl font-bold '>What our patient says </h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        reviewPeople={review}
                    ></Review>)
                }

            </div>
        </section>
    );
};

export default Testimonial;