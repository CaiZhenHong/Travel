<template>
  <div>
    <swiper :options="swiperOption" class="wrapper">
      <!-- slides -->
      <swiper-slide v-for="(item, key) in swiperList" :key="key">
        <img class="swiperImg" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
      },
      swiperList: [
        {
          id: "1",
          imgUrl:
            "http://imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg",
        },
        {
          id: "2",
          imgUrl:
            "//imgs.qunarzz.com/vs_ceph_vcimg/f03f5ac90ae59d0d9c6332a2bfd9782e.jpeg",
        },
        {
          id: "3",
          imgUrl:
            "//imgs.qunarzz.com/vs_ceph_vcimg/6ff121fd416169b8d56c60384e3baf79.jpeg",
        },
        {
          id: "4",
          imgUrl:
            "//imgs.qunarzz.com/vs_ceph_vcimg/f7813c9431796cc32ae7b7a78447342e.jpeg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 30.4%;
  .swiperImg {
    width: 100%;
  }
  ::v-deep .swiper-pagination-bullet-active {
    background: #fff;
  }
}
</style>