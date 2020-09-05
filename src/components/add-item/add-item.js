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
            types.postData,
            types.deleteData
        ]),

        saveToDatabase() {
            this.postData(this.newRecord);
        },
        deleteItemfromDatabase(postId) {
            this.deleteData(postId);
        }
    }
}