export default {
    addItem(state, payload) {
        state.items.push(payload);

        return state;
    },
    clearItem(state, payload) {
        state.items.splice(payload.index, 1);
        state.done_items.push(payload);
        return state;
    },
    editItem(state, payload, oldvalue){
        let old_index =  state.items.indexOf(oldvalue);
        state.items[old_index] = payload;
        return state
    }
};
