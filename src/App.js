import React from 'react';
import LabelCounter from "./01.10/LabelCounter";
import Button from "./01.10/Button";
import Clock from "./01.10/Clock";
import Application from "./02.10/Application";
import List from "./03.10/List";

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { clickCounter: 0 };
    }

    render() {
        const numbers = [
            {key: 'A', value: 1},
            {key: 'B', value: 2},
            {key: 'C', value: 3},
            {key: 'D', value: 4},
            {key: 'D', value: 5},
        ];

        return (
            <>
                <LabelCounter clickCounter={ this.state.clickCounter }/>
                <Button increasedClickCounter={ this.increasedClickCounter }/>
                <Clock />
                <Application />
                <List numbers={numbers} />
            </>
        );
    }

    increasedClickCounter = () => this.setState((prevState) => ({
        clickCounter: prevState.clickCounter + 1
    }))
}
