import request from "../../index";


const METHOD = "post"


const performance = {
    api_get_performance_xhr: (params: any) => {
        return request({
            url: "/get/performance/xhr",
            method: METHOD,
            params,
        });
    },
    api_get_performance_fetch: (params: any) => {
        return request({
            url: "/get/performance/fetch",
            method: METHOD,
            params,
        });
    },
    api_get_performance_fps: (params: any) => {
        return request({
            url: "/get/performance/fps",
            method: METHOD,
            params,
        });
    },
    api_get_performance_fp: (params: any) => {
        return request({
            url: "/get/performance/fp",
            method: METHOD,
            params,
        });
    },
    api_get_performance_fcp: (params: any) => {
        return request({
            url: "/get/performance/fcp",
            method: METHOD,
            params,
        });
    },
    api_get_performance_lcp: (params: any) => {
        return request({
            url: "/get/performance/lcp",
            method: METHOD,
            params,
        });
    },
    api_get_performance_cls: (params: any) => {
        return request({
            url: "/get/performance/cls",
            method: METHOD,
            params,
        });
    },
    api_get_performance_bfc: (params: any) => {
        return request({
            url: "/get/performance/bfc",
            method: METHOD,
            params,
        });
    },
    api_get_performance_resource: (params: any) => {
        return request({
            url: "/get/performance/resource",
            method: METHOD,
            params,
        });
    },
    api_get_performance_load: (params: any) => {
        return request({
            url: "/get/performance/load",
            method: METHOD,
            params,
        });
    }
}

export default performance;

