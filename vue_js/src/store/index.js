import vuex from 'vuex';
import Vue from 'vue';

Vue.use(vuex);
const store = new vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    }
});

store.commit('increment');
console.log(`state.count: ${store.state.count}`);