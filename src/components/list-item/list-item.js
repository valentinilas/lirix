import { mapActions } from 'vuex';
import types from '../../store/types'
export default {
    name: 'ListItem',
    props: ['itemData'],
    data() {
        return {
            editMode: false,
            loading: false,
            newRecord: {
                title: this.itemData.title,
                bodyText: this.itemData.bodyText,
                authorId: this.itemData.authorId,
                lirixId: this.itemData.lirixId
            }
        }
    },

    methods: {
        ...mapActions([
            types.deleteData,
            types.updateData
        ]),
        deleteItemfromDatabase(postId) {
            this.loading = true;
            this.deleteData(postId)
                .then(() => {
                    this.loading = false;
                });
        },
        updateItemInDatabase() {
            this.loading = true;
            this.updateData(this.newRecord)
                .then(() => {
                    this.loading = false;
                    this.disableEditing();
                });
        },
        enableEditing() {
            this.editMode = true
        },
        disableEditing() {
            this.editMode = false
        }
    }
}