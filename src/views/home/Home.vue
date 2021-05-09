<template>
  <div id="Home">
    <div class="swiper">
        <swiper></swiper>
    </div>
    <tabs class="home_tab">
      <goods-listy
        slot="slot1"
        :goodsData="goods['goods_phone'].list"
      ></goods-listy>
      <goods-listy
        slot="slot2"
        :goodsData="goods['goods_computer'].list"
      ></goods-listy>
      <goods-listy
        slot="slot3"
        :goodsData="goods['goods_maquillage'].list"
      ></goods-listy>
      <goods-listy
        slot="slot4"
        :goodsData="goods['goods_house'].list"
      ></goods-listy>
      <!-- <goods-listy slot="slot4" :goodsData="goods"></goods-listy> -->
      <div slot="slot5">
        <search></search>
      </div>
    </tabs>
    <!-- <transition name="el-fade-in">
      <div v-show="this.$store.state.OrderMessage" class="transition-box" >
        <settle class="settle1" ></settle>
      </div>
    </transition> -->

    <div class="adv" v-if="advEsc">
      <el-button
        type="danger"
        icon="el-icon-close"
        circle
        class="btn_delete"
        @click="advEsc = !advEsc"
      ></el-button>
      <img
        src="https://bizaladdin-img.cdn.bcebos.com/bizaladdin-img/bizaladdin-img/pc_game/cover/7862_cover_cover_7862_cover_cover_7862_cover_cover_7862_cover_cover_7862_cover_cover_7862_cover_cover_7862_cover_cover_7862_cover_cover_7862_cover_cover_7862_cover_cover_7862_cover_cover_7862_cover_cover_7862_cover_pic_6308d05cec8d60db065c8e60b90cc7e5.gif"
        alt=""
      />
    </div>

  </div>
</template>

<script>
// import axios from 'axios'
import GoodsListy from "./GoodsListy.vue";
import Tabs from "../../components/tabs/tabs.vue";
// import NavMenu from "../../components/navMenu/navMenu.vue";

import { getHome } from "@/network/getHome";
import Search from "views/home/search/search.vue";
import Swiper from 'views/home/swiper/swiper.vue';

//  import { request } from 'network/index';
export default {
  data() {
    return {
      goods: {
        goods_phone: { page: 1, list: [] },
        goods_computer: { page: 1, list: [] },
        goods_maquillage: { page: 1, list: [] },
        goods_house: { page: 1, list: [] },
        //   phone: { page: 1, table: "goods_phone" },
        //   phone: { page: 1, table: "goods_phone" },
      },
      advEsc: true,
    };
  },
  created() {
    this.getDataList();
    // this.getHomeData(1, "goods_computer");
    // this.getHomeData(1, "goods_maquillage");
    // this.getHomeData(1, "goods_house");
  },
  components: {
    GoodsListy,
    Tabs,
    Search,
    Swiper,
  },
  methods: {
    // .catch((err) => {
    //   console.log(err);
    //   this.getHomeData(page,table)
    // });
    getDataList() {
      getHome(1, "goods_phone").then((data) => {
        this.goods["goods_phone"].list = data.data;
        getHome(1, "goods_computer").then((data) => {
          this.goods["goods_computer"].list = data.data;
          getHome(1, "goods_maquillage").then((data) => {
            this.goods["goods_maquillage"].list = data.data;
            getHome(1, "goods_house").then((data) => {
              this.goods["goods_house"].list = data.data;
            });
          });
        });
      });
    },
  },
};
</script>

<style>


.swiper {
  position: relative;
  width: 100%;
  margin: 10px auto;
}
.home_tab {
  position: relative;
}
.transition-box {
  z-index: 99;
}
.adv {
  position: fixed;
  bottom: 0;
  right: 0;
}
.btn_delete {
  position: absolute;
}
</style>