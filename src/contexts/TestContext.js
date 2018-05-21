import React from 'react';

const TestContext = React.createContext({
    number: 0,
    incrementNumber: () => {
        console.log('TODO: increment number');
    }
});

export default TestContext;
