// the place to combine all store modules
import Vuex from 'vuex';
import Vue from 'vue';
import albums from './modules/albums';
//Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
    strict: true,
    modules: {
        albums
    }
});