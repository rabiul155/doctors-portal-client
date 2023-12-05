import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const MyAppontment = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('jwtToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    console.log(bookings);

    return (
        <div>
            <h3 className="text-3xl mb-5">My Appointment</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, id) =>
                                <tr key={booking._id}>
                                    <th>{id + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.bookingDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid &&
                                            <Link to={`/dashbord/payment/${booking._id}`}><button className=' btn btn-sm btn-primary'> Pay</button></Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='text-primary font-bold'>Paid</span>
                                        }
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppontment;