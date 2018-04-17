'use strict';

console.log('App is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        'This is a Indecision!'
    ),
    React.createElement(
        'p',
        null,
        'This is a paragraph'
    )
);

var information = {
    title: 'title there!',
    template: template
};

function isTemplateThere(checkExisting) {

    if (checkExisting) {
        return checkExisting;
    } else {
        return undefined;
    }
}

var secondTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is a h1 tag'
    ),
    React.createElement(
        'p',
        null,
        information.title
    ),
    information.template ? isTemplateThere(information.template) : 'No template'
);

var appRoot = document.getElementById('app');

ReactDOM.render(secondTemplate, appRoot);
