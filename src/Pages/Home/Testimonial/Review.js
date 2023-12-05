import React from 'react';

const Review = ({ reviewPeople }) => {

    const { name, picture, review, location } = reviewPeople;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className="flex items-center mt-6 ">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={picture} alt='' />
                        </div>
                    </div>
                    <div>
                        <h3 className=' text-xl '>{name}</h3>
                        <p className=' '>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;