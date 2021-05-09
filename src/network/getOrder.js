import { request } from './index'

export function getOrder(user) {
    return request({
        url: '/loadOrder',
        method: 'post',
        params: {
            user: user
        }
    })
}
export function addOrder(user, g_id, add, name, phone) {
    return request({
        url: '/addOrder',
        method: 'post',
        params: {
            user: user,
            count: 1,
            g_id,
            add,
            name,
            phone
        }
    })
}