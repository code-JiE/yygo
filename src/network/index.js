import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://120.77.179.163:2023/api/data', //29a40373q5.zicp.vip:50812/api/data
        timeout: 5000
    })
    return instance(config)
}