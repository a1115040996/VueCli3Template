export const RouteExtend = {
    state: {
        route: {
            from: '', // 从哪个地方跳转过来
            to: '' // 到哪个地方
        }
    },
    mutations: {
        handleChangeRouteState: function (state, payload) {
            state.route = payload;
        }
    },
    actions: {
    },
}