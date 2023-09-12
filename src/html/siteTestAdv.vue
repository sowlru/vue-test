<template>
  <section class="section-adv">
    <div class="wrap">
      <h2>Lorem</h2>
      <div class="row adv">
        <div class="col adv-item">
          <div class="adv-item__img">
            <img src="@/html/a.jpg" />
          </div>
          <div class="adv-item__text">
            <h3 class="adv-item__head">Lorem, ipsum.</h3>
            <div class="adv-item__desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              et numquam nisi dolorem error temporibus voluptatibus cumque neque
              repellat repudiandae.
            </div>
          </div>
        </div>
        <div class="col adv-item">
          <div class="adv-item__img">
            <img src="@/html/a.jpg" />
          </div>
          <div class="adv-item__text">
            <h3 class="adv-item__head">Lorem, ipsum.</h3>
            <div class="adv-item__desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              et numquam nisi dolorem error temporibus voluptatibus cumque neque
              repellat repudiandae.
            </div>
          </div>
        </div>
        <div class="col adv-item">
          <div class="adv-item__img">
            <img src="@/html/a.jpg" />
          </div>
          <div class="adv-item__text">
            <h3 class="adv-item__head">Lorem, ipsum.</h3>
            <div class="adv-item__desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              et numquam nisi dolorem error temporibus voluptatibus cumque neque
              repellat repudiandae.
            </div>
          </div>
        </div>
        <div class="col adv-item">
          <div class="adv-item__img">
            <img src="@/html/a.jpg" />
          </div>
          <div class="adv-item__text">
            <h3 class="adv-item__head">Lorem, ipsum.</h3>
            <div class="adv-item__desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              et numquam nisi dolorem error temporibus voluptatibus cumque neque
              repellat repudiandae.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.section-adv {
  text-align: left;
}
.adv-item {
  display: flex;
  width: calc(100% / 2 - 30px);
  margin-bottom: 35px;
}
.adv-item__img {
  width: 130px;
  height: 130px;
  background-color: #1d9d73;
  border-radius: 50%;
  text-align: center;
  line-height: 130px;
  margin-right: 20px;
}
.adv-item__img img {
  width: 100px;
  vertical-align: middle;
}

.adv-item__text {
  width: calc(100% - 150px);
}
.adv-item__head {
  margin-top: 0;
  color: #1d9d73;
}
.adv-item__desc {
}
@media screen and (max-width: 1100px) {
  .adv-item {
    width: calc(100% / 1 - 30px);
  }
}
</style>
