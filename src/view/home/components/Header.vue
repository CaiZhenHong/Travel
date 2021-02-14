<template>
  <div class="home-header">
    <div class="left iconfont">&#58887;</div>
    <div class="input">
      <span class="iconfont">&#59088;</span>输入城市/景点/游玩主题
    </div>
    <div class="right">
      城市
      <span class="iconfont right-icon">&#xe673;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="scss" scoped>
@import "@assets/style/variable";
.home-header {
  display: flex;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  background-color: $bgColor;
  color: #fff;

  .left {
    float: left;
    width: 0.64rem;
  }
  .right {
    float: right;
    width: 1.24rem;
    .right-icon {
      font-size: 0.3rem;
    }
  }
  .input {
    flex: 1;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    height: 0.64rem;
    line-height: 0.64rem;
    border-radius: 0.1rem;
    background-color: #fff;
    color: #ccc;
  }
}
</style>