console.log('app is running')

let visibility = true;
let myText;

const toggleFunction = () => {
    visibility = !visibility;
    renderEverything();
}

const renderEverything = () => {
    const title = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleFunction}>{visibility ? "show options" : "hide options"}</button>
            {!visibility &&
                <p>Hey here is stuff you can see</p>
            }

        </div>

    );
    ReactDOM.render(title, document.getElementById('app'));
}

renderEverything()
