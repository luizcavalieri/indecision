
console.log('App is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer;',
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;

    if(option){
        app.options.push(option);
        event.target.elements.option.value = '';
        console.log(app.options);
        renderVariablesChanges();
    }

};

const resetArray = () => {
    app.options = [];
    renderVariablesChanges();
};

const onMakeDecision = () =>{
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const renderVariablesChanges = () => {
    const template = (
        <div>
            <h2>{app.title}</h2>
            <p>{app.subtitle}</p>
            <p>{app.options.length ? 'Here are your options:' : 'You do not have any option yet.'}</p>
            <p>{app.options.length}</p>
            <button onClick={onMakeDecision} disabled={!app.options.length}>What should I do?</button>
            <button onClick={resetArray}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}!</li>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderVariablesChanges();