import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption/AppointmentOption';

const AailableAppoint = ({ selectdeDate }) => {
    // const [appointmentOtions, setAppointmentOptions] = useState([])

    const [treatment, setTreatment] = useState(null)
    const date = format(selectdeDate, "PP")

    const { data: appointmentOtions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=' mt-16'>
            <p className=' text-center font-bold text-secondary'>Available Appointment On {date}</p>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>


                {

                    appointmentOtions.map(option => <AppointmentOption

                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}

                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectdeDate={selectdeDate}
                    treatment={treatment}
                    refetch={refetch}
                    setTreatment={setTreatment}
                ></BookingModal>
            }

        </div>

    );
};

export default AailableAppoint;