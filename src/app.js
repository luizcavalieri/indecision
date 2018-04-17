
console.log('App is running');



const template = (
    <div>
        <h2>This is a Indecision!</h2>
        <p>This is a paragraph</p>

    </div>
);

let information = {
    title: 'title there!',
    template: template
};


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

let appRoot = document.getElementById('app');

ReactDOM.render(secondTemplate, appRoot);