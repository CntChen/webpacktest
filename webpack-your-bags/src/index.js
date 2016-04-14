if (document.querySelectorAll('.buttoncpmponent').length) {
    require.ensure([], () => {
        const Button = require('./Components/Button').default;
        const button = new Button('google.com');

        button.render('.buttoncpmponent');
    }, 'button');
}