import $ from 'jquery';
import template from './Button.html';
import Mustache from 'mustache';
import './Button.less';

export default class Button {
    constructor(link) {
        this.link = link;
    }

    onClick(event) {
        event.preventDefault();
        console.log(this.link);
    }

    render(node) {
        const text = $(node).text();
        console.log(text);

        // Render our button
        $(node).html(
            Mustache.render(template, {text})
        );

        // Attach our listeners
        $(node).click(this.onClick.bind(this));
    }
}