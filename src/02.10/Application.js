import React from 'react';
import LabelIntervalCounter from "./LabelIntervalCounter";
import StateButton from "./StateButton";

export default class Application extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            counter: 0,
            isStarted: false,
        };
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick = () => this.setState(({ counter }) => ({ counter: counter + 1 }));

    changeStateCounter = () => {
        if (this.state.isStarted) {
            clearInterval(this.timerId);
            this.setState({ counter: 0 });
        } else {
            this.timerId = setInterval(() => this.tick(), 1500);
        }

        this.setState(({ isStarted }) => ({ isStarted: !isStarted }));
    };

    render() {
        return (
            <>
                <LabelIntervalCounter counter={this.state.counter}/>
                <StateButton changeStateCounter={this.changeStateCounter} label={this.state.isStarted ? 'Stop' : 'Start'}/>
            </>
        );
    }
}
