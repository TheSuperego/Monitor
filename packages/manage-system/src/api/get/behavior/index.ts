import request from "../../index";

const behavior = {
    api_get_behavior_onClick: (params: any) => {
        return request({
            url: "/get/behavior/onClick",
            method: "get",
            params,
        });
    },
    api_get_behavior_vueRouterChange: (params: any) => {
        return request({
            url: "/get/behavior/vueRouterChange",
            method: "get",
            params,
        });
    },
    api_get_behavior_pageAccessDuration: (params: any) => {
        return request({
            url: "/get/behavior/pageAccessDuration",
            method: "get",
            params,
        });
    },
    api_get_behavior_pageAccessHeight: (params: any) => {
        return request({
            url: "/get/behavior/pageAccessHeight",
            method: "get",
            params,
        });
    },
    api_get_behavior_pageChange: (params: any) => {
        return request({
            url: "/get/behavior/pageChange",
            method: "get",
            params,
        });
    },
    api_get_behavior_pv: (params: any) => {
        return request({
            url: "/get/behavior/pv",
            method: "get",
            params,
        });
    }
}

export default behavior;

