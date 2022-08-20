import request from "../../index";

const error = {
    error_js: (params: any) => {
        return request({
            url: "/get/error/js",
            method: "get",
            params,
        });
    },
    error_promise: (params: any) => {
        return request({
            url: "/get/error/promise",
            method: "get",
            params,
        });
    },
    error_resource: (params: any) => {
        return request({
            url: "/get/error/resource",
            method: "get",
            params,
        });
    },
    error_vue: (params: any) => {
        return request({
            url: "/get/error/vue",
            method: "get",
            params,
        });
    },
    error_console: (params: any) => {
        return request({
            url: "/get/error/console",
            method: "get",
            params,
        });
    }
}

export default error;

