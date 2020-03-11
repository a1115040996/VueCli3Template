import router from './index';
// 路由拦截 方便全局获取 从哪跳转 要跳转到哪去
export default function RouterIntercept(context) {
    router.beforeEach((to, from, next)=>{
        context.$store.commit('handleChangeRouteState', {
            from: from.path,
            fromName: from.meta.title,
            to: to.path,
            toName: to.meta.title
        })
        next();
    });
}