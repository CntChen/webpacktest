import './styles.less';

var buttonComponents = document.querySelectorAll('.buttoncomponent');

if (buttonComponents.length > 0) {
    require.ensure([], () => {
        const Button = require('./Components/Button').default;

        [...buttonComponents].forEach((buttoncomponent) => {
          const button = new Button('google.com');
          button.render('#' + buttoncomponent.id);
        });
    }, 'button');
}

if (document.querySelectorAll('h1').length) {
    require.ensure([], () => {
        const Header = require('./Components/Header').default;

        new Header().render('h1');
    }, 'header');
}