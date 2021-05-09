import { request } from './index';

export function getHome(page, table) {
    return request({
        url: '/getdata',
        params: {
            page: page,
            table: table
                // http://localhost:44369/api/data/getdata?page=1&table=goods_phone
        }
    })
}
//购买接口
export function addOrder(user, id, count) {
    return request({
        method: 'post',
        url: '/addOrder',
        params: {
            user: user,
            g_id: id,
            count: count
        }
    })
}
//搜索接口
export function search(name) {
    return request({
        method: 'post',
        url: '/search',
        params: {
            g_name: name
        },

    })
}