import request from "../../index";

const error = {
    api_report_error_js: (params: any) => {
        return request({
            url: "/report/error/js",
            method: "post",
            params,
        });
    },
    api_report_error_promise: (params: any) => {
        return request({
            url: "/report/error/promise",
            method: "post",
            params,
        });
    },
    api_report_error_resource: (params: any) => {
        return request({
            url: "/report/error/resource",
            method: "post",
            params,
        });
    },
    api_report_error_vue: (params: any) => {
        return request({
            url: "/report/error/vue",
            method: "post",
            params,
        });
    },
    api_report_error_console: (params: any) => {
        return request({
            url: "/report/error/console",
            method: "post",
            params,
        });
    }
}

export default error;

