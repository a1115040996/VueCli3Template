import service from './axios.intercept';

const interfaceAddress = process.env.VUE_APP_URL + '/basic/';
const requestInterfaceList = {
    queryNetworkList: interfaceAddress + 'shop/net',
}

export const BasicRequest = {
    queryNetworkList(params) {
        const sendObj = {};
        ({
            pageNo: sendObj.pageNo,// 页码
            pageSize: sendObj.pageSize,// 每页条数
        } = params);
        return service({
            url: requestInterfaceList.queryNetworkList,
            method: 'get',
            params: sendObj
        })
    },
}