import Vue from 'vue';
import store from './store';

new Vue({
    el: '#app',
    store,
    components: {counter},
    template: `
        <div class="app">
            <counter></counter>
        </div>
        `
});