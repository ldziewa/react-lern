import React from 'react';
import LabelCounter from "./LabelCounter";
import Button from "./Button";
import Clock from "./Clock";
import Application from "./Application";

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { clickCounter: 0 };
    }

    render() {
        return (
            <>
                <LabelCounter clickCounter={ this.state.clickCounter }/>
                <Button increasedClickCounter={ this.increasedClickCounter }/>
                <Clock />
                <Application />
            </>
        );
    }

    increasedClickCounter = () => this.setState((prevState) => ({
        clickCounter: prevState.clickCounter + 1
    }))
}
