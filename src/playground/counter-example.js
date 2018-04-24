
function isTemplateThere(checkExisting) {

    if(checkExisting) {
        return checkExisting
    }
    else {
        return undefined;
    }
}
const secondTemplate = (
    <div>
        <h1>This is a h1 tag</h1>
        <p>{information.title}</p>
        {information.template ? isTemplateThere(information.template) : 'No template'}
    </div>
);

const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const resetCount = () => {
    count = 0;
    renderCounterApp();
};

let count = 0;

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();