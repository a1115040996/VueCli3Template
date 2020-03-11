import MockAdapter from 'axios-mock-adapter';
import service from '../apis/axios.intercept';
import {getTobeSettledMockData} from "./TobeSettled";

export const  mockInstance = new MockAdapter(service);
export const mock = {
    bootstrap() {
        getTobeSettledMockData();
    }

}