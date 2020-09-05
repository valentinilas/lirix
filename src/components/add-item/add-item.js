import { mapActions } from 'vuex';

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
        ...mapActions({ postData: 'postData' }),

        saveToDatabase() {
            this.postData(this.newRecord);
        }
    }
}