import request from "../../index";

const performance = {
    api_report_performance_xhr: (params: any) => {
        return request({
            url: "/report/performance/xhr",
            method: "post",
            params,
        });
    },
    api_report_performance_fetch: (params: any) => {
        return request({
            url: "/report/performance/fetch",
            method: "post",
            params,
        });
    },
    api_report_performance_fps: (params: any) => {
        return request({
            url: "/report/performance/fps",
            method: "post",
            params,
        });
    },
    api_report_performance_fp: (params: any) => {
        return request({
            url: "/report/performance/fp",
            method: "post",
            params,
        });
    },
    api_report_performance_fcp: (params: any) => {
        return request({
            url: "/report/performance/fcp",
            method: "post",
            params,
        });
    },
    api_report_performance_lcp: (params: any) => {
        return request({
            url: "/report/performance/lcp",
            method: "post",
            params,
        });
    },
    api_report_performance_cls: (params: any) => {
        return request({
            url: "/report/performance/cls",
            method: "post",
            params,
        });
    },
    api_report_performance_bfc: (params: any) => {
        return request({
            url: "/report/performance/bfc",
            method: "post",
            params,
        });
    },
    api_report_performance_resource: (params: any) => {
        return request({
            url: "/report/performance/resource",
            method: "post",
            params,
        });
    },
    api_report_performance_load: (params: any) => {
        return request({
            url: "/report/performance/load",
            method: "post",
            params,
        });
    }
}

export default performance;

