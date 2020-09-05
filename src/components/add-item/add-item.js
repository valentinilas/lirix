import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

import types from '../../store/types';
export default {
    name: 'AddItem',
    data() {
        return {
            loading: false,
            newRecord: {
                title: '',
                bodyText: '',
                authorId: ''
            }
        }
    },
    computed: {
        ...mapGetters({
            modal: types.modalState,
        })
    },
    methods: {
        ...mapActions([
            types.postData,
            types.setModal
        ]),

        saveToDatabase() {
            this.loading = true;
            this.postData(this.newRecord)
                .then(() => {
                    this.loading = false;
                    this.setModal(false);
                });
        },
        hideAddScreen() {
            this.setModal(false);
        }
    }
}