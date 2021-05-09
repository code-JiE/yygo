<template>
        <el-carousel 
      interval=2000 height="120px" >
        <el-carousel-item  >
          <div  class="swiper_img">
            <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg?thumb=1&w=1839&h=180&f=webp&q=90" alt="">
          </div>
        </el-carousel-item>
        
       <el-carousel-item  >
          <div  class="swiper_img">
            <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1615d1842fe85914a545297836a44271.jpg?thumb=1&w=1839&h=180&f=webp&q=90" alt="">
          </div>
        </el-carousel-item>
        <el-carousel-item  >
          <div  class="swiper_img">
            <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41d16e66381cfeda7b6b39ab67678d5e.jpg?thumb=1&w=1839&h=180&f=webp&q=90" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
</template>

<script>
export default {

}
</script>

<style scoped>
.swiper_img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper_img img{
width: 100%;

/* height: 100%; */
}
</style>