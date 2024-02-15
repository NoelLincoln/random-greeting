import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from './redux/greetingSlice';

const Greeting = ({ greeting, fetchRandomGreeting }) => {
    useEffect(() => {
        fetchRandomGreeting();
    }, [fetchRandomGreeting]);

    return (
        <div>
            <h1>Random Greeting</h1>
            <p>{greeting}</p>
        </div>
    );
};

const mapStateToProps = state => ({
    greeting: state.greeting.message
});

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
