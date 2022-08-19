import request from "../../index";

const behavior = {
    api_report_behavior_onClick: (params: any) => {
        return request({
            url: "/report/behavior/onClick",
            method: "post",
            params,
        });
    },
    api_report_behavior_vueRouterChange: (params: any) => {
        return request({
            url: "/report/behavior/vueRouterChange",
            method: "post",
            params,
        });
    },
    api_report_behavior_pageAccessDuration: (params: any) => {
        return request({
            url: "/report/behavior/pageAccessDuration",
            method: "post",
            params,
        });
    },
    api_report_behavior_pageAccessHeight: (params: any) => {
        return request({
            url: "/report/behavior/pageAccessHeight",
            method: "post",
            params,
        });
    },
    api_report_behavior_pageChange: (params: any) => {
        return request({
            url: "/report/behavior/pageChange",
            method: "post",
            params,
        });
    },
    api_report_behavior_pv: (params: any) => {
        return request({
            url: "/report/behavior/pv",
            method: "post",
            params,
        });
    }
}

export default behavior;

