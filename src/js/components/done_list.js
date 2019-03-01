import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Done_List extends Component {

    // Pass our store instance and the HTML element up to the parent Component
    constructor() {
        super({
            store,
            element: document.querySelector('.js-done_items')
        });
    }

    /**
     * React to state changes and render the component's HTML
     *
     * @returns {void}
     */
    render() {
        let self = this;
        self.element.innerHTML = `
            <ul class="aqq__items">
                ${store.state.done_items.map(item => {
            return `
                        <li><p class="value">${item}</p></li>
                    `
        }).join('')}
            </ul>
        `;
    }
};
