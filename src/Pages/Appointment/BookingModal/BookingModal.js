import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ treatment, selectdeDate, setTreatment, refetch }) => {
    const { name, slots, price } = treatment;
    const date = format(selectdeDate, "PP")
    const { user } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            bookingDate: date,
            patient: name,
            treatment: treatment.name,
            email,
            phone,
            slot,
            price
        }
        fetch('http://localhost:5000/bookings', {

            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('booking confirm')
                    refetch();
                }
                else {
                    toast.error(data.message)
                }

            })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit} className=' grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" readOnly value={date} className="input input-bordered w-full " />

                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, id) => <option key={id} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input defaultValue={user?.displayName} name='name' type="text" placeholder="Your Name" className="input input-bordered w-full " />
                        <input defaultValue={user?.email} name='email' type="email" placeholder="Email" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                        <br />

                        <input className=' btn btn-accent w-full  ' type="submit" value=" Submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;