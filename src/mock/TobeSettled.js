import {mockInstance} from "./index";
export function getTobeSettledMockData() {
    mockInstance.onPost('/pre/query').reply(200, {
        resultCode: 'SUCCESS',
        resultMsg: '成功!',
        data: []
    });
}
