import React from 'react';

export default class Clock extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState(() => ({ date: new Date() }));
    }

    render() {
        return (
            <div>
                <h1>Clock</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
