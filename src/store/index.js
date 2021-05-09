import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: "张三",
        isLogin: false,
        OrderMessage: false,
        goodsModel: {}
    },
    mutations: {
        chang(state, c) {
            state.OrderMessage = !c
        },
        addGoodsModel(state, item) {
            state.goodsModel = item
        }
    },
    actions: {},
    modules: {}
})