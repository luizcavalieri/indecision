
console.log('App is running');

let visibility = false;

const visibilityToggle = () => {
    visibility = !visibility;

    renderVariablesChanges();
};

const appRoot = document.getElementById('app');

const renderVariablesChanges = () => {
    const template = (
        <div>
            <h1>Visbility Toggle</h1>

            <button onClick={visibilityToggle}>
                {
                    visibility ? 'Hide details' : 'Show details'
                }
            </button>
            {
                visibility && (<p>This is visible now</p>)
            }

        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderVariablesChanges();