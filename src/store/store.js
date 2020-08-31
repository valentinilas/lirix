import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


// Database
const Datastore = require('nedb');
const db = new Datastore({ filename: '../database/records.json', autoload: true });
db.insert({ test: 'test' });
console.log(db);
db.loadDatabase();




export const store = new Vuex.Store({
    state: {
        siteMeta: {
            siteName: 'LIRIX'
        }
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
});