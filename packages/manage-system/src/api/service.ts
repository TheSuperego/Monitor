import request from "./index";

export function echo(params: any) {
    return request({
        url: "/get/",
        method: "get",
        params,
    });
}


export function api_report(params: any) {
    return request({
        url: "/report/",
        method: "post",
        params,
    });
}


export function api_get(params: any) {
    return request({
        url: "/get/",
        method: "get",
        params,
    });
}
