import { mapActions } from 'vuex';
import types from '../../store/types';
export default {
    name: 'AddItem',
    data() {
        return {
            newRecord: {
                title: '',
                bodyText: '',
                authorId: ''
            }
        }
    },
    methods: {
        ...mapActions([
            types.postData
        ]),

        saveToDatabase() {
            this.postData(this.newRecord);
        }
    }
}