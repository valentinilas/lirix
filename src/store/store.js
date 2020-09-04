import Vue from 'vue'
import Vuex from 'vuex'
import { fetchData } from '../utilities/fetchData'
import { apiUrl, apiHeaders } from '../constants';
Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        siteMeta: {
            siteName: 'LIRIX'
        },
        currentJoke: '',
        allJokes: []
    },
    getters: {
        getCurrentJoke(state) {
            return state.currentJoke;
        },
        getAllJokes(state) {
            return state.allJokes;
        }
    },
    mutations: {
        // Syncronous
        setCurrentJoke(state, payload) {
            state.currentJoke = payload;
            state.allJokes.push(payload);
        }

    },
    actions: {
        // Asyncronous
        async setCurrentJoke(state) {
            const j = await fetchData(apiUrl, 'GET', apiHeaders);
            state.commit('setCurrentJoke', j.joke);
        }
    }
});