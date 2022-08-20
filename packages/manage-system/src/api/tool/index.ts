import request from "../index";

const api_tool = {
    api_tool_export_interface: (params: any) => {
        return request({
            url: "/ExportInterface",
            method: "post",
            params,
        });
    }
}

export default api_tool;




