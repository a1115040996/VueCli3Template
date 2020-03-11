import Vue from 'vue';
import {showDefaultToast} from "./toast";

export function ValidateOperation(targetList, isRadio) {
    if (!targetList || targetList.length === 0 || (targetList.length > 1 && isRadio)) {
        showDefaultToast({
            showClose: true,
            message: isRadio ? '1' : '2',
            type: 'error',
            duration: 0
        });
        return false;
    }
    return true;
}

Vue.prototype.MValid = {
    ValidateOperation: ValidateOperation
}