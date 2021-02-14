<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, key) of pages" :key="key">
        <div class="icon" v-for="(item, key) in page" :key="key">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.iconUrl" alt="" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HeaderIcons",
  data() {
    return {
      swiperOption: {},
      iconList: [
        {
          id: 1,
          iconUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店",
        },
        {
          id: 2,
          iconUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          desc: "机票",
        },
        {
          id: 3,
          iconUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
          desc: "火车票",
        },
        {
          id: 4,
          iconUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png",
          desc: "度假",
        },
        {
          id: 5,
          iconUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png",
          desc: "景点门票",
        },
        {
          id: 6,
          iconUrl:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          desc: "海外酒店",
        },
        {
          id: 7,
          iconUrl:
            "https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png",
          desc: "低价机票",
        },
        {
          id: 8,
          iconUrl:
            "https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png",
          desc: "汽车票船票",
        },
      ],
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="scss" scoped >
@import "@assets/style/variable";
@import "@assets/style/mixins.scss";
.icons {
  ::v-deep .swiper-container {
    height: 0;
    padding-bottom: 50%;
  }
  .icon {
    float: left;
    position: relative;
    overflow: hidden;
    width: 25%;
    height: 0;
    text-align: center;
    padding-bottom: 25%;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon-img-content {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      @include ellipsis();
      color: $darkTextColor;
    }
  }
}
</style>