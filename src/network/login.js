import { request } from './index';

export function login(user, password) {
    return request({
        url: '/login',
        method: 'post',
        params: {
            user: user,
            password: password
                // http://localhost:44369/api/data/getdata?page=1&table=goods_phone
        }
    })
}
export function register(user, password) {
    return request({
        url: '/register',
        method: 'post',
        params: {
            user: user,
            password: password
                // http://localhost:44369/api/data/getdata?page=1&table=goods_phone
        }
    })
}
export function checkExist(user) {
    return request({
        url: '/userIsExist',
        method: 'post',
        params: {
            user: user,
            // http://localhost:44369/api/data/getdata?page=1&table=goods_phone
        }
    })
}