import Vue from 'vue'
// 防抖
function C(callback) {
    C.prototype.init(callback);
}

C.prototype = {
    canclick: true,
    init: function (callback) {
        if (this.canclick) {
            this.canclick = false;
            try {
                callback();
                setTimeout(function () {
                    this.canclick = true
                }.bind(this), 300)
            } catch (e) {
                //TODO handle the exception
                setTimeout(function () {
                    this.canclick = true
                }.bind(this), 300)
            }
        } else {
            console.log('forbid');
        }
    }
}
Vue.prototype.RC = C;