console.log('App.js is running')

const app = {
    title: "Indecision App",
    subtitle: "This is some info!!!!!", 
    options: []
}

const onFromSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ''
    }
    renderEverything();
}

const removeAll = () => {
    app.options = [];
    renderEverything();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option);
};

const renderEverything = () => {
const template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p> }
    <p>{(app.options.length > 0) ? "Here are your options" : "No Options"}</p>
    <button disabled={app.options.length ===0} onClick={onMakeDecision}>What should I do?</button>

    <button onClick={removeAll}>Remove All</button>
    <ol>
        {
            app.options.map((option)=><li key={option}>Option: {option}</li>)
        }
    </ol>
    <form onSubmit={onFromSubmit}>
        <input type='text' name='option'/>
        <button>add option</button>
    </form>
</div>
);
ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app')



renderEverything();