import store from './store';
export default {
    template: `<div>{{count}}</div>`,
    computed: {
        count() {
            return store.state.count;
        }
    }
};