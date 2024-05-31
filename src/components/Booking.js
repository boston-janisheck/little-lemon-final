import React from "react";
import Form from './Form';

const Booking = (props) => {
    return (
        <Form availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.submitForm} />
    )
}

export default Booking;