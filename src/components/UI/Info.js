import React from 'react'
import "./Info.css"

function Info(props) {
    const { infoPanelToggler, chosenElement } = props

    const { address, tel, image, name } = chosenElement
    return (
        <div className={'info-container'}>

            <div className={'info-title-wrapper'}>
                <p className={'info-title'}>{name}</p>
                    <button className={'info-close-btn'} onClick={infoPanelToggler}>&times;</button>

            </div>

            <div className={'info-item-wrapper'}>

                <div className={'info-image-wrapper'}>

                    <div className={'info-image'} style={{ backgroundImage: `url("${image}")` }} />
                </div>
                <div className={'info-text-wrapper'}>
                    <p className={'info-text'}>Adres: {address}</p>
                    <p className={'info-text'}>Tel: {tel}</p>
                </div>
            </div>
        </div>
    )
}

export default Info