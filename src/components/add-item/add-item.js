import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

import types from '../../store/types';
export default {
    name: 'AddItem',
    data() {
        return {
            loading: false,
            errors: [],
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
            let fieldData = this.newRecord;

            if (fieldData.title && fieldData.bodyText && fieldData.authorId) {
                this.loading = true;
                this.postData(this.newRecord)
                    .then(() => {
                        this.loading = false;
                        this.setModal(false);
                    });
            }

            this.errors = [];

            if (!fieldData.title) {
                this.errors.push('Add a title');
            }
            if (!fieldData.authorId) {
                this.errors.push('Select an author ');
            }
            if (!fieldData.bodyText) {
                this.errors.push('Add some content');
            }

        },
        hideAddScreen() {
            this.setModal(false);
        }
    }
}