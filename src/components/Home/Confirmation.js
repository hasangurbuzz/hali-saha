import React, {useState} from 'react';
import './Confirmation.css'

const Confirmation = ({confPanelHandler, user, chosenDates, onConfirmationHandler}) => {

    const hours = Array.from(Array(24).keys())
    const formatDate = (date) => {
        const year = date.getFullYear()
        const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
        const day = date.getDay() < 10 ? `0${date.getDay() + 1}` : date.getDay() + 1
        return `${year}-${month}-${day}`
    }
    const today = formatDate(new Date(Date.now()))
    const [inputDate, setInputDate] = useState(today)
    const map = new Map()

    const isUserActive = () => {
        return !!user.username
    }
    //returns reservedHours of specific day
    const timeParser = (date) => {
        let reservedHours = []
        chosenDates.map((x) => {
            return x.time.forEach((y) => {
                if (x.date === date) {
                    reservedHours.push(y)
                }
            })
        })
        return reservedHours
    }

    const [reserved, setReserved] = useState(timeParser(today))
    const [inputCheckbox, setInputCheckbox] = useState(map)


    //set date state
    const dateHandler = (e) => {
        setInputDate(e.target.value)
        setReserved(timeParser(e.target.value))

    }

    //set time state
    const hourHandler = (e) => {
        const checkbox = e.target
        setInputCheckbox(new Map(inputCheckbox.set(checkbox.name, checkbox.checked)))


    }


    const submitValues = () => {
        if (!inputCheckbox.size < 1) {
            const chosenHours = [...inputCheckbox.entries()]
                .filter((x) => x["1"] === true)
                .map(([k]) => k);
            const element = {
                time: chosenHours,
                date: inputDate,
                username: user.username
            }
            // if (element.time.length >= 1) reservationHandler(haliSahaId,element)
            chosenDates.push(element)
            setReserved(chosenDates)
            onConfirmationHandler(reserved)
            confPanelHandler()
            alert(`${element.date} tarihli ${element.time}:00 saatine alındı`)
        } else alert('En az 1 seçim yapmanız gerek')

    }


    return (
        <div className={'confirmation-container'}>
            <label className={'input-label'}>Tarih</label>
            <input className={'confirmation-date-picker'} type="date" onChange={dateHandler} value={inputDate} min={today} max={'2022-12-31'}/>
            <label className={'input-label'}>Saat</label>
            <ol>
                {hours.map((hour) =>
                    <li key={hour}>
                        <label className={'confirmation-input-label'}>{hour}:00</label>
                        <input className={'confirmation-checkbox'} name={hour.toString()} onChange={hourHandler} type={'checkbox'}
                                          disabled={reserved.includes(hour.toString())}
                        />
                    </li>
                )}
            </ol>
            <div className={'confirmation-btn-wrapper'}>

                <button className={'confirmation-submit-btn'} disabled={!isUserActive()} onClick={submitValues}>
                    {isUserActive() ? 'Onayla' : 'Giriş Yap'}
                </button>


            </div>
        </div>
    );
};

export default Confirmation;
