<template>
  <div class="wrap">
    <div class="message">
      <p class="message-content">message</p>
    </div>
    <div class="comment__icon">&#160;</div>
  </div>
</template>
<style scoped>
/*
justify-content: center;  flex-start flex-end center space-between space-around 
*/
.wrap {
  display: flex;
  justify-content: flex-start;
}
.message {
  position: relative;
  width: 200px;
  height: 50px;
  background-color: #a8ddfd;
  border: 1px solid #97c6e3;
  border-radius: 10px;
}
.message:after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-top: 15px solid #a8ddfd;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  top: 0;
  left: -15px;
}

.comment__icon {
  background: url('./comment.svg');
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
}
</style>
