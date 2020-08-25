import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
<<<<<<< HEAD
        this.setState({ hasError: true })
=======
        this.setState({ hasError: true });
>>>>>>> baac625b0460c4941b3fbb3b70836970f13f97d6
    }

    render() {
        const { hasError } = this.state;
<<<<<<< HEAD
        if (hasError) {
            return <h1>Oooops. That is not good</h1>;
        }
        return this.props.children;
=======

        if (hasError) {
            return <h1>Ooooops. This is not good</h1>;
        }

        return  this.props.children ;
>>>>>>> baac625b0460c4941b3fbb3b70836970f13f97d6
    }
}

export default ErrorBoundary;