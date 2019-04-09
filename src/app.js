console.log('App.js is running')

var app = {
    title: "Indecision App",
    subtitle: "This is some info!!!!!"
}

// JSX - JavaScript XML
var template = (
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
        <li>1</li>
        <li>2</li>
    </ol>
</div>
);

var user = {
    name: "Clark",
    age: "25",
    location: "San Diego"
}
var userName = 'Mickey';
var userAge = 25;
var userLocation = 'San Diego';

var templateTwo = (
<div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
</div>
);
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);