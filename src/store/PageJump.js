export const PageJump = {
    state: {
        widthDatas: [] // 页面跳转携带的参数
    },
    mutations: {
        handleChangeDatas: function (state, payload) {
            state.widthDatas = payload;
        }
    },
    actions: {
    },
}