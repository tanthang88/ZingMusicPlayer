import axiosClient from "./axiosClient";

const ZingAPI = {
    getSong(params: any){
        const url = '/api/song'
        return axiosClient.get(url, {params})
    }

}
export default ZingAPI