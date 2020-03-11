import service from './axios.intercept';

const interfaceAddress = process.env.VUE_APP_URL + '/income/';
// 请求接口列表
const requestInterfaceList = {
    queryBeforeSettleList: interfaceAddress + 'pre/query',
}

export const IncomeRequest = {
    queryBeforeSettleList(params) {
        const sendObj = {};
        ({
            area: sendObj.area,
            pageNo: sendObj.pageNo,// 页码
            pageSize: sendObj.pageSize,// 每页条数
        } = params);
        return service({
            url: requestInterfaceList.queryBeforeSettleList,
            method: 'post',
            headers: {},
            data: sendObj
        });
    }
}
