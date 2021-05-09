import { request } from './index'

export function getCart(user) {
    return request({
        method: 'post',
        url: '/loadCart',
        params: {
            user: user
        }
    })
}
export function addCart(user, id, count) {
    return request({
        method: 'post',
        url: '/addCart',
        params: {
            user: user,
            g_id: id,
            count: count
        }
    })
}
export function deleteCart(user, id) {
    return request({
        url: '/deleteCart',
        params: {
            user: user,
            c_id: id
        }
    })
}