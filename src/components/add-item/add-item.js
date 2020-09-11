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
                authorId: 0
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

            if (fieldData.bodyText) {
                this.loading = true;
                this.postData(this.newRecord)
                    .then(() => {
                        this.loading = false;
                        this.setModal(false);
                        this.newRecord = {
                            title: '',
                            bodyText: '',
                        }
                    });
            }

            this.errors = [];



            if (!fieldData.bodyText) {
                this.errors.push('Add some content');
            }

        },
        hideAddScreen() {
            this.setModal(false);
        }
    }
}