"use strict";

console.log('App.js is running');

var app = {
    title: "Indecision App",
    subtitle: "This is some info!!!!!",
    options: []
};

var onFromSubmit = function onFromSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderEverything();
};

var removeAll = function removeAll() {
    app.options = [];
    renderEverything();
};

// JSX - JavaScript XML
var renderEverything = function renderEverything() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No Options"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            React.createElement(
                "li",
                null,
                "1"
            ),
            React.createElement(
                "li",
                null,
                "2"
            )
        ),
        React.createElement(
            "form",
            { onSubmit: onFromSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "add option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderEverything();
