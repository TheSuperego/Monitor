

import request from "./index";


import api_get from "./get";
import api_report from "./report";
import api_tool from "./tool";


export function echo() {
    return request({
        url: "/",
        method: "get"
    });
}

export function api_test_report(params: any) {
    return request({
        url: "/report/",
        method: "post",
        params,
    });
}


export function api_test_get(params: any) {
    return request({
        url: "/get/",
        method: "get",
        params,
    });
}


const service = {
    api_get,
    api_report,
    api_tool
}

export default service;
