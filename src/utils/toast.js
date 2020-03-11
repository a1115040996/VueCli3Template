import Vue from 'vue';

const Context = new Vue();
// 全局控制弹出层 防止后期修改弹出层样式,导致一次调整处处修改
export function showDefaultToast(config) {
    const type = Object.prototype.toString.call(config);
    if (type === '[object Object]') {
        Context.$message({
            showClose: (config.showClose + '') ? config.showClose : true, // 否则 显示 关闭按钮
            message: config.message,
            type: config.type ? config.type : 'success', // 否则 success
            duration: config.duration + '' ? config.duration : 3000 // 否则默认3s关闭
        });
    } else {
        Context.$message({
            showClose: true, // 否则 显示 关闭按钮
            message: config,
            type: 'success', // 否则 success
            duration: 3000 // 否则默认3s关闭
        });
    }
}

Vue.prototype.showDefaultToast = showDefaultToast;