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
        modal: false,
        searchTerm: '',
        [types.allLirix]: [],
        [types.singleLiric]: ''
    },
    getters: {
        [types.getAllLirix](state) {
            return state.allLirix;
        },
        [types.getSingleLiric](state) {
            return state.singleLiric;
        },
        [types.modalState](state) {
            return state.modal;
        },
        filteredLirix(state) {
            return state.allLirix.filter((liric) => {
                return liric.title.toLowerCase().indexOf(state.searchTerm.toLowerCase()) > -1 || liric.bodyText.toLowerCase().indexOf(state.searchTerm.toLowerCase()) > -1;
            })
        }

    },
    mutations: {
        [types.setAllLirix](state, payload) {
            state.allLirix = payload;
        },
        [types.setSingleLiric](state, payload) {
            // state.singleLiric = [];
            state.singleLiric = payload;
        },
        [types.setModal](state, payload) {
            state.modal = payload;
        },
        setSearchTerm(state, payload) {
            state.searchTerm = payload;
        }

    },
    actions: {

        /**
         * Get data from the server and trigger a mutation
         * @param {} state 
         */
        async [types.getData](state) {
            const lirixData = await fetchData(apiUrl, 'GET');
            console.log(lirixData);
            state.commit(types.setAllLirix, lirixData.rows.reverse());
        },
        async [types.getDataSingle](state, payload) {
            const lirixData = await fetchData(apiUrl + '/' + payload, 'GET');
            state.commit(types.setSingleLiric, lirixData);
        },

        /**
         * Send data to the server and then trigger getData
         * @param {} store 
         * @param {Object} payload the data sent to the server
         */
        [types.postData](store, payload) {
            return fetchData(apiUrl, 'POST', JSON.stringify(payload), {
                'Content-Type': 'application/json'
            }).then(() => {
                store.dispatch(types.getData);
            })
        },

        /**
         * Update data on the server and then trigger getData
         * @param {} store 
         * @param {Object} payload the data sent to the server
         */
        [types.updateData](store, payload) {
            return fetchData(apiUrl, 'PATCH', JSON.stringify(payload), {
                'Content-Type': 'application/json'
            }).then(() => {
                store.dispatch(types.getData);
            })
        },

        /**
         * Deletes an item from he database by ID
         * @param {*} store 
         * @param {String} payload the id of the item 
         */
        [types.deleteData](store, payload) {
            return fetchData(apiUrl + '/' + String(payload), 'DELETE')
                .then(() => {
                    store.dispatch(types.getData);
                })
        },

        [types.setModal](store, payload) {
            store.commit(types.setModal, payload);
        },
        setSearchTerm(store, payload) {
            store.commit('setSearchTerm', payload);
        }


    }
});