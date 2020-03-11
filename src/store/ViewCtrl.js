export const ViewCtrl = {
    state: {
        isToggleSidebar: false, // 是否收起侧边栏
        isShowLoading: false, // 是否展示 loading
    },
    mutations: {
        handleToggleSidebar: function (state) {
            state.isToggleSidebar = !state.isToggleSidebar;
        },
        handleLoading: function (state, payload) {
            state.isShowLoading = payload;
        }
    },
    actions: {
    },
}