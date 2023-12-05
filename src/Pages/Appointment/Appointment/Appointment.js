import React, { useState } from 'react';
import AppointBanner from '../AppointBanner/AppointBanner';
import AailableAppoint from '../AvailableAppoint/AailableAppoint';

const Appointment = () => {
    const [selectdDate, setSelectedDate] = useState(new Date())
    return (
        <div className=' mx-6'>
            <AppointBanner
                selectdDate={selectdDate}
                setSelectedDate={setSelectedDate}
            ></AppointBanner>
            <AailableAppoint
                selectdeDate={selectdDate}
            ></AailableAppoint>
        </div>
    );
};

export default Appointment;