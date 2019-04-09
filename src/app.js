console.log('App.js is running')

var app = {
    title: "Indecision App",
    subtitle: "This is some info!!!!!", 
    options: ['One', 'Two']
}

// JSX - JavaScript XML
var template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p> }
    <p>{(app.options.length > 0) ? "Here are your options" : "No Options"}</p>
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

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}


var templateTwo = (
<div>
    <h1>{user.name ? user.name : 'anonymous'}</h1>
    {(user.age && user.age >= 18) &&  <p>Age: {user.age}</p>}
    {getLocation(user.location)}
</div>
);
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);