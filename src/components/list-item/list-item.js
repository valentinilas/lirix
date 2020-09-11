import { mapActions } from 'vuex';
// import { mapGetters } from 'vuex';

import types from '../../store/types'
export default {
    name: 'ListItem',
    props: ['itemData'],
    data() {
        return {
            editMode: false,
            loading: false,
            errors: [],
            newRecord: {
                title: this.itemData.title,
                bodyText: this.itemData.bodyText,
                authorId: this.itemData.authorId,
                lirixId: this.itemData.lirixId,
                authorName: this.itemData.authorName
            }
        }
    },
    watch: {
        itemData() {
            this.newRecord = {
                title: this.itemData.title,
                bodyText: this.itemData.bodyText,
                authorId: this.itemData.authorId,
                lirixId: this.itemData.lirixId,
                authorName: this.itemData.authorName
            }
        }
    },

    methods: {
        ...mapActions([
            types.deleteData,
            types.updateData,
            types.getDataSingle
        ]),


        deleteItemfromDatabase(postId) {

            if (confirm('Are you sure?')) {
                this.loading = true;

                this.deleteData(postId)
                    .then(() => {
                        this.loading = false;
                    });
            }

        },

        updateItemInDatabase() {



            let fieldData = this.newRecord;

            if (fieldData.bodyText && fieldData.authorId) {
                this.loading = true;


                this.updateData(this.newRecord)
                    .then(() => {
                        if (this.$route.params.id) {
                            this.getDataSingle(this.$route.params.id);
                        }
                        this.loading = false;
                        this.disableEditing();
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
        enableEditing() {
            this.editMode = true
        },
        disableEditing() {
            this.editMode = false
        }
    },
    computed: {


        addedOnDate() {
            let now = new Date().getDay();
            let date = new Date(this.itemData.timestamp);

            let diffTime = Math.abs(now - date);
            let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays > 1) {
                return ('at ' + date.getHours() + ':' + date.getMinutes());
            } else {
                return ('on ' + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear());
            }

        }
    }
}