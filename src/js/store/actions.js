export default {
    addItem(context, payload) {
        context.commit('addItem', payload);
    },
    clearItem(context, payload) {
        context.commit('clearItem', payload);
    },
    editItem(context, payload){
        context.commit('editItem', payload);
    }
};
