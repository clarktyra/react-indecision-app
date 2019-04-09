console.log('App.js is running')

// JSX - JavaScript XML
var template = (
<div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
        <li>1</li>
        <li>2</li>
    </ol>
</div>
);

var templateTwo = (
<div>
    <h1>Clark Tyra</h1>
    <p>Age: 25</p>
    <p>Location: San Diego</p>
</div>
);
var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot);