import { mapActions } from 'vuex';
import types from '../../store/types';


export default {
    name: 'ActionBar',
    data() {
        return {
            searchTerm: ''
        }
    },

    methods: {
        ...mapActions([
            types.setModal,
            'setSearchTerm'
        ]),
        showAddScreen() {
            this.setModal(true);
        },
        search() {
            this.setSearchTerm(this.searchTerm)
        }

    }
}