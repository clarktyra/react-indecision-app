"use strict";

console.log('app is running');

var visibility = true;
var myText = void 0;

var toggleFunction = function toggleFunction() {
    visibility = !visibility;
    renderEverything();
};

var renderEverything = function renderEverything() {
    var title = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleFunction },
            visibility ? "show options" : "hide options"
        ),
        !visibility && React.createElement(
            "p",
            null,
            "Hey here is stuff you can see"
        )
    );
    ReactDOM.render(title, document.getElementById('app'));
};

renderEverything();
