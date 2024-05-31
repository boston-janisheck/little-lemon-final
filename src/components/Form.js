import React from 'react';
import { useState } from 'react';

const Form = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }


    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type='date' required />
                        </div>
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' min='1' value={guest} onChange={(e) => setGuest(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required >
                                <option value="">Select an Option</option>
                                <option>Graduation</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className='btnReceive'>
                            <input aria-label='On Click' type={"submit"} value={"Make your Reservation"} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default Form;