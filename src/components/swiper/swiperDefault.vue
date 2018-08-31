<template>
    <div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
                
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  data () {
    return {
      slide: [1,2,3,4,5],
      swiperOption: {
          direction: 'vertical',
          pagination: {
              el: '.swiper-pagination',
              clickable: true
          }
      }
    }
  }
}
</script>

<style scoped>
.swiper-slide{
    height: 4rem;
    text-align: center;
    padding-top: 3rem;
    border-bottom: 1px solid #ccc;
}
.swiper{
    height: 7rem;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
}
</style>
