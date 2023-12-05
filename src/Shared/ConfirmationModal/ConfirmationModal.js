import React from 'react';

const ConfirmationModal = ({ title, message, cancel, handleDeleteDoctor, doctor }) => {
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => handleDeleteDoctor(doctor)} htmlFor="confirmation-modal" className="btn">Delete</label>
                        <label onClick={() => cancel(null)} className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;