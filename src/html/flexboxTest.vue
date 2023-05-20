<template>
  <div class="flexbox">
    <div class="box">a</div>
    <div class="box">
      <div class="box2">b</div>
      <div class="box2">c</div>
    </div>
  </div>
</template>
<style scoped>
/*
justify-content: center;  flex-start flex-end center space-between space-around 
*/
.flexbox {
  display: flex;
  justify-content: space-around;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100px;
  border: 1px solid grey;
}
.box2 {
  width: 50px;
  height: 50px;
  border: 1px solid grey;
}
</style>
