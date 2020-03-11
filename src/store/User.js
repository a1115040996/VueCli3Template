export const User = {
    state: {
        UserMsg: {
            username: 'admin',
            userid: 0
        }
    },
    mutations: {
        handleSetUserMsg: function (state, payload) {
            state.UserMsg = payload;
        }
    },
    actions: {
    },
}