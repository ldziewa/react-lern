import React from 'react';

const StateButton = ({ changeStateCounter, label }) =>
    <button type="button" onClick={changeStateCounter}>{label}</button>;

export default StateButton
