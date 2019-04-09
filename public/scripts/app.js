'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            '1'
        ),
        React.createElement(
            'li',
            null,
            '2'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Clark Tyra'
    ),
    React.createElement(
        'p',
        null,
        'Age: 25'
    ),
    React.createElement(
        'p',
        null,
        'Location: San Diego'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
