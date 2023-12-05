
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointBanner = ({ selectdDate, setSelectedDate }) => {

    return (
        <div>
            <div className="hero my-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="max-w-md rounded-lg shadow-2xl" />
                    <div className=' mr-6'>
                        <DayPicker
                            mode="single"
                            selected={selectdDate}
                            onSelect={setSelectedDate}
                        ></DayPicker>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;