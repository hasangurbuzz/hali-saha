import React, { useState } from 'react';
import Confirmation from "./Confirmation";
import './Panel.css'

const Panel = ({ panelStatusHandler, chosenElement, user, onConfirmationHandler, triggerPopup }) => {


    const { image, address, tel, chosenDates } = chosenElement


    const [confirmationStatus, setConfirmationStatus] = useState(false)

    const confirmationPanelHandler = () => {
        setConfirmationStatus(!confirmationStatus)
    }

    return (
        <div className={'panel-container'}>

            <>
                <div className={'panel-item-wrapper'}>
                    <div className={'panel-image-wrapper'}>
                        <button className={'panel-close-btn'} onClick={panelStatusHandler}>&lArr;</button>
                        <div className={'panel-image'} style={{ backgroundImage: `url("/images/${image}")` }} />
                    </div>
                    <div className={'panel-info-wrapper'}>
                        <p className={'panel-info'}>Adres: {address}</p>
                        <p className={'panel-info'}>Tel: {tel}</p>
                    </div>
                </div>
                <button className={'panel-open-confirmation-btn'}
                    onClick={confirmationPanelHandler}>{confirmationStatus ? 'Kapat' : 'Zaman Seç'}</button>
            </>

            {confirmationStatus && <Confirmation chosenDates={chosenDates} user={user}
                confPanelHandler={confirmationPanelHandler}
                onConfirmationHandler={onConfirmationHandler}
                triggerPopup={triggerPopup} />}


        </div>
    );
};

export default Panel;

