import Vue from 'vue'
import Vuex from 'vuex'
import { fetchData } from '../utilities/fetchData'
import { apiUrl } from '../constants';
import types from './types'

Vue.use(Vuex);
/**
 * 
 * Vue components dispatch action 
 * Actions commit mutations [async]
 * Mutations update state data [sync]
 * .commit on mutations
 * .dispatch on actions
 */



export const store = new Vuex.Store({
    state: {
        siteMeta: {
            siteName: 'LIRIX'
        },
        allLirix: []
    },
    getters: {
        [types.getAllLirix](state) {
            return state.allLirix;
        }
    },
    mutations: {
        [types.setAllLirix](state, payload) {
            state.allLirix = payload;
        }

    },
    actions: {

        /**
         * Get data from the server and trigger a mutation
         * @param {} state 
         */
        async [types.getData](state) {
            const lirixData = await fetchData(apiUrl, 'GET');
            console.log('Getting new Data', lirixData.rows);
            state.commit('setAllLirix', lirixData.rows);
        },

        /**
         * Send data to the server and then trigger getData
         * @param {} store 
         * @param {Object} payload the data sent to the server
         */
        [types.postData](store, payload) {
            fetchData(apiUrl, 'POST', JSON.stringify(payload), {
                'Content-Type': 'application/json'
            }).then(() => {
                store.dispatch(types.getData);
            })
        }

    }
});