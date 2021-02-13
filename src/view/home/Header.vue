<template>
  <div class="home-header">
    <div class="left">返回</div>
    <div class="input">内容</div>
    <div class="right">城市</div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="scss" scoped>
.home-header {
  display: flex;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  background-color: #00bcd4;
  color: #fff;
  .left {
    width: 0.64rem;
    float: left;
  }
  .right {
    width: 1.24rem;
    float: right;
  }
  .input {
    flex: 1;
    margin-top: 0.12rem;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-left: 0.2rem;
    border-radius: 0.1rem;
    background-color: #fff;
    color: #ccc;
  }
}
</style>